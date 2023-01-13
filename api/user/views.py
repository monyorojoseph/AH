from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework import status

from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model

from .models import Profile
from .serializers import ProfileSerializer


User = get_user_model()

class MyProfileAPI(APIView):
    permission_classes = [ IsAuthenticated ]
    authentication_classes = [ TokenAuthentication ]

    def get(self, request, format=None):
        profile = get_object_or_404(Profile, user=request.user)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data, status=status.HTTP_200_OK)
        
# update email
# update profile