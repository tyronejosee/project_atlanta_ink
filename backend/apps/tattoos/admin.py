"""Admin for Tattoos App."""

from django.contrib import admin

from .models import Tattoo


@admin.register(Tattoo)
class TattooAdmin(admin.ModelAdmin):
    """Admin for Tattoo model."""

    list_per_page = 25
    search_fields = ["name", "artist_id"]
    list_display = ["name", "is_available"]
    list_filter = ["artist_id"]
    list_editable = ["is_available"]
    readonly_fields = ["pk", "created_at", "updated_at"]
