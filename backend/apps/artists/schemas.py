"""Schemas for Artists App."""

from drf_spectacular.utils import extend_schema, OpenApiResponse

from apps.tattoos.serializers import TattooSerializer
from .serializers import ArtistSerializer


artist_list_schema = {
    "get": extend_schema(
        summary="Get Several Artists",
        description="Get a list of all available artists.",
        responses={
            200: OpenApiResponse(
                response=ArtistSerializer(many=True),
                description="OK (List of artists successfully retrieved)",
            ),
            400: OpenApiResponse(
                description="Bad Request (Invalid request data)",
            ),
            404: OpenApiResponse(
                description="Not Found (Artists not found)",
            ),
        },
        auth=[],
        tags=["artists"],
    )
}


artist_detail_schema = {
    "get": extend_schema(
        summary="Get a Artist",
        description="Get detailed information about a specific artist.",
        responses={
            200: OpenApiResponse(
                response=ArtistSerializer,
                description="OK (Example details successfully retrieved)",
            ),
            400: OpenApiResponse(
                description="Bad Request (Invalid request data)",
            ),
            404: OpenApiResponse(
                description="Not Found (Example not found)",
            ),
        },
        auth=[],
        tags=["artists"],
    )
}


artist_tattoo_list_schema = {
    "get": extend_schema(
        summary="Get a Tattoos Artists",
        description="Get a list of tattoos from an artist.",
        responses={
            200: OpenApiResponse(
                response=TattooSerializer,
                description="OK (List of tattoo found)",
            ),
            400: OpenApiResponse(
                description="Bad Request (Invalid request data)",
            ),
            404: OpenApiResponse(
                description="Not Found (Example not found)",
            ),
        },
        auth=[],
        tags=["artists"],
    )
}
