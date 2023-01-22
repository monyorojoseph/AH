from rest_framework import serializers
from .models import House, Apartment, Estate, Image

class AddHouseSerializer(serializers.Serializer):
    latitude = serializers.FloatField()
    longtitude = serializers.FloatField()
    estate = serializers.CharField()
    price = serializers.IntegerField()
    details = serializers.JSONField()
    similar_units = serializers.IntegerField()
    amenities = serializers.JSONField()
    available_units = serializers.IntegerField()
    ownership = serializers.CharField()
    type = serializers.CharField()
    bathrooms = serializers.IntegerField()
    village = serializers.CharField()

class SlimHouseSerializer(serializers.ModelSerializer):
    cover_image = serializers.SerializerMethodField()
    estate = serializers.SerializerMethodField()
    lon = serializers.SerializerMethodField()
    lat = serializers.SerializerMethodField()
    class Meta:
        model = House
        fields = ['id', 'village', 'cover_image', 'price', 'estate', 'lat', 'lon']

    def get_estate(self, obj):
        return obj.estate.name

    def get_cover_image(self, obj):
        image = ImageSerializer(obj.house_images.first()).data['image']
        return image

    def get_lon(self, obj):
        return obj.location[0]

    def get_lat(self, obj):
        return obj.location[1]

class HouseDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = House
        fields = "__all__"

class HouseManagerSerilaizer(serializers.ModelSerializer):
    type = serializers.CharField()
    max = serializers.IntegerField()
    min  = serializers.IntegerField()
    avg  = serializers.IntegerField()
    total  = serializers.IntegerField()
    available = serializers.IntegerField()
    class Meta:
        model = House
        fields = ['type', 'max', 'min', 'avg', 'total', 'available']


class AddApartmentSerializer(serializers.Serializer):
    latitude = serializers.FloatField()
    longtitude = serializers.FloatField()
    estate = serializers.CharField()
    price = serializers.IntegerField()
    details = serializers.JSONField()
    similar_units = serializers.IntegerField()
    amenities = serializers.JSONField()
    available_units = serializers.IntegerField()
    ownership = serializers.CharField()
    type = serializers.CharField()
    name = serializers.CharField()


class SlimApartmentSerializer(serializers.ModelSerializer):
    cover_image = serializers.SerializerMethodField()
    estate = serializers.SerializerMethodField()
    lon = serializers.SerializerMethodField()
    lat = serializers.SerializerMethodField()

    class Meta:
        model = Apartment
        fields = ['id', 'name', 'cover_image', 'price', 'estate', 'lat', 'lon']
    
    def get_estate(self, obj):
        return obj.estate.name

    def get_cover_image(self, obj):
        image = ImageSerializer(obj.apartement_images.first()).data['image']
        return image

    def get_lon(self, obj):
        return obj.location[0]

    def get_lat(self, obj):
        return obj.location[1]

class ApartmentDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apartment
        fields = "__all__"

class ApartmentManagerSerilaizer(serializers.ModelSerializer):
    type = serializers.CharField()
    max = serializers.IntegerField()
    min  = serializers.IntegerField()
    avg  = serializers.IntegerField()
    total  = serializers.IntegerField()
    available = serializers.IntegerField()
    class Meta:
        model = Apartment
        fields = ['type', 'max', 'min', 'avg', 'total', 'available']

class AddImageSerializer(serializers.Serializer):
    image = serializers.ImageField()

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['image']

class AddEstateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estate
        fields = ['region', 'name']

class EstateSerializer(serializers.ModelSerializer):
    label = serializers.SerializerMethodField()
    value = serializers.SerializerMethodField()
    class Meta:
        model = Estate
        fields = ['label', 'value']
    
    def get_value(self, obj):
        return obj.slug

    def get_label(self, obj):
        return obj.name

class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estate
        fields = ['region']