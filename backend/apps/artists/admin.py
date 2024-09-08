"""Admin for Artists App."""

from django.contrib import admin

from .models import Style, Artist


@admin.register(Style)
class StyleAdmin(admin.ModelAdmin):
    """Admin for Style model."""

    list_per_page = 25
    search_fields = ["name"]
    list_display = ["name", "created_at", "is_available"]
    list_editable = ["is_available"]
    readonly_fields = ["pk", "created_at", "updated_at"]
    ordering = ["pk"]


@admin.register(Artist)
class ArtistAdmin(admin.ModelAdmin):
    """Admin for Artist model."""

    list_per_page = 25
    search_fields = ["name"]
    list_display = ["name", "is_team"]
    list_filter = ["is_team"]
    list_editable = ["is_team"]
    readonly_fields = ["pk", "slug", "created_at", "updated_at"]
    ordering = ["pk"]

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(user_id=request.user)

    def has_delete_permission(self, request, obj=None):
        return request.user.is_superuser
