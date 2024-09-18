"""Resources for Tattoos App."""

from import_export.resources import ModelResource

from .models import Tattoo


class TattooResource(ModelResource):
    """Resource definition for Tattoo model"""

    class Meta:
        model = Tattoo
