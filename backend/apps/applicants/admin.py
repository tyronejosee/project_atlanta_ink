"""Admin for Applicants App."""

from django.contrib import admin

from .models import Applicant


@admin.register(Applicant)
class ApplicantAdmin(admin.ModelAdmin):
    """Admin for Applicant model."""

    list_per_page = 25
    search_fields = ["name", "email"]
    list_display = ["name", "status"]
    list_filter = ["status"]
    list_editable = ["status"]
    readonly_fields = ["pk", "created_at", "updated_at"]
