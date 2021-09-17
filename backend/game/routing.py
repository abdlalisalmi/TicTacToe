  
from django.urls import path
from .consumers import GamePlay


websocket_urlpatterns = [
    path('ws/game_play/<str:room>', GamePlay.as_asgi()),
]