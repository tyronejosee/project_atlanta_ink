"""Settings for config project (Production)."""

import os

from .base import *

STATIC_URL = "static/"
STATIC_ROOT = os.path.join(BASE_DIR, "static")

MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")

# SECURE_SSL_REDIRECT = True

# SECURE_HSTS_SECONDS = 31536000  # 1 year

# SECURE_HSTS_INCLUDE_SUBDOMAINS = True

# SECURE_BROWSER_XSS_FILTER = True

# CORS_ALLOW_CREDENTIALS = True
