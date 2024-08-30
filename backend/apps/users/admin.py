"""Admin for Users App."""

from django.contrib import admin

from .models import User
from .choices import RoleChoices


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    """Admin for User model."""

    list_per_page = 25
    list_display = ["username", "email", "role", "is_staff"]
    list_display_links = ["username"]
    search_fields = ["username", "email"]
    list_filter = ["is_staff", "is_superuser"]
    readonly_fields = ["pk"]
    ordering = ["username"]

    actions = ["assign_artist", "assign_administrator"]

    @admin.action(description="Assign selected users as Artist")
    def assign_artist(modeladmin, request, queryset):
        queryset.update(role=RoleChoices.ARTIST, is_staff=False)

    @admin.action(description="Assign selected users as Administrator")
    def assign_administrator(modeladmin, request, queryset):
        queryset.update(role=RoleChoices.ADMINISTRATOR, is_staff=True)
