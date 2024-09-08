"""Forms for Users App."""

from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import User


class CustomUserCreationForm(UserCreationForm):
    """
    Form extends the built-in UserCreationForm to include additional fields
    required by the custom User model.
    """

    class Meta:
        model = User
        fields = [
            "name",
            "email",
            "username",
            "role",
            "is_staff",
        ]


class CustomUserChangeForm(UserChangeForm):
    """
    Form extends the built-in UserChangeForm to include additional fields
    required by the custom User model.
    """

    class Meta:
        model = User
        fields = [
            "name",
            "email",
            "username",
            "role",
            "is_staff",
        ]
