"""Views for Artists App."""

from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound
from rest_framework.response import Response
from rest_framework import status
from drf_spectacular.utils import extend_schema_view

from apps.tattoos.models import Tattoo
from apps.tattoos.serializers import TattooImageSerializer
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
    View to list all available artists.

    Endpoints:
    - GET /api/artists
    """

    serializer_class = ArtistSerializer

    def get_queryset(self):
        return (
            Artist.objects.filter(is_available=True)
            .select_related("user_id")
            .prefetch_related("styles")
        )


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
        return (
            Artist.objects.filter(is_available=True)
            .select_related("user_id")
            .prefetch_related("styles")
        )


@extend_schema_view(**artist_tattoo_list_schema)
class ArtistTattooListView(APIView):
    """
    View retrieve all tattoos of an artist (images only).

    Endpoints:
    - GET /api/artists/{slug}/tattoos
    """

    serializer_class = TattooImageSerializer

    def get(self, request, slug, *args, **kwargs):
        try:
            artist = Artist.objects.get(slug=slug)
        except Artist.DoesNotExist:
            raise NotFound("Artist not found.")

        tattoos = Tattoo.objects.get_available().filter(artist_id=artist)

        if not tattoos.exists():
            return Response(
                {"detail": "No tattoos found."},
                status=status.HTTP_404_NOT_FOUND,
            )

        serializer = self.serializer_class(tattoos, many=True)
        image_urls = [tattoo["image"] for tattoo in serializer.data]
        return Response(image_urls)
