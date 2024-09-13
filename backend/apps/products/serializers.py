"""Serializers for Products App."""

from rest_framework import serializers

from .models import Brand, Category, Product


class BrandReadSerializer(serializers.ModelSerializer):
    """Serializer for Brand model (List/retrieve)."""

    class Meta:
        model = Brand
        fields = [
            "id",
            "name",
        ]
        extra_kwargs = {
            field.name: {"read_only": True} for field in Brand._meta.fields
        }


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
        extra_kwargs = {
            field.name: {"read_only": True} for field in Product._meta.fields
        }

    def get_image(self, obj):
        return obj.image.url


class ProductMinimalSerializer(serializers.ModelSerializer):
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
        extra_kwargs = {
            field.name: {"read_only": True} for field in Product._meta.fields
        }

    def get_image(self, obj):
        return obj.image.url
