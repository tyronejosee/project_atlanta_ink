# flake8: noqa: F403, F405

"""Settings for config project (Production)."""

import os
import environ

from .base import *


env = environ.Env()
environ.Env.read_env("backend/.env")

STATIC_URL = "static/"
STATIC_ROOT = os.path.join(BASE_DIR, "static")

MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": env("POSTGRES_DB"),
        "USER": env("POSTGRES_USER"),
        "PASSWORD": env("POSTGRES_PASSWORD"),
        "HOST": env("POSTGRES_HOST"),
        "PORT": env("POSTGRES_PORT"),
    }
}

# SECURE_SSL_REDIRECT = True

# SECURE_HSTS_SECONDS = 31536000  # 1 year

# SECURE_HSTS_INCLUDE_SUBDOMAINS = True

# SECURE_BROWSER_XSS_FILTER = True

# CORS_ALLOW_CREDENTIALS = True
