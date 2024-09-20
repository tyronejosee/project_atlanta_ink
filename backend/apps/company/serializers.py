"""Serializers for Company App."""

from rest_framework import serializers

from apps.utils.mixins import ReadOnlyFieldsMixin
from .models import Company, Price, Service, Faq


class CompanySerializer(ReadOnlyFieldsMixin, serializers.ModelSerializer):
    """Serializer for Company model."""

    class Meta:
        model = Company
        fields = [
            "name",
            "description",
            "instagram",
            "youtube",
            "twitch",
            "tiktok",
            "whatsapp",
            "rights",
            "location",
        ]


class PriceSerializer(ReadOnlyFieldsMixin, serializers.ModelSerializer):
    """Serializer for Price model."""

    class Meta:
        model = Price
        fields = [
            "id",
            "name",
            "description",
            "price_range",
            "is_featured",
        ]


class ServiceSerializer(ReadOnlyFieldsMixin, serializers.ModelSerializer):
    """Serializer for Service model."""

    image = serializers.SerializerMethodField()

    class Meta:
        model = Service
        fields = [
            "id",
            "name",
            "image",
            "description",
        ]

    def get_image(self, obj):
        return obj.image.url


class FaqSerializer(ReadOnlyFieldsMixin, serializers.ModelSerializer):
    """Serializer for Faq model."""

    class Meta:
        model = Faq
        fields = [
            "id",
            "question",
            "answer",
        ]
