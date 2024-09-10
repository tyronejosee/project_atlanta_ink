"""Choices for Bookings App."""

from django.db import models


class StatusBookingChoices(models.TextChoices):

    PENDING = "pending", "Pending"
    CONFIRMED = "confirmed", "Confirmed"
    COMPLETED = "completed", "Completed"
    CANCELLED = "cancelled", "Cancelled"


class PlacementChoices(models.TextChoices):

    ARM = "arm", "Arm"
    LEG = "leg", "Leg"
    BACK = "back", "Back"
    CHEST = "chest", "Chest"
    ABDOMEN = "abdomen", "Abdomen"
    SIDE = "side", "Side"
    FOOT = "foot", "Foot"
    HAND = "hand", "Hand"
    NECK = "neck", "Neck"
    OTHER = "other", "Other"
