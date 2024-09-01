"""Serializers for Company App."""

from rest_framework import serializers

from .models import Company


class CompanySerializer(serializers.ModelSerializer):
    """Serializer for Company model."""

    class Meta:
        model = Company
        fields = [
            "name",
            "logo",
            "description",
            "facebook",
            "instagram",
            "tiktok",
            "rights",
            "location",
        ]
        read_only_fields = fields
