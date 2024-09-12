"""Admin for Products App."""

from django.contrib import admin

from .models import Category, Product


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    """Admin for Category model."""

    list_per_page = 25
    search_fields = ["name"]
    list_display = ["name", "is_available"]
    list_editable = ["is_available"]
    readonly_fields = ["pk", "created_at", "updated_at"]


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    """Admin for Product model."""

    list_per_page = 25
    search_fields = ["name", "sku"]
    list_display = ["name", "is_featured", "is_available"]
    list_filter = ["is_featured", "category_id"]
    list_editable = ["is_featured", "is_available"]
    readonly_fields = ["pk", "slug", "created_at", "updated_at"]
