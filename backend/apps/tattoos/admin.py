"""Admin for Tattoos App."""

from django.contrib import admin

from apps.artists.models import Artist
from .models import Tattoo


@admin.register(Tattoo)
class TattooAdmin(admin.ModelAdmin):
    """Admin for Tattoo model."""

    list_per_page = 25
    search_fields = ["name", "artist_id"]
    list_display = ["name", "is_available"]
    list_filter = ["artist_id"]
    list_editable = ["is_available"]
    readonly_fields = ["pk", "slug", "created_at", "updated_at"]

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user.is_superuser:
            return qs
        artist = Artist.objects.get(user_id=request.user)
        return qs.filter(artist_id=artist)

    def has_delete_permission(self, request, obj=None):
        return request.user.is_superuser
