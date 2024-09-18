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


class ReadOnlyFieldsMixin:
    """Mixin to make all serializer fields read-only."""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field in self.fields:
            self.fields[field].read_only = True
