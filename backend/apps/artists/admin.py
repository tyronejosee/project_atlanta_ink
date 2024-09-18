"""Admin for Artists App."""

from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from .models import Style, Artist
from .resources import StyleResource, ArtistResource


@admin.register(Style)
class StyleAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    """Admin for Style model."""

    list_per_page = 25
    search_fields = ["name"]
    list_display = ["name", "created_at", "is_available"]
    list_editable = ["is_available"]
    readonly_fields = ["pk", "created_at", "updated_at"]
    resource_class = StyleResource


@admin.register(Artist)
class ArtistAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    """Admin for Artist model."""

    list_per_page = 25
    search_fields = ["name"]
    list_display = ["name", "is_team"]
    list_filter = ["is_team"]
    list_editable = ["is_team"]
    readonly_fields = ["pk", "slug", "created_at", "updated_at"]
    resource_class = ArtistResource

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(user_id=request.user)

    def has_delete_permission(self, request, obj=None):
        return request.user.is_superuser
