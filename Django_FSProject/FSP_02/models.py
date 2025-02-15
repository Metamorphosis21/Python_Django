from django.db import models
import string 
import random

def get_unique_id():
    len = 10
    while True:
        room_id = ''.join(random.choice(string.ascii_uppercase, k = len))
        if MusicRoom.objects.filter(room_id = room_id).count() == 0:
            break
    return room_id

# Create your models here.
class MusicRoom(models.Model):
    room_id = models.CharField(max_length=10, default="" ,unique=True)
    room_host = models.CharField(max_length=24, unique=True)
    guest_pause = models.BooleanField(null=False, default=False)
    mass_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)
