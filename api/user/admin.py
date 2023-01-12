from django.contrib import admin
from django.contrib.auth.models import Group

from .models import Profile, CustomUser


admin.site.unregister(Group)

admin.site.register(CustomUser)
admin.site.register(Profile)
