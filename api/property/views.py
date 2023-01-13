from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import TokenAuthentication
from rest_framework import status

from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model

from .models import House, Apartment, Place, Image
from .serializers import (HouseSerializer, ApartmentSerializer, 
PlaceSerializer, ImageSerializer)

User = get_user_model()

""" Apartment API views """
# list apartment types
# list apartments
class ApartmentsAPI(APIView):
    pass
# add apartment
# delete apartment
# update apartment
# like or unlike apartment

""" House API views """
# list house types
# list houses
# add house
# delete house
# update house
# like or unlike house


""" Place API views """
# list places
# add place
# delete place
# update place

""" Image API views """
# add house image
# delete house image

# add apartment image
# delete apartment image