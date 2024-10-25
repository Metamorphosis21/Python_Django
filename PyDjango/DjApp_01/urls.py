from django.urls import path  
# Importing the path function to define URL patterns
from . import views  
# Importing views from the current application

urlpatterns = [
    path('', views.app1, name='app01'),  
]