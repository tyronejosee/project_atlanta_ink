"""Schemas for Bookings App."""

from drf_spectacular.utils import extend_schema, OpenApiResponse

from .serializers import BookingSerializer


create_booking_schema = {
    "post": extend_schema(
        summary="Create a Application",
        description="Create a job application, available to everyone.",
        request=BookingSerializer,
        responses={
            201: OpenApiResponse(
                description="Created (Record created successfully)",
            ),
            400: OpenApiResponse(
                description="Bad Request (Invalid request data)",
            ),
            500: OpenApiResponse(
                description="Server Error (Unexpected server error)",
            ),
        },
        auth=[],
        tags=["bookings"],
    )
}
