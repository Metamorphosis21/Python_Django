from django.shortcuts import render
from rest_framework import generics
from .models import MusicRoom
from .serializers import RoomSerializer

# Create your views here.

# API Class	        Supports GET?	 Supports POST?	   Supports PUT/DELETE?
# CreateAPIView	    ❌ No	        ✅ Yes	        ❌ No
# ListAPIView	    ✅ Yes	        ❌ No	        ❌ No
# ListCreateAPIView	✅ Yes	        ✅ Yes	        ❌ No
# ModelViewSet	    ✅ Yes	        ✅ Yes	        ✅ Yes (Full CRUD)

class RoomView(generics.CreateAPIView):
    queryset = MusicRoom.objects.all()
    serializer_class = RoomSerializer
