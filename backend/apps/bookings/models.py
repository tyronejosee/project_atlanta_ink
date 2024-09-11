"""Models for Bookings App."""

from django.db import models
from cloudinary.models import CloudinaryField

from apps.utils.models import BaseModel
from apps.artists.models import Artist
from apps.utils.validators import validate_phone
from .managers import BookingManager
from .choices import StatusBookingChoices, PlacementChoices


class Booking(BaseModel):
    """Model definition for Booking model."""

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone = models.CharField(
        max_length=15,
        validators=[validate_phone],
    )
    notes = models.TextField()
    references = CloudinaryField(
        blank=True,
        help_text="Upload images or references.",
    )
    artist_id = models.ForeignKey(
        Artist,
        related_name="bookings",
        blank=True,
        null=True,
        on_delete=models.PROTECT,
    )
    estimated_budget = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        blank=True,
        null=True,
        help_text="Enter the estimated budget for the tattoo",
    )
    tattoo_placement = models.CharField(
        max_length=20,
        choices=PlacementChoices.choices,
        help_text="Specify the placement of the tattoo on your body",
    )
    status = models.CharField(
        max_length=10,
        choices=StatusBookingChoices,
        default=StatusBookingChoices.PENDING,
    )
    is_first_time = models.BooleanField(
        default=False, help_text="Is this your first tattoo?"
    )
    is_work_in_progress = models.BooleanField(
        default=False,
        help_text="Indicate whether you have a work in progress tattoo",
    )

    objects = BookingManager()

    class Meta:
        ordering = ["pk"]
        verbose_name = "booking"
        verbose_name_plural = "bookings"

    def __str__(self):
        return str(f"{self.first_name} {self.last_name}")
