"""Choices for Users App."""

from django.db.models import TextChoices


class RoleChoices(TextChoices):

    ARTIST = "artist", "Artist"
    ADMINISTRATOR = "administrator", "Administrator"
