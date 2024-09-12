"""Mixins for Utils App."""

from django.db import models
from django.utils.text import slugify


class SlugMixin(models.Model):
    """Mixin providing slug functionality for models."""

    slug = models.SlugField(max_length=100, unique=True, blank=True)

    def set_slug(self):
        if not self.slug or self.slug != slugify(self.name):
            self.slug = slugify(self.name)

    class Meta:
        abstract = True
