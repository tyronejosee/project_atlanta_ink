"""Serializers for Tattoos App."""

from rest_framework import serializers

from apps.utils.mixins import ReadOnlyFieldsMixin
from .models import Tattoo


class TattooSerializer(ReadOnlyFieldsMixin, serializers.ModelSerializer):
    """Serializer for Tattoo model."""

    artist = serializers.CharField(source="artist_id.name", read_only=True)

    class Meta:
        model = Tattoo
        fields = [
            "id",
            "name",
            "slug",
            "image",
            "artist",
        ]


class TattooImageSerializer(ReadOnlyFieldsMixin, serializers.ModelSerializer):
    """Serializer for Tattoo model (only image field)."""

    image = serializers.SerializerMethodField()

    class Meta:
        model = Tattoo
        fields = ["image"]

    def get_image(self, obj):
        return obj.image.url
