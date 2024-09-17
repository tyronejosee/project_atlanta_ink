"""Settings for config project (Base)."""

import os
from pathlib import Path
import sys

import environ
import cloudinary
import cloudinary.uploader
import cloudinary.api


BASE_DIR = Path(__file__).resolve().parent.parent.parent

env = environ.Env()
environ.Env.read_env("backend/.env")

SECRET_KEY = env("SECRET_KEY")

DEBUG = env.bool("DEBUG", default=False)

BASE_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
]

PROJECT_APPS = [
    "apps.applicants",
    "apps.artists",
    "apps.bookings",
    "apps.company",
    "apps.products",
    "apps.tattoos",
    "apps.users",
    "apps.utils",
]

THIRD_APPS = [
    "rest_framework",
    "cloudinary",
    "corsheaders",
    "drf_spectacular",
    "drf_spectacular_sidecar",
]

INSTALLED_APPS = BASE_APPS + PROJECT_APPS + THIRD_APPS

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "config.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [os.path.join(BASE_DIR, "templates")],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "config.wsgi.application"


AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


PASSWORD_HASHERS = [
    "django.contrib.auth.hashers.Argon2PasswordHasher",
    "django.contrib.auth.hashers.PBKDF2PasswordHasher",
    "django.contrib.auth.hashers.PBKDF2SHA1PasswordHasher",
    "django.contrib.auth.hashers.BCryptSHA256PasswordHasher",
]


LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True


DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

ALLOWED_HOSTS = env.list("ALLOWED_HOSTS", default=["localhost", "127.0.0.1"])

INTERNAL_IPS = env.list("INTERNAL_IPS")

CORS_ALLOWED_ORIGINS = env.list("CORS_ALLOWED_ORIGINS")

if "test" in sys.argv:
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.sqlite3",
            "NAME": BASE_DIR / "db.sqlite3",
        }
    }
else:
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.postgresql",
            "NAME": env("POSTGRES_DB"),
            "USER": env("POSTGRES_USER"),
            "PASSWORD": env("POSTGRES_PASSWORD"),
            "HOST": "db",
            "PORT": "5432",
        }
    }

REST_FRAMEWORK = {
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.AllowAny",
    ],
    # "DEFAULT_THROTTLE_CLASSES": [
    #     "rest_framework.throttling.AnonRateThrottle",
    #     "rest_framework.throttling.UserRateThrottle",
    # ],
    "DEFAULT_SCHEMA_CLASS": "drf_spectacular.openapi.AutoSchema",
    "DEFAULT_CONTENT_LANGUAGE": "en",
    "DEFAULT_FILTER_BACKENDS": [
        "rest_framework.filters.SearchFilter",
        "django_filters.rest_framework.DjangoFilterBackend",
    ],
    # "DEFAULT_THROTTLE_RATES": {
    #     "anon": "3/second",
    #     "user": "60/minute",
    #     "daily": "1000/day",
    # },
    "NUM_PROXIES": None,
    "SEARCH_PARAM": "search",
}

AUTH_USER_MODEL = "users.User"

# CORS_ALLOW_HEADERS = [
#     "Authorization",
#     "Content-Type",
#     "accept",
#     "accept-encoding",
#     "content-disposition",
#     "origin",
#     "user-agent",
#     "x-csrftoken",
#     "x-requested-with",
# ]

CORS_ALLOW_HEADERS = ["*"]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://0.0.0.0:3000",
]

CORS_ALLOW_METHODS = [
    "GET",
    "POST",
]

CORS_ALLOW_ALL_ORIGINS = True

cloudinary.config(
    cloud_name=env("CLOUDINARY_CLOUD_NAME"),
    api_key=env("CLOUDINARY_API_KEY"),
    api_secret=env("CLOUDINARY_API_SECRET"),
    secure=True,
)

APPEND_SLASH = False

VALID_IMAGE_EXTENSIONS = [".webp", ".jpg", ".jpeg", ".png"]

SPECTACULAR_SETTINGS = {
    "TITLE": "Example API",
    "DESCRIPTION": "Example decription.",
    "VERSION": "v1",
    "LICENSE": {
        "name": env("LICENCE_NAME"),
        "url": env("LICENCE_URL"),
    },
    "CONTACT": {
        "name": env("CONTACT_NAME"),
        "url": env("CONTACT_URL"),
    },
    "SERVE_INCLUDE_SCHEMA": False,
    "SWAGGER_UI_DIST": "SIDECAR",
    "SWAGGER_UI_FAVICON_HREF": "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1724775927/Drop%20Dash%20API/fb9ai97yagzqsimsdg4q.png",
    "REDOC_DIST": "SIDECAR",
    "REDOC_UI_SETTINGS": {
        "hideHostname": True,
        "theme": {
            "colors": {"primary": {"main": "#16FF00"}},
        },
    },
    "EXTENSIONS_INFO": {
        "x-logo": {
            "url": "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1724788246/Drop%20Dash%20API/pyqqdznrcqofiuxd4l4e.png",
            "altText": "API Logo",
        },
    },
    "TAGS": [
        {
            "name": "artists",
            "description": "Operations related to artists",
        },
    ],
}
