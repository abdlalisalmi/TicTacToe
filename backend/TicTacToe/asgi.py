import os
import django
from django.core.asgi import get_asgi_application
django_asgi_app = get_asgi_application()

from channels.http import AsgiHandler
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack

from game import routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'TicTocToe.settings')
django.setup()

application = ProtocolTypeRouter({
  "http": AsgiHandler(),
  ## IMPORTANT::Just HTTP for now. (We can add other protocols later.)
  "websocket": AuthMiddlewareStack(
        URLRouter(
            routing.websocket_urlpatterns
        )
    ),
})