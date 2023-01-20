from django.contrib import admin
from .models import Estate, Apartment, House, Image
from django.contrib.gis.admin import OSMGeoAdmin

@admin.register(Estate)
class EstateAdmin(admin.ModelAdmin):
    list_display = ['slug', 'region', 'name']

admin.site.register(Image)

@admin.register(House)
class HouseAdmin(OSMGeoAdmin):
    list_display = ['id', 'village']


@admin.register(Apartment)
class HouseAdmin(OSMGeoAdmin):
    list_display = ['id', 'name']


