"""Resources for Users App."""

from import_export.resources import ModelResource

from .models import User


class UserResource(ModelResource):
    """Resource definition for User model"""

    class Meta:
        model = User
