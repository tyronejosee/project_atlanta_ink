"""Models for Artists App."""

from django.conf import settings
from django.db import models
from django.utils.text import slugify

from apps.utils.models import BaseModel
from apps.utils.validators import validate_phone
from .managers import ArtistManager, StyleManager

User = settings.AUTH_USER_MODEL


class Style(BaseModel):
    """Model definition for Style."""

    name = models.CharField(max_length=50)

    objects = StyleManager()

    class Meta:
        ordering = ["pk"]
        verbose_name = "style"
        verbose_name_plural = "styles"

    def __str__(self):
        return str(self.name)


class Artist(BaseModel):
    """Model definition for Artist."""

    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True, blank=True)
    profile = models.ImageField(upload_to="artists/", blank=True)
    description = models.TextField()
    instagram = models.URLField(max_length=100)
    whatsapp = models.CharField(
        max_length=12,
        unique=True,
        validators=[validate_phone],
    )
    styles = models.ManyToManyField(Style)
    is_team = models.BooleanField(default=True)

    objects = ArtistManager()

    class Meta:
        ordering = ["pk"]
        verbose_name = "artist"
        verbose_name_plural = "artists"

    def __str__(self):
        return str(self.name)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
