"""Models for Tattoos App."""

from django.db import models
from django.utils.text import slugify
from cloudinary.models import CloudinaryField

from apps.utils.models import BaseModel
from apps.artists.models import Artist
from .managers import TattooManager


class Tattoo(BaseModel):
    """Model definition for Tattoo."""

    name = models.CharField(
        max_length=50,
        unique=True,
        help_text="Use a descriptive and precise name, avoid generic names.",
    )
    slug = models.SlugField(max_length=50, unique=True, blank=True)
    image = CloudinaryField()
    artist_id = models.ForeignKey(
        Artist,
        related_name="tattoos",
        on_delete=models.CASCADE,
    )

    objects = TattooManager()

    class Meta:
        ordering = ["pk"]
        verbose_name = "tattoo"
        verbose_name_plural = "tattoos"
        indexes = [
            models.Index(fields=["slug"]),
            models.Index(fields=["artist_id"]),
        ]

    def __str__(self):
        return str(self.name)

    def save(self, *args, **kwargs):
        if not self.slug or self.slug != slugify(self.name):
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
