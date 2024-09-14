"""Admin for Company App."""

from django.contrib import admin

from .models import Company, Price, Service, Faq


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    """Admin for Company model."""

    list_display = ["name", "updated_at"]
    readonly_fields = ["pk", "created_at", "updated_at"]
    ordering = ["name"]


@admin.register(Price)
class PriceAdmin(admin.ModelAdmin):
    """Admin for Price model."""

    list_display = ["name", "price", "is_available"]
    readonly_fields = ["pk", "created_at", "updated_at"]
    ordering = ["name"]


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    """Admin for Service model."""

    list_display = ["name", "is_available"]
    readonly_fields = ["pk", "created_at", "updated_at"]
    ordering = ["name"]


@admin.register(Faq)
class FaqAdmin(admin.ModelAdmin):
    """Admin for Faq model."""

    list_display = ["question", "answer", "is_available"]
    readonly_fields = ["pk", "created_at", "updated_at"]
