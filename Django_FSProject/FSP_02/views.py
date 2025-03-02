from django.shortcuts import render

from .models import MusicRoom

from .serializers import RoomSerializer , CreateRoomSerializer

from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

# API Class	        Supports GET?	 Supports POST?	   Supports PUT/DELETE?
# CreateAPIView	    ❌ No	        ✅ Yes	        ❌ No
# ListAPIView	    ✅ Yes	        ❌ No	        ❌ No
# ListCreateAPIView	✅ Yes	        ✅ Yes	        ❌ No
# ModelViewSet	    ✅ Yes	        ✅ Yes	        ✅ Yes (Full CRUD)

class RoomView(generics.ListCreateAPIView):
    serializer_class = RoomSerializer
    queryset = MusicRoom.objects.all()

# Creating Music room
class CreateRoomView(APIView):
    serializer_class = CreateRoomSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            guest_pause = serializer.data['guest_pause']
            mass_skip = serializer.data['mass_skip']
            member_limit = serializer.data['member_limit']
            host = self.request.session.session_key
            queryset = MusicRoom.objects.filter(room_host=host)

            if queryset.exists():
                room = queryset[0]
                room.guest_pause = guest_pause
                room.mass_skip = mass_skip
                room.member_limit = member_limit
                room.save(update_fields=['guest_pause', 'mass_skip', 'member_limit','created_at'])
                return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED)

            else:
                room = MusicRoom(
                    room_host=host,
                    guest_pause=guest_pause,
                    mass_skip=mass_skip
                )
                room.save()
                return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED)
            
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)