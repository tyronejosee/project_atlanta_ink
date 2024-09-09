"""Choices for Jobs App."""

from django.db import models


class StatusChoices(models.TextChoices):

    PENDING = "pending", "Pending"
    REVIEWED = "reviewed", "Reviewed"
    ACCEPTED = "accepted", "Accepted"
    REJECTED = "rejected", "Rejected"
