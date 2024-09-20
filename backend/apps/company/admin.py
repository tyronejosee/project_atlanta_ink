"""Admin for Company App."""

from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from .models import Company, Price, Service, Faq
from .resources import (
    CompanyResource,
    PriceResource,
    ServiceResource,
    FaqResource,
)


@admin.register(Company)
class CompanyAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    """Admin for Company model."""

    list_display = ["name", "updated_at"]
    readonly_fields = ["pk", "created_at", "updated_at"]
    ordering = ["name"]
    resource_class = CompanyResource


@admin.register(Price)
class PriceAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    """Admin for Price model."""

    list_display = ["name", "price_range", "is_available"]
    readonly_fields = ["pk", "created_at", "updated_at"]
    ordering = ["name"]
    resource_class = PriceResource


@admin.register(Service)
class ServiceAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    """Admin for Service model."""

    list_display = ["name", "is_available"]
    readonly_fields = ["pk", "created_at", "updated_at"]
    ordering = ["name"]
    resource_class = ServiceResource


@admin.register(Faq)
class FaqAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    """Admin for Faq model."""

    list_display = ["question", "answer", "is_available"]
    readonly_fields = ["pk", "created_at", "updated_at"]
    resource_class = FaqResource
