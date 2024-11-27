from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User  # relations of model

# Create your models here.
class model1(models.Model):    # from the above imported models , we take a Model
    # restricted choice given to the user (Enum)
    MODEL_TYPES = [
        ('Model_1', 'MT-1'),
        ('Model_2', 'MT-2'),
        ('Model_3', 'MT-3'),
        ('Model_4', 'MT-4'),
        ('Model_5', 'MT-5'),
    ]
    # fields for model1     
    name = models.CharField(max_length=50)
    images = models.ImageField(upload_to='img/')    # images are not supported intially so we need a third party plugin-(Pillow) & some additional settings
    date = models.DateTimeField(default=timezone.now)   # imported timezone lib from utils 
    # field highly dependent on the choices given by us
    ml_types = models.CharField(max_length=10 , choices=MODEL_TYPES)
    description = models.TextField(default='') # adding new fields , making changes in the model - run python manage.py makemigrations & python manage.py migrate scripts
    price = models.DecimalField(default=1.99 , max_digits=6, decimal_places=2)
    
    # to make changes in the model in the admin panel
    def __str__(self):
        return self.name


# One to many relation

class modelReviews(models.Model):
    md = models.ForeignKey(model1, on_delete=models.CASCADE, related_name='reviews')  # unique id ??
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()

    def __str__(self):
        return f'{self.user.username} review for {self.md.name}'


# Many to many relations

class modelStore(models.Model):
    st_name = models.CharField(max_length=100)
    st_address = models.CharField(max_length=100)
    st_varities = models.ManyToManyField(model1 , related_name='model_store')

    def __str__(self):
        return self.st_name


# One to One relation

class modelCertificate(models.Model):
    cert_name = models.OneToOneField(model1, on_delete=models.CASCADE, related_name='cert')
    cert_number = models.CharField(max_length=50)
    cert_issued_date = models.DateTimeField(default=timezone.now)
    cert_valid_adte = models.DateTimeField()

    def __str__(self):
        return f'Model certificate for {self.name.cert_name}'
    