"""Models for Company App."""

from django.db import models
from cloudinary.models import CloudinaryField

from apps.utils.models import BaseModel
from apps.utils.validators import validate_phone
from .managers import CompanyManager, PriceManager, ServiceManager, FaqManager


class Company(BaseModel):
    """Model definition for Company."""

    name = models.CharField(max_length=50, unique=True)
    description = models.TextField()
    instagram = models.URLField(unique=True)
    youtube = models.URLField(blank=True, unique=True)
    twitch = models.URLField(blank=True, unique=True)
    tiktok = models.URLField(blank=True, unique=True)
    whatsapp = models.CharField(
        max_length=15,
        validators=[validate_phone],
        blank=True,
        unique=True,
    )
    rights = models.CharField(max_length=255)
    location = models.CharField(max_length=100, unique=True)

    objects = CompanyManager()

    class Meta:
        ordering = ["pk"]
        verbose_name = "company"
        verbose_name_plural = "company"

    def __str__(self):
        return str(self.name)


class Price(BaseModel):
    """Model definition for Price model."""

    name = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=255, blank=True)
    price_range = models.CharField(
        max_length=25,
        blank=True,
        help_text="Example: $250 - $500",
    )
    is_featured = models.BooleanField(default=False)

    objects = PriceManager()

    class Meta:
        ordering = ["pk"]
        verbose_name = "price"
        verbose_name_plural = "prices"

    def __str__(self):
        return str(self.name)


class Service(BaseModel):
    """Model definition for Service model."""

    name = models.CharField(max_length=25, unique=True)
    image = CloudinaryField(blank=True)
    description = models.TextField()

    objects = ServiceManager()

    class Meta:
        ordering = ["pk"]
        verbose_name = "service"
        verbose_name_plural = "services"

    def __str__(self):
        return str(self.name)


class Faq(BaseModel):
    """Model definition for Faq model."""

    question = models.CharField(max_length=100)
    answer = models.TextField()

    objects = FaqManager()

    class Meta:
        ordering = ["created_at"]
        verbose_name = "faq"
        verbose_name_plural = "faqs"

    def __str__(self):
        return str(self.question)
