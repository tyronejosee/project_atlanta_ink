"""Serializers for Products App."""

from rest_framework import serializers

from .models import Category, Product


class CategorySerializer(serializers.ModelSerializer):
    """Serializer for Category model."""

    class Meta:
        model = Category
        fields = [
            "id",
            "name",
        ]


class ProductSerializer(serializers.ModelSerializer):
    """Serializer for Product model."""

    category = serializers.PrimaryKeyRelatedField(
        source="category_id",
        read_only=True,
    )

    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "sku",
            "description",
            "price",
            "currency",
            "image",
            "category",
            "stock",
            "is_featured",
            "created_at",
            "updated_at",
        ]


class ProductMinimalSerializer(serializers.ModelSerializer):
    """Serializer for Product model (Minimal)."""

    category = serializers.PrimaryKeyRelatedField(
        source="category_id",
        read_only=True,
    )

    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "price",
            "image",
            "category",
        ]
