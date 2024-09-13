"""Serializers for Products App."""

from rest_framework import serializers

from .models import Category, Product


class CategoryReadSerializer(serializers.ModelSerializer):
    """Serializer for Category model (List/retrieve)."""

    class Meta:
        model = Category
        fields = [
            "id",
            "name",
        ]
        extra_kwargs = {
            field.name: {"read_only": True} for field in Category._meta.fields
        }


class ProductReadSerializer(serializers.ModelSerializer):
    """Serializer for Product model (List/retrieve)."""

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
        extra_kwargs = {
            field.name: {"read_only": True} for field in Product._meta.fields
        }


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
        extra_kwargs = {
            field.name: {"read_only": True} for field in Product._meta.fields
        }
