"""Models for Users App."""

import uuid
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

from .managers import UserManager
from .choices import RoleChoices


class User(AbstractBaseUser, PermissionsMixin):
    """Model definition for User."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(max_length=100, unique=True, db_index=True)
    username = models.CharField(max_length=100, unique=True)
    role = models.CharField(
        max_length=20,
        choices=RoleChoices.choices,
        default=RoleChoices.ARTIST,
    )
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    class Meta:
        ordering = ["pk"]
        verbose_name = "user"
        verbose_name_plural = "users"

    def __str__(self):
        return str(self.username)
