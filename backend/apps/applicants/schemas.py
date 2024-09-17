"""Schemas for Applicants App."""

from drf_spectacular.utils import extend_schema, OpenApiResponse

from .serializers import ApplicantSerializer


create_applicantion_schema = {
    "post": extend_schema(
        summary="Create a Application",
        description="Create a job application, available to everyone.",
        request=ApplicantSerializer,
        responses={
            201: OpenApiResponse(
                response=ApplicantSerializer,
                description="Created (Application created successfully)",
            ),
            400: OpenApiResponse(
                description="Bad Request (Invalid request data)",
            ),
        },
        auth=[],
        tags=["applicants"],
    )
}
