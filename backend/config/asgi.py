"""ASGI config for config project."""

import os
from django.core.asgi import get_asgi_application

from .environment import SETTINGS_MODULE

os.environ.setdefault("DJANGO_SETTINGS_MODULE", SETTINGS_MODULE)

application = get_asgi_application()
