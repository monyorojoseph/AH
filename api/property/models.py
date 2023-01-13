from django.contrib.gis.db import models
from django_lifecycle import LifecycleModelMixin
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill

class Base(LifecycleModelMixin, models.Model):    
    location = models.PointField()
    nearest_place = models.OneToOneField('Place', on_delete=models.SET_NULL, null=True, related_name='place_%(class)s')
    price = models.PositiveBigIntegerField()
    likes = models.ManyToManyField('user.CustomUser', blank=True, related_name='my_%(class)s_likes')
    details = models.TextField()
    listed_by = models.ForeignKey('user.CustomUser', on_delete=models.CASCADE, related_name='my_%(class)s_listing')
    listed_on = models.DateTimeField(auto_now_add=True)
    similar_units = models.PositiveIntegerField(default=1)
    amenities = models.TextField()
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

class Apartment(Base):
    ONE_BEDROOM = 'One Bedroom'
    TWO_BEDROOM = 'Two Bedroom'
    THREE_BEDROOM = 'Three Bedroom'
    STUDIO = 'Studio'
    TYPES = [
        (ONE_BEDROOM, ONE_BEDROOM),
        (TWO_BEDROOM, TWO_BEDROOM),
        (THREE_BEDROOM, THREE_BEDROOM),
        (STUDIO, STUDIO)
    ]

    type = models.CharField(max_length=50, choices=TYPES, default=STUDIO)
    name = models.CharField(max_length=200)

    def __str__(self) -> str:
        return self.name

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

    def __str__(self) -> str:
        return self.village

class Place(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self) -> str:
        return self.name

class Image(models.Model):
    image = ProcessedImageField(upload_to='property',
                                           processors=[ResizeToFill(300, 250)],
                                           format='JPEG',
                                           options={'quality': 100})
    
    house = models.ForeignKey('House', on_delete=models.CASCADE, 
            null=True, blank=True, related_name='house_images')
    apartment = models.ForeignKey('Apartment', on_delete=models.CASCADE, 
            null=True, blank=True, related_name='apartement_images')
    
    def __str__(self) -> str:
        return f"Image for {self.house.village or self.apartment.name}"
