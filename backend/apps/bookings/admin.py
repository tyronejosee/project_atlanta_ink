"""Admin for Bookings App."""

from django.contrib import admin

from .models import Booking, Schedule


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    """Admin for Booking model."""

    list_per_page = 25
    search_fields = ["first_name", "last_name"]
    list_display = ["first_name", "last_name", "status"]
    list_filter = ["status", "is_first_time", "estimated_budget"]
    list_editable = ["status"]
    readonly_fields = ["pk", "created_at", "updated_at"]


@admin.register(Schedule)
class ScheduleAdmin(admin.ModelAdmin):
    """Admin for Schedule model."""

    list_per_page = 25
    search_fields = ["booking_id"]
    list_display = ["booking_id", "start_time", "end_time", "is_confirmed"]
    list_filter = ["is_confirmed"]
    readonly_fields = ["pk", "created_at", "updated_at"]
