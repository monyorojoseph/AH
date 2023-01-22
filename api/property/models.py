import uuid
from django.contrib.gis.db import models
from django.contrib.gis.db.models import *

from django_lifecycle import LifecycleModelMixin, hook, AFTER_CREATE
# from imagekit.models import ProcessedImageField
# from imagekit.processors import ResizeToFill

def default_json():
    return {
      "type": "node"
    }

class Base(LifecycleModelMixin, models.Model):
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)   
    location = models.PointField()
    estate = models.ForeignKey('Estate', on_delete=models.SET_NULL, null=True, related_name='estate_%(class)s')
    price = models.PositiveBigIntegerField()
    likes = models.ManyToManyField('user.CustomUser', blank=True, related_name='my_%(class)s_likes')
    details = models.JSONField(default=default_json)
    listed_by = models.ForeignKey('user.CustomUser', on_delete=models.CASCADE, related_name='my_%(class)s_listing')
    listed_on = models.DateTimeField(auto_now_add=True)
    similar_units = models.PositiveIntegerField(default=1)
    amenities = models.JSONField(default=default_json)
    available_units = models.PositiveIntegerField(default=1)

    SALE = "Sale"
    RENT = "Rent"
    OWNERSHIP = [
        (SALE, SALE),
        (RENT, RENT)
    ]
    ownership = models.CharField(max_length=50, choices=OWNERSHIP, default=RENT)

    class Meta:
        abstract = True


class ApartmentManager(models.Manager):
    def summary(self):
        return self.values('type') \
            .annotate(total=Count('id'), max=Max('price'), 
            min=Min('price'), avg=Avg('price'), available=Sum('available_units'))

class Apartment(Base):
    ONE_BEDROOM = 'One Bedroom'
    TWO_BEDROOM = 'Two Bedroom'
    THREE_BEDROOM = 'Three Bedroom'
    STUDIO = 'Studio'
    TYPES = [
        (STUDIO, STUDIO),
        (ONE_BEDROOM, ONE_BEDROOM),
        (TWO_BEDROOM, TWO_BEDROOM),
        (THREE_BEDROOM, THREE_BEDROOM),
    ]

    type = models.CharField(max_length=50, choices=TYPES, default=STUDIO)
    name = models.CharField(max_length=200)

    objects = ApartmentManager()

    class Meta:
        ordering = ['price']

    def __str__(self) -> str:
        return self.name
    
    def apartment_summary(self):
        pass

class HouseManager(models.Manager):
    def summary(self):
        return self.values('type') \
            .annotate(total=Count('id'), max=Max('price'), 
            min=Min('price'), avg=Avg('price'), available=Sum('available_units'))

class House(Base):
    TWO_BEDROOM = 'Two Bedroom'
    THREE_BEDROOM = 'Three Bedroom'
    FOUR_BEDROOM = 'Four Bedroom'
    FIVE_BEDROOM = 'Five Bedroom'

    TYPES = [
        (TWO_BEDROOM, TWO_BEDROOM),
        (THREE_BEDROOM, THREE_BEDROOM),
        (FOUR_BEDROOM, FOUR_BEDROOM),
        (FIVE_BEDROOM, FIVE_BEDROOM),
    ]

    type = models.CharField(max_length=50, choices=TYPES, default=TWO_BEDROOM)
    bathrooms = models.PositiveIntegerField(default=1)
    village = models.CharField(max_length=100)

    objects = HouseManager()

    def __str__(self) -> str:
        return self.village

    class Meta:
        ordering = ['price']
    
    def house_summary(self):
        pass

class EstateManager(models.Manager):
    def regions_total_estates(self):
        return self.values('region').annotate(estates=Count('name'))

    def regions_total_apartments(self):
        return self.values('region').annotate(apartments=Count('estate_apartment'))

    def regions_total_houses(self):
        return self.values('region').annotate(houses=Count('estate_house'))

class Estate(LifecycleModelMixin, models.Model):
    region = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, null=True, blank=True)

    objects = EstateManager()

    def __str__(self) -> str:
        return f'{self.region} {self.name}'
    
    class Meta:
        unique_together = ('region', 'name')
    
    @hook(AFTER_CREATE)
    def create_slug(self):
        return f"{self.region}_{self.name}"

class Image(models.Model):
    image = models.ImageField(upload_to='media/property')
    
    house = models.ForeignKey('House', on_delete=models.CASCADE, 
            null=True, blank=True, related_name='house_images')
    apartment = models.ForeignKey('Apartment', on_delete=models.CASCADE, 
            null=True, blank=True, related_name='apartement_images')
    
    def __str__(self) -> str:
        if self.house:
            return str(self.house.village)
        return str(self.apartment.name)
