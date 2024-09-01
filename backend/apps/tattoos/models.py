"""Models for Tattoos App."""

from django.db import models
from django.utils.text import slugify

from apps.utils.models import BaseModel
from apps.artists.models import Artist

from .managers import TattooManager


class Tattoo(BaseModel):
    """Model definition for Tattoo."""

    name = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50, unique=True, blank=True)
    image = models.ImageField(upload_to="tattoos/")
    artist_id = models.ForeignKey(Artist, on_delete=models.CASCADE)

    objects = TattooManager()

    class Meta:
        ordering = ["pk"]
        verbose_name = "tattoo"
        verbose_name_plural = "tattoos"

    def __str__(self):
        return str(self.name)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
