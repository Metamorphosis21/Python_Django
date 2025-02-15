from django.contrib import admin
from .models import MusicRoom

admin.site.register(MusicRoom)
# class MusicRoomAdmin(admin.ModelAdmin):
    # list_display = ('room_id', 'room_host', 'guest_pause', 'mass_skip', 'created_at')
    # search_fields = ('room_id', 'room_host')