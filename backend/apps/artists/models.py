"""Models for Artists App."""

from django.conf import settings
from django.db import models
from django.utils.text import slugify
from cloudinary.models import CloudinaryField

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
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True, blank=True)
    image = CloudinaryField()
    description = models.TextField(blank=True)
    instagram = models.URLField(max_length=100, unique=True, blank=True)
    whatsapp = models.CharField(
        max_length=12,
        unique=True,
        blank=True,
        validators=[validate_phone],
    )
    styles = models.ManyToManyField(Style)
    is_team = models.BooleanField(default=True)

    objects = ArtistManager()

    class Meta:
        ordering = ["pk"]
        verbose_name = "artist"
        verbose_name_plural = "artists"
        indexes = [
            models.Index(fields=["slug"]),
            models.Index(fields=["is_team"]),
        ]

    def __str__(self):
        return str(self.name)

    def save(self, *args, **kwargs):
        if not self.slug or self.slug != slugify(self.name):
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
