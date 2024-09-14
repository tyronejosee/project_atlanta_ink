"""Models for Company App."""

from django.db import models
from cloudinary.models import CloudinaryField

from apps.utils.models import BaseModel
from apps.products.choices import CurrencyTypeChoices
from .managers import CompanyManager, ServiceManager


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


class Price(BaseModel):
    """Model definition for Price model."""

    name = models.CharField(max_length=25, unique=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    currency = models.CharField(
        max_length=3,
        choices=CurrencyTypeChoices.choices,
        default=CurrencyTypeChoices.USD,
        help_text="Select the currency in which service price is displayed.",
    )
    is_featured = models.BooleanField(default=False)

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

    class Meta:
        ordering = ["created_at"]
        verbose_name = "faq"
        verbose_name_plural = "faqs"

    def __str__(self):
        return str(self.question)
