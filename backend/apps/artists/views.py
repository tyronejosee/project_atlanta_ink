"""Views for Artists App."""

from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound
from rest_framework.response import Response
from rest_framework import status
from drf_spectacular.utils import extend_schema_view

from apps.tattoos.models import Tattoo
from apps.tattoos.serializers import TattooSerializer
from .models import Artist
from .serializers import ArtistSerializer
from .schemas import (
    artist_list_schema,
    artist_detail_schema,
    artist_tattoo_list_schema,
)


@extend_schema_view(**artist_list_schema)
class ArtistListView(ListAPIView):
    """
    View for listing all artists.

    Endpoints:
    - GET /api/artists
    """

    serializer_class = ArtistSerializer

    def get_queryset(self):
        return Artist.objects.get_list()


@extend_schema_view(**artist_detail_schema)
class ArtistDetailView(RetrieveAPIView):
    """
    View to retrieve a specific artist by ID.

    Endpoints:
    - GET /api/artists/{slug}
    """

    serializer_class = ArtistSerializer
    lookup_field = "slug"
    lookup_url_kwarg = "slug"

    def get_queryset(self):
        return Artist.objects.get_detail()


@extend_schema_view(**artist_tattoo_list_schema)
class ArtistTattooListView(APIView):
    """
    View for listing all tattoos of an artist (images only).

    Endpoints:
    - GET /api/artists/{slug}/tattoos
    """

    def get(self, request, slug, *args, **kwargs):
        try:
            artist = Artist.objects.get(slug=slug)
        except Artist.DoesNotExist:
            raise NotFound("Artist not found.")

        tattoos = Tattoo.objects.get_by_artist(artist)
        if tattoos.exists():
            serializer = TattooSerializer(tattoos, many=True)
            return Response(serializer.data)
        return Response(
            {"detail": "Tattoos not found."},
            status=status.HTTP_404_NOT_FOUND,
        )
