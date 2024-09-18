"""Serializers for Products App."""

from rest_framework import serializers

from apps.utils.mixins import ReadOnlyFieldsMixin
from .models import Brand, Category, Product


class BrandSerializer(ReadOnlyFieldsMixin, serializers.ModelSerializer):
    """Serializer for Brand model."""

    class Meta:
        model = Brand
        fields = [
            "id",
            "name",
        ]


class CategorySerializer(ReadOnlyFieldsMixin, serializers.ModelSerializer):
    """Serializer for Category model."""

    class Meta:
        model = Category
        fields = [
            "id",
            "name",
        ]


class ProductSerializer(ReadOnlyFieldsMixin, serializers.ModelSerializer):
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
            "created_at",
            "updated_at",
        ]

    def get_image(self, obj):
        return obj.image.url


class ProductMinimalSerializer(
    ReadOnlyFieldsMixin,
    serializers.ModelSerializer,
):
    """Serializer for Product model (Minimal)."""

    image = serializers.SerializerMethodField()
    brand = serializers.StringRelatedField(source="brand_id")
    category = serializers.StringRelatedField(source="category_id")

    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "slug",
            "price",
            "brand",
            "image",
            "category",
        ]

    def get_image(self, obj):
        return obj.image.url
