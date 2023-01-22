from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework import status
from drf_spectacular.utils import extend_schema, inline_serializer
from rest_framework import serializers

from setup.shared.pagination import CustomPageNumberPagination
from setup.shared.filter import CustomFilter


from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model

from .models import House, Apartment, Estate, Image
from .serializers import *

User = get_user_model()


class HomeAPI(APIView):
    @extend_schema(
        responses=inline_serializer(
            name='home',
            fields= {
                "total_apts": serializers.IntegerField(),
                "total_hses": serializers.IntegerField(),
                "total_regions": serializers.IntegerField()
            }
        )
    )
    def get(self, request, format=None):
        apartments = Apartment.objects.all()
        houses = House.objects.all()
        regions = Estate.objects.distinct('region') 
        context = {  
            "total_apts": apartments.count(),
            "total_hses": houses.count(),
            "total_regions": regions.count(),
        } 
        return Response(context, status=status.HTTP_200_OK)


""" Apartment API views """
# list apartment types
class ApartmentTypesAPI(APIView):
    @extend_schema(
        responses=inline_serializer(
            name='apartmentTypes',
            fields= {
                'types': serializers.ListSerializer(
                    child=serializers.JSONField()
                )
            }
        )
    )
    def get(self, requesst, format=None):
        data = {"types":[{"label": type[0], 'value': type[0]} for type in Apartment.TYPES]}
        return Response(data, status=status.HTTP_200_OK)

# list apartments
class ApartmentsAPI(APIView, CustomPageNumberPagination):
    pagination_class = CustomPageNumberPagination
    filterset_fields = ['estate__slug', 'type', 'estate__region']

    @extend_schema(
        responses= SlimApartmentSerializer(many=True)
    )
    def get(self, request, format=None):
        queryset = Apartment.objects.all()   
        ascend = "=-price" in request.get_full_path()
        if ascend:
            queryset = queryset.order_by('-price')
        filter = CustomFilter()
        filtered_queryset = filter.filter_queryset(request, queryset, self)
        results = self.paginate_queryset(filtered_queryset, request, view=self)
        serializer = SlimApartmentSerializer(results, many=True)
        return Response(self.get_paginated_response(serializer.data), status=status.HTTP_200_OK)

class ApartmentsSummaryAPI(APIView):
    @extend_schema(
        responses=ApartmentManagerSerilaizer(many=True)
    )
    def get(self, request, format=None):
        queryset =Apartment.objects.summary()
        serializer = ApartmentManagerSerilaizer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# apartment details
class ApartmentAPI(APIView):
    @extend_schema(
        responses=ApartmentDetailSerializer()
    )
    def get(self, request, id, format=None):
        apartment = get_object_or_404(Apartment, id=id)
        serializer = ApartmentDetailSerializer(apartment)
        return Response(serializer.data, status=status.HTTP_200_OK)

# list my apartments
class MyApartmentsAPI(APIView):
    permission_classes = [ IsAuthenticated ]
    authentication_classes = [ TokenAuthentication ]
    @extend_schema(
        responses= SlimApartmentSerializer(many=True)
    )
    def get(self, request, format=None):
        queryset = Apartment.objects.filter(listed_by=request.user)
        serializer = SlimApartmentSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# add apartment
class AddApartmentAPI(APIView):
    permission_classes = [ IsAuthenticated ]
    authentication_classes = [ TokenAuthentication ]
    @extend_schema(
        request= AddApartmentSerializer(),
        responses=ApartmentDetailSerializer()
    )
    def post(self, request, format=None):
        data = request.data
        return Response(status=status.HTTP_201_CREATED)


# delete apartment
class RemoveApartmentAPI(APIView):
    permission_classes = [ IsAuthenticated ]
    authentication_classes = [ TokenAuthentication ]
    @extend_schema(
        responses=inline_serializer(
            name='removeApartment',
            fields= {
                'details': serializers.CharField()
            }
        )
    )
    def delete(self, request, id, format=None):
        apartment = get_object_or_404(Apartment, id=id)
        apartment.delete()
        return Response(status=status.HTTP_200_OK)

# update apartment
class UpdateApartmentAPI(APIView):
    permission_classes = [ IsAuthenticated ]
    authentication_classes = [ TokenAuthentication ]
    @extend_schema(
        request= AddApartmentSerializer(),
        responses=ApartmentDetailSerializer()
    )
    def update(self, request, id, format=None):
        data = request.data
        apartment = get_object_or_404(Apartment, id=id)
        # perform update operations

        return Response(status=status.HTTP_200_OK)

# like or unlike apartment
class LikeOrUnlikeApartmentAPI(APIView):
    permission_classes = [ IsAuthenticated ]
    authentication_classes = [ TokenAuthentication ]
    @extend_schema(
        responses=inline_serializer(
            name='LikeOrUnlikeApartment',
            fields= {
                'details': serializers.CharField()
            }
        )
    )
    def get(self, request, id, format=None):
        user = request.user
        apartment = get_object_or_404(Apartment, id=id)
        if user in apartment.likes:
            apartment.likes.remove(user)
            return Response(status=status.HTTP_200_OK)
        apartment.likes.add(user)
        return Response(status=status.HTTP_200_OK)

""" House API views """
# list house types
class HouseTypesAPI(APIView):
    @extend_schema(
        responses=inline_serializer(
            name='houseTypes',
            fields= {
                'types': serializers.ListSerializer(
                    child=serializers.JSONField()
                )
            }
        )
    )
    def get(self, requesst, format=None):
        data = {"types":[{"label": type[0], 'value': type[0]} for type in House.TYPES]}
        return Response(data, status=status.HTTP_200_OK)

# list houses
class HousesAPI(APIView, CustomPageNumberPagination):
    pagination_class = CustomPageNumberPagination
    filterset_fields = ['estate__slug', 'type', 'estate__region', 'bathrooms']
    
    @extend_schema(
        responses=SlimHouseSerializer(many=True)
    )
    def get(self, request, format=None):
        queryset = House.objects.all()
        ascend = "=-price" in request.get_full_path()
        if ascend:
            queryset = queryset.order_by('-price')
        filter = CustomFilter()
        filtered_queryset = filter.filter_queryset(request, queryset, self)
        results = self.paginate_queryset(filtered_queryset, request, view=self)
        serializer = SlimHouseSerializer(results, many=True)
        return Response(self.get_paginated_response(serializer.data), status=status.HTTP_200_OK)

class HousesSummaryAPI(APIView):
    @extend_schema(
        responses=HouseManagerSerilaizer(many=True)
    )
    def get(self, request, format=None):
        queryset =House.objects.summary()
        serializer = HouseManagerSerilaizer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# house details
class HouseAPI(APIView):
    @extend_schema(
        responses=HouseDetailSerializer()
    )
    def get(self, request, id, format=None):
        house = get_object_or_404(House, id=id)
        serializer = HouseDetailSerializer(house)
        return Response(serializer.data, status=status.HTTP_200_OK)

# list my house
class MyHousesAPI(APIView):
    permission_classes = [ IsAuthenticated ]
    authentication_classes = [ TokenAuthentication ]
    @extend_schema(
        responses=SlimHouseSerializer(many=True)
    )
    def get(self, request, format=None):
        queryset = House.objects.filter(listed_by=request.user)
        serializer = SlimHouseSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# add house
class AddHouseAPI(APIView):
    permission_classes = [ IsAuthenticated ]
    authentication_classes = [ TokenAuthentication ]
    @extend_schema(
        request=AddHouseSerializer(),
        responses=HouseDetailSerializer()
    )
    def post(self, request, format=None):
        data = request.data
        return Response(status=status.HTTP_201_CREATED)

# delete house
class RemoveHouseAPI(APIView):
    permission_classes = [ IsAuthenticated ]
    authentication_classes = [ TokenAuthentication ]
    @extend_schema(
        responses=inline_serializer(
            name='removeHouse',
            fields= {
                'details': serializers.CharField()
            }
        )
    )
    def delete(self, request, id, format=None):
        house = get_object_or_404(House, id=id)
        house.delete()
        return Response(status=status.HTTP_200_OK)

# update house
class UpdateHouseAPI(APIView):
    permission_classes = [ IsAuthenticated ]
    authentication_classes = [ TokenAuthentication ]
    @extend_schema(
        request=AddHouseSerializer(),
        responses=HouseDetailSerializer()
    )
    def update(self, request, id, format=None):
        data = request.data
        house = get_object_or_404(House, id=id)
        # perform update operations

        return Response(status=status.HTTP_200_OK)

# like or unlike house
class LikeOrUnlikeHouseAPI(APIView):
    permission_classes = [ IsAuthenticated ]
    authentication_classes = [ TokenAuthentication ]
    @extend_schema(
        responses=inline_serializer(
            name='likeOrUnlikeHouse',
            fields= {
                'details': serializers.CharField()
            }
        )
    )
    def get(self, request, id, format=None):
        user = request.user
        house = get_object_or_404(House, id=id)
        if user in House.likes:
            house.likes.remove(user)
            return Response(status=status.HTTP_200_OK)
        house.likes.add(user)
        return Response(status=status.HTTP_200_OK)


""" estate API views """
# list estates
class EstatesAPI(APIView):
    @extend_schema(
        responses=EstateSerializer(many=True)
    )
    def get(self, request, region, format=None):
        queryset = Estate.objects.filter(region=region) 
        serializer = EstateSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# list counties
class RegionsAPI(APIView):
    @extend_schema(
        responses=RegionSerializer(many=True)
    )
    def get(self, request, format=None):
        querset = Estate.objects.distinct('region')
        serializer = RegionSerializer(querset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# add estate
class AddEstateAPI(APIView):
    permission_classes = [ IsAuthenticated ]
    authentication_classes = [ TokenAuthentication ]

    @extend_schema(
        request=AddEstateSerializer(),
        responses=inline_serializer(
            name='addEstate',
            fields= {
                'details': serializers.CharField()
            }
        )
    )
    def post(self, request, format=None):
        data = request.data 
        # add estate if you're either agent or management
        return Response(status=status.HTTP_200_OK)

""" Image API views """
# add house image
class AddHouseImageAPI(APIView):    
    permission_classes = [ IsAuthenticated ]
    authentication_classes = [ TokenAuthentication ]
    @extend_schema(
        request=AddImageSerializer(),
        responses=inline_serializer(
            name='addHouseImage',
            fields= {
                'details': serializers.CharField()
            }
        )
    )
    def post(self, request, house_id, format=None):
        house = get_object_or_404(House, id=house_id)
        images = request.FILES
        return Response(status=status.HTTP_201_CREATED)

# delete house image
class RemoveHouseImageAPI(APIView):
    permission_classes = [ IsAuthenticated ]
    authentication_classes = [ TokenAuthentication ]
    @extend_schema(
        responses=inline_serializer(
            name='removeHouseImage',
            fields= {
                'details': serializers.CharField()
            }
        )
    )
    def delete(self, request, image_id, format=None):
        image = get_object_or_404(Image, id=image_id)
        image.delete()
        return Response(status=status.HTTP_200_OK)


# add apartment image
class AddApartmentImageAPI(APIView):    
    permission_classes = [ IsAuthenticated ]
    authentication_classes = [ TokenAuthentication ]
    @extend_schema(
        request=AddImageSerializer(),
        responses=inline_serializer(
            name='addApartmentImage',
            fields= {
                'details': serializers.CharField()
            }
        )
    )
    def post(self, request, apartment_id, format=None):
        apartment = get_object_or_404(Apartment, id=apartment_id)
        images = request.FILES
        return Response(status=status.HTTP_201_CREATED)

# delete apartment image
class RemoveApartmentImageAPI(APIView):
    permission_classes = [ IsAuthenticated ]
    authentication_classes = [ TokenAuthentication ]
    @extend_schema(
        responses=inline_serializer(
            name='removeApartmentImage',
            fields= {
                'details': serializers.CharField()
            }
        )
    )
    def delete(self, request, image_id, format=None):
        image = get_object_or_404(Image, id=image_id)
        image.delete()
        return Response(status=status.HTTP_200_OK)