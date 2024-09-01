"""Serializers for Tattoos App."""

from rest_framework import serializers

from .models import Tattoo


class TattooSerializer(serializers.ModelSerializer):
    """Serializer for Tattoo model."""

    artist = serializers.CharField(source="artist_id.name", read_only=True)

    class Meta:
        model = Tattoo
        fields = [
            "name",
            "slug",
            "image",
            "artist",
        ]
        read_only_fields = fields
