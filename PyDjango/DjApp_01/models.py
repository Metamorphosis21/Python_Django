from django.db import models
from django.utils import timezone

# Create your models here.
class  model1(models.Model):    # from the above imported models , we take a Model
    # restricted choice given to the user
    MODEL_TYPES = [
        ('mt1', 'm_type1'),
        ('mt2', 'm_type2'),
        ('mt3', 'm_type3'),
        ('mt4', 'm_type4'),
        ('mt5', 'm_type5'),
    ]
    # fields for model1     
    name = models.CharField(max_length=50)
    images = models.ImageField(upload_to='')    # images are not supported intially so we need a third party plugin-(Pillow) & some additional settings
    date = models.DateTimeField(default=timezone.now)   # imported timezone lib from utils 
    # field highly dependent on the choices given by us
    ml_types = models.CharField(max_length=3 , choices=MODEL_TYPES)