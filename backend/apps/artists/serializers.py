"""Serializers for Artists App."""

from rest_framework import serializers

from .models import Style, Artist


class StyleSerializer(serializers.ModelSerializer):
    """Serializer for Style model."""

    class Meta:
        model = Style
        fields = [
            "id",
            "name",
            "updated_at",
            "created_at",
        ]
        read_only_fields = fields


class ArtistSerializer(serializers.ModelSerializer):
    """Serializer for Artist model."""

    styles = StyleSerializer(many=True, read_only=True)

    class Meta:
        model = Artist
        fields = [
            "id",
            "name",
            "profile",
            "instagram",
            "whatsapp",
            "description",
            "slug",
            "styles",
            "is_team",
            "updated_at",
            "created_at",
        ]
        read_only_fields = fields
