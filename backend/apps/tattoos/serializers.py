"""Serializers for Tattoos App."""

from rest_framework import serializers

from apps.utils.mixins import ReadOnlyFieldsMixin
from .models import Tattoo


class TattooSerializer(ReadOnlyFieldsMixin, serializers.ModelSerializer):
    """Serializer for Tattoo model."""

    image = serializers.SerializerMethodField()
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

    def get_image(self, obj):
        return obj.image.url
