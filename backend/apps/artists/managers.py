"""Managers for Artists App."""

from apps.utils.managers import BaseManager


class StyleManager(BaseManager):
    """Manager for Style model."""


class ArtistManager(BaseManager):
    """Manager for Artist model."""

    def get_list(self):
        return (
            self.get_available()
            .select_related(
                "user_id",
            )
            .prefetch_related(
                "styles",
            )
        )

    def get_detail(self):
        return (
            self.get_available()
            .select_related(
                "user_id",
            )
            .prefetch_related(
                "styles",
            )
        )
