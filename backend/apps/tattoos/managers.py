"""Managers for Tattoos App."""

from apps.utils.managers import BaseManager


class TattooManager(BaseManager):
    """Manager for Tattoo model."""

    def get_list(self):
        return self.get_available().select_related("artist_id")

    def get_by_artist(self, artist):
        return (
            self.get_available()
            .select_related("artist_id")
            .filter(
                artist_id=artist,
            )
        )
