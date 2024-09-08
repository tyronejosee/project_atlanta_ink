"""Views for Artists App."""

from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound
from rest_framework.response import Response

from apps.tattoos.models import Tattoo
from apps.tattoos.serializers import TattooImageSerializer
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
    lookup_field = "slug"
    lookup_url_kwarg = "slug"

    def get_queryset(self):
        return (
            Artist.objects.filter(is_available=True)
            .select_related("user_id")
            .prefetch_related("styles")
        )


class ArtistTattooListView(APIView):
    """View retrieve all tattoos of an artist (images only)."""

    serializer_class = TattooImageSerializer

    def get(self, request, slug, *args, **kwargs):
        try:
            artist = Artist.objects.get(slug=slug)
        except Artist.DoesNotExist:
            raise NotFound("Artist not found.")

        tattoos = Tattoo.objects.filter(artist_id=artist)
        serializer = self.serializer_class(tattoos, many=True)
        image_urls = [tattoo["image"] for tattoo in serializer.data]
        # return Response(image_urls)

        # ! TODO: Remove this
        # Repeat images to reach 25 items
        required_length = 25
        repeated_images = (
            image_urls * (required_length // len(image_urls))
        ) + image_urls[: (required_length % len(image_urls))]
        return Response(repeated_images)
