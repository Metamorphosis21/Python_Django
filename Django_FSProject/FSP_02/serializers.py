from rest_framework import serializers
from .models import MusicRoom

# Fields for room model
class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = MusicRoom   
        fields = ['id', 'room_id', 'room_host', 'guest_pause', 'mass_skip', 'member_limit', 'created_at']
        
# Fields to create a room model        
class CreateRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = MusicRoom
        fields = ['guest_pause', 'mass_skip', 'member_limit', 'created_at']
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
# - **Data Conversion**: Serializers convert complex data types (e.g., Django models) into JSON or other formats for APIs.
# - **Validation**: They validate incoming data to ensure correctness and safety.
# - **Data Manipulation**: Define how data is represented and manipulated, specifying included or excluded fields.
# - **Integration with Django Models**: Model serializers auto-generate fields from model fields, simplifying work with models.
# - **DRY Principle**: Avoid repetitive code for data conversion and validation, adhering to "Don't Repeat Yourself."