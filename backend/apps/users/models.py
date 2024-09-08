"""Models for Users App."""

import uuid
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

from .managers import UserManager
from .choices import RoleChoices


class User(AbstractBaseUser, PermissionsMixin):
    """Model definition for User."""

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
    )
    name = models.CharField(
        max_length=100,
        unique=True,
        help_text="Use a simple name, for example: `FirstName LastName`.",
    )
    email = models.EmailField(max_length=100, unique=True, db_index=True)
    username = models.CharField(max_length=100, unique=True)
    role = models.CharField(
        max_length=20,
        choices=RoleChoices.choices,
        default=RoleChoices.ARTIST,
        help_text=(
            "By default, the role is ARTIST,"
            "change it only if you want to escalate permissions."
        ),
    )
    is_staff = models.BooleanField(
        default=True,
        help_text=(
            "This field allows access to the admin panel,"
            "by default it `is_active` for artists."
        ),
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name", "username"]

    class Meta:
        ordering = ["pk"]
        verbose_name = "user"
        verbose_name_plural = "users"

    def __str__(self):
        return str(self.username)
