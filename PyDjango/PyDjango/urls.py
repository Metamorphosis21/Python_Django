"""
URL configuration for PyDjango project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin  
# Importing the admin module for admin site functionality
from django.urls import path  
# Importing the path function to define URL patterns
from . import views  
# Importing views from the current application

# Defining the URL patterns for the application
urlpatterns = [
    path('admin/', admin.site.urls),  # URL pattern for the Django admin site

    path('', views.res1, name='main'),  # URL pattern for the main page, routed to the res1 view
    path('second/', views.res2, name='second'),  # URL pattern for the second page, routed to the res2 view
    path('third/', views.res3, name='third'),  # URL pattern for the third page, routed to the res3 view
]