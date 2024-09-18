"""Serializers for Artists App."""

from rest_framework import serializers

from apps.utils.mixins import ReadOnlyFieldsMixin
from .models import Style, Artist


class StyleSerializer(ReadOnlyFieldsMixin, serializers.ModelSerializer):
    """Serializer for Style model."""

    class Meta:
        model = Style
        fields = [
            "id",
            "name",
            "updated_at",
            "created_at",
        ]


class ArtistSerializer(ReadOnlyFieldsMixin, serializers.ModelSerializer):
    """Serializer for Artist model."""

    image = serializers.SerializerMethodField()
    styles = StyleSerializer(many=True, read_only=True)

    class Meta:
        model = Artist
        fields = [
            "id",
            "name",
            "image",
            "instagram",
            "whatsapp",
            "description",
            "slug",
            "styles",
            "is_team",
            "updated_at",
            "created_at",
        ]

    def get_image(self, obj):
        return obj.image.url
