"""Serializers for Bookings App."""

from django.conf import settings
from django.core.files.uploadedfile import UploadedFile
from rest_framework import serializers

from .models import Booking


class BookingSerializer(serializers.ModelSerializer):
    """Serializer for Booking model."""

    class Meta:
        model = Booking
        fields = [
            "first_name",
            "last_name",
            "phone",
            "notes",
            "references",
            "artist_id",
            "estimated_budget",
            "tattoo_placement",
            "is_first_time",
            "is_work_in_progress",
        ]

    def validate_references(self, value):
        """Custom validation for references field."""
        if isinstance(value, UploadedFile):
            # Validate file size (should not exceed 1 MB)
            if value.size > 1 * 1024 * 1024:  # 1 MB
                raise serializers.ValidationError(
                    "The file size must not exceed 1 MB.",
                )
            # Validate file extension
            extension = value.name.split(".")[-1].lower()
            if f".{extension}" not in settings.VALID_IMAGE_EXTENSIONS:
                raise serializers.ValidationError(
                    "The file must be in .webp, .jpg, or .png format."
                )
        return value
