from django.contrib import admin
from .models import Place, Apartment, House, Image
from django.contrib.gis.admin import OSMGeoAdmin

admin.site.register(Place)
admin.site.register(Image)

@admin.register(House)
class HouseAdmin(OSMGeoAdmin):
    list_display = ['id', 'village']


@admin.register(Apartment)
class HouseAdmin(OSMGeoAdmin):
    list_display = ['id', 'name']


