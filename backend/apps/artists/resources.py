"""Resources for Artists App."""

from import_export.resources import ModelResource

from .models import Style, Artist


class StyleResource(ModelResource):
    """Resource definition for Style model"""

    class Meta:
        model = Style


class ArtistResource(ModelResource):
    """Resource definition for Artist model"""

    class Meta:
        model = Artist
