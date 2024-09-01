"""Admin for Company App."""

from django.contrib import admin

from .models import Company


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    """Admin for Company model."""

    list_display = ["name", "updated_at"]
    readonly_fields = ["pk", "created_at", "updated_at"]
    ordering = ["name"]
