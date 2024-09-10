"""Admin for Bookings App."""

from django.contrib import admin

from .models import Booking


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    """Admin for Booking model."""

    list_per_page = 25
    search_fields = ["first_name", "last_name"]
    list_display = ["first_name", "last_name", "status"]
    list_filter = ["status", "is_first_time", "estimated_budget"]
    list_editable = ["status"]
    readonly_fields = ["pk", "created_at"]
    ordering = ["pk"]
