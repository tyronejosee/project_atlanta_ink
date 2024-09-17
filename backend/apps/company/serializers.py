"""Serializers for Company App."""

from rest_framework import serializers

from .models import Company, Price, Service, Faq


class CompanySerializer(serializers.ModelSerializer):
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
        extra_kwargs = {
            field.name: {"read_only": True} for field in Company._meta.fields
        }


class PriceSerializer(serializers.ModelSerializer):
    """Serializer for Price model."""

    class Meta:
        model = Price
        fields = [
            "id",
            "name",
            "price",
            "currency",
            "is_featured",
        ]
        extra_kwargs = {field.name: {"read_only": True} for field in Price._meta.fields}


class ServiceSerializer(serializers.ModelSerializer):
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
        extra_kwargs = {
            field.name: {"read_only": True} for field in Service._meta.fields
        }

    def get_image(self, obj):
        return obj.image.url


class FaqSerializer(serializers.ModelSerializer):
    """Serializer for Faq model."""

    class Meta:
        model = Faq
        fields = [
            "id",
            "question",
            "answer",
        ]
        extra_kwargs = {field.name: {"read_only": True} for field in Faq._meta.fields}
