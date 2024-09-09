"""Serializers for Applicants App."""

from rest_framework import serializers

from .models import Applicant


class ApplicantSerializer(serializers.ModelSerializer):
    """Serializer for Applicant model."""

    class Meta:
        model = Applicant
        fields = [
            "name",
            "email",
            "phone",
            "cv",
            "message",
        ]
