"""Admin for Products App."""

from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from .models import Brand, Category, Product
from .resources import BrandResource, CategoryResource, ProductResource


@admin.register(Brand)
class BrandAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    """Admin for Brand model."""

    list_per_page = 25
    search_fields = ["name"]
    list_display = ["name", "is_available"]
    list_editable = ["is_available"]
    readonly_fields = ["pk", "created_at", "updated_at"]
    resource_class = BrandResource


@admin.register(Category)
class CategoryAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    """Admin for Category model."""

    list_per_page = 25
    search_fields = ["name"]
    list_display = ["name", "is_available"]
    list_editable = ["is_available"]
    readonly_fields = ["pk", "created_at", "updated_at"]
    resource_class = CategoryResource


@admin.register(Product)
class ProductAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    """Admin for Product model."""

    list_per_page = 25
    search_fields = ["name", "sku"]
    list_display = ["name", "is_featured", "is_available"]
    list_filter = ["is_featured", "category_id"]
    list_editable = ["is_featured", "is_available"]
    readonly_fields = ["pk", "slug", "created_at", "updated_at"]
    ordering = ["updated_at"]
    resource_class = ProductResource
