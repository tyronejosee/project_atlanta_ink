"""Serializers for Operations App."""

from rest_framework import serializers

from apps.artists.models import Style, Artist
from apps.products.models import Brand, Category, Product

# Artists Serializers


class StyleAllSerializer(serializers.ModelSerializer):
    """Serializer for Style model."""

    class Meta:
        model = Style
        fields = [
            "id",
            "name",
            "is_available",
            "created_at",
            "updated_at",
        ]


class ArtistAllSerializer(serializers.ModelSerializer):
    """Serializer for Artist model."""

    image = serializers.SerializerMethodField()
    styles = StyleAllSerializer(many=True, read_only=True)

    class Meta:
        model = Artist
        fields = [
            "id",
            "name",
            "slug",
            "image",
            "description",
            "instagram",
            "whatsapp",
            "styles",
            "is_team",
            "is_available",
            "created_at",
            "updated_at",
        ]

    def get_image(self, obj):
        return obj.image.url if obj.image else None


# Products Serializers


class BrandAllSerializer(serializers.ModelSerializer):
    """Serializer for Brand model."""

    class Meta:
        model = Brand
        fields = [
            "id",
            "name",
            "is_available",
            "created_at",
            "updated_at",
        ]


class CategoryAllSerializer(serializers.ModelSerializer):
    """Serializer for Category model."""

    class Meta:
        model = Category
        fields = [
            "id",
            "name",
            "is_available",
            "created_at",
            "updated_at",
        ]


class ProductAllSerializer(serializers.ModelSerializer):
    """Serializer for Product model."""

    image = serializers.SerializerMethodField()
    brand = serializers.StringRelatedField(source="brand_id")
    category = serializers.StringRelatedField(source="category_id")

    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "slug",
            "sku",
            "description",
            "price",
            "brand",
            "currency",
            "image",
            "category",
            "stock",
            "is_featured",
            "is_available",
            "created_at",
            "updated_at",
        ]

    def get_image(self, obj):
        return obj.image.url if obj.image else None
