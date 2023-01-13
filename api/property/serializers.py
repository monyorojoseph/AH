from rest_framework import serializers
from .models import House, Apartment, Place, Image

class HouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = House
        fields = "__all__"

class ApartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apartment
        fields = "__all__"

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = "__all__"

class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = "__all__"