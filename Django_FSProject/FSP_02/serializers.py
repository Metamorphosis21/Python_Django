from rest_framework import serializers
from .models import MusicRoom

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = MusicRoom   
        fields = ['id', 'room_id', 'room_host', 'guest_pause', 'mass_skip', 'created_at']