"""Views for Artists App."""

from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Artist
from .serializers import ArtistSerializer


class ArtistListView(ListAPIView):
    """View to list all available artists."""

    serializer_class = ArtistSerializer

    def get_queryset(self):
        return (
            Artist.objects.filter(is_available=True)
            .select_related("user_id")
            .prefetch_related("styles")
        )


class ArtistDetailView(RetrieveAPIView):
    """View to retrieve a specific artist by ID."""

    serializer_class = ArtistSerializer

    def get_queryset(self):
        return (
            Artist.objects.filter(is_available=True)
            .select_related("user_id")
            .prefetch_related("styles")
        )