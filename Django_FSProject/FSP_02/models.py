from django.db import models
import string 
import random
from django.core.validators import MaxValueValidator, MinValueValidator


def get_unique_id():
    length = 8
    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if MusicRoom.objects.filter(room_id=code).count() == 0:
            break
    return code

# Create your models here.
class MusicRoom(models.Model):
    room_id = models.CharField(max_length=10, default=get_unique_id ,unique=True)
    room_host = models.CharField(max_length=24, unique=True)
    guest_pause = models.BooleanField(null=False, default=False)
    mass_skip = models.IntegerField(null=False, default=1)
    member_limit = models.IntegerField(
        null=False, 
        default=5,
        validators=[
            MinValueValidator(1, message="Member limit must be at least 1"),
            MaxValueValidator(50, message="Member limit cannot exceed 10")
        ]
    )
    created_at = models.DateTimeField(auto_now_add=True)