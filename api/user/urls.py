from django.urls import path
from .views import MyProfileAPI

urlpatterns = [
    path('my-profile/', MyProfileAPI.as_view(), name='my_profile')
]
