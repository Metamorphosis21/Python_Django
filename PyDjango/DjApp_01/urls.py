from django.urls import path  
# Importing the path function to define URL patterns
from . import views  
# Importing views from the current application

urlpatterns = [
    path('', views.app1, name='app01'),  
    path('<int:md_id>/', views.app1_detail, name='app01_details'),  # from views & int starts from 7 to 11
]