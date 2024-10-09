"""Schemas for Tattoos App."""

from drf_spectacular.utils import extend_schema, OpenApiResponse

from .serializers import TattooSerializer


tattoo_list_schema = {
    "get": extend_schema(
        summary="Get Several Tattoos",
        description="Get a list of all available tattoos.",
        responses={
            200: OpenApiResponse(
                response=TattooSerializer(many=True),
                description="OK (List of tattoos successfully retrieved)",
            ),
            400: OpenApiResponse(
                description="Bad Request (Invalid request data)",
            ),
            404: OpenApiResponse(
                description="Not Found (Tattoos not found)",
            ),
        },
        auth=[],
        tags=["tattoos"],
    )
}


tattoo_random_list_schema = {
    "get": extend_schema(
        summary="Get Random Tattoos",
        description="Get a list of random tattoos.",
        responses={
            200: OpenApiResponse(
                response=TattooSerializer(many=True),
                description="OK (List of tattoos successfully retrieved)",
            ),
            400: OpenApiResponse(
                description="Bad Request (Invalid request data)",
            ),
            404: OpenApiResponse(
                description="Not Found (Tattoos not found)",
            ),
        },
        auth=[],
        tags=["tattoos"],
    )
}
