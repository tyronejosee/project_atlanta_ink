"""Admin for Users App."""

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group, Permission

from apps.artists.models import Artist
from .models import User
from .forms import CustomUserCreationForm, CustomUserChangeForm
from .choices import RoleChoices


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    """Admin for User model."""

    model = User
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    list_per_page = 25
    list_display = ["name", "username", "role", "is_staff", "is_superuser"]
    list_display_links = ["username"]
    search_fields = ["name", "username", "email"]
    list_filter = ["is_staff", "is_superuser"]
    readonly_fields = ["pk", "created_at", "updated_at"]
    ordering = ["email"]
    actions = ["assign_artist", "assign_administrator"]
    fieldsets = (
        (None, {"fields": ("name", "email", "username", "password")}),
        (
            "Permissions",
            {
                "fields": (
                    "role",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                ),
            },
        ),
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "name",
                    "email",
                    "username",
                    "role",
                    "password1",
                    "password2",
                    "is_staff",
                    "is_superuser",
                ),
            },
        ),
    )

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(pk=request.user.pk)

    def save_model(self, request, obj, form, change):
        super().save_model(request, obj, form, change)
        if not change:
            # Get or create the "Artists" group
            group, created = Group.objects.get_or_create(name="Artists")

            if created:
                # Codename fields of the Permission model
                codenames = [
                    "view_user",
                    "add_tattoo",
                    "view_tattoo",
                    "change_tattoo",
                    "view_artist",
                    "change_artist",
                    "add_style",
                    "view_style",
                    "change_style",
                ]
                permissions = Permission.objects.filter(codename__in=codenames)
                group.permissions.set(permissions)

            # Create an Artist object if the role is ARTIST
            if obj.role == RoleChoices.ARTIST:
                obj.groups.add(group)
                Artist.objects.get_or_create(user_id=obj, name=obj.name)

    @admin.action(description="Assign selected users as Artist")
    def assign_artist(modeladmin, request, queryset):
        queryset.update(role=RoleChoices.ARTIST, is_staff=False)

    @admin.action(description="Assign selected users as Administrator")
    def assign_administrator(modeladmin, request, queryset):
        queryset.update(role=RoleChoices.ADMINISTRATOR, is_staff=True)


admin.site.register(Permission)
