from django.urls import path
from .views import *

urlpatterns = [
    # apartment
    path('apartment-types/', ApartmentTypesAPI.as_view(), name='apartment_types'),
    path('apartments/', ApartmentsAPI.as_view(), name='apartments'),
    path('apartment/<str:id>/', ApartmentAPI.as_view(), name='apartment'),
    path('my-apartments/', MyApartmentsAPI.as_view(), name='my_apartments'),
    path('add-apartment/', AddApartmentAPI.as_view(), name='add_apartment'),
    path('remove-apartment/<str:id>/', RemoveApartmentAPI.as_view(), name='remove_apartment'),
    path('update-apartment/<str:id>/', UpdateApartmentAPI.as_view(), name='update_apartment'),
    path('like-unlike-apartment/<str:id>/', LikeOrUnlikeApartmentAPI.as_view(), name='like_unlike_apartment'),
    
    # house
    path('house-types/', HouseTypesAPI.as_view(), name='house_types'),
    path('houses/', HousesAPI.as_view(), name='houses'),
    path('house/<str:id>/', HousesAPI.as_view(), name='house'),
    path('my-houses/', MyHousesAPI.as_view(), name='my_houses'),
    path('add-house/', AddHouseAPI.as_view(), name='add_house'),
    path('remove-house/<str:id>/', RemoveHouseAPI.as_view(), name='remove_house'),
    path('update-house/<str:id>/', UpdateHouseAPI.as_view(), name='update_house'),
    path('like-unlike-house/<str:id>/', LikeOrUnlikeHouseAPI.as_view(), name='like_unlike_house'),
    
    # estate
    path('estates/<str:region>/', EstatesAPI.as_view(), name='estates'),
    path('regions/', RegionsAPI.as_view(), name='regions'),
    path('add-estate/', AddEstateAPI.as_view(), name='add_estate'),

    # house images
    path('add-house-image/<str:house_id>/', AddHouseImageAPI.as_view(), name='add_house_img'),
    path('remove-house-image/<str:image_id>/', RemoveHouseImageAPI.as_view(), name='remove_house_img'),

    # apartment images
    path('add-apartment-image/<str:apartment_id>/', AddApartmentImageAPI.as_view(), name='add_apartment_img'),
    path('remove-apartment-image/<str:image_id>/', RemoveApartmentImageAPI.as_view(), name='remove_apartment_img'),
]
