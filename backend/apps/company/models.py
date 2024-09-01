"""Models for Company App."""

from django.db import models


from apps.utils.models import BaseModel
from .managers import CompanyManager


class Company(BaseModel):
    """Model definition for Company."""

    name = models.CharField(max_length=50, unique=True)
    logo = models.FileField(upload_to="company/", blank=True)
    description = models.TextField()
    facebook = models.URLField()
    instagram = models.URLField()
    tiktok = models.URLField()
    rights = models.TextField()
    location = models.CharField(max_length=100, unique=True)

    objects = CompanyManager()

    class Meta:
        ordering = ["pk"]
        verbose_name = "company"
        verbose_name_plural = "company"

    def __str__(self):
        return str(self.name)
