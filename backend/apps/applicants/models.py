"""Models for Applications App."""

from django.db import models

from apps.utils.models import BaseModel
from apps.utils.validators import validate_phone
from .managers import ApplicantManager
from .choices import StatusChoices


class Applicant(BaseModel):
    """Model definition for Applicant model."""

    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone = models.CharField(
        max_length=15,
        validators=[validate_phone],
    )
    cv = models.FileField(upload_to="applicants/cv/")
    message = models.TextField(blank=True)
    status = models.CharField(
        max_length=10,
        choices=StatusChoices.choices,
        default=StatusChoices.PENDING,
    )

    objects = ApplicantManager()

    class Meta:
        ordering = ["pk"]
        verbose_name = "applicant"
        verbose_name_plural = "applicants"

    def __str__(self):
        return str(self.name)
