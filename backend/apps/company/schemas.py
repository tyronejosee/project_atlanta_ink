"""Schemas for Company App."""

from drf_spectacular.utils import extend_schema, OpenApiResponse

from .serializers import (
    CompanySerializer,
    PriceSerializer,
    ServiceSerializer,
    FaqSerializer,
)


company_data_schema = {
    "get": extend_schema(
        summary="Get Company Data",
        description="Fetches all public data of the company.",
        responses={
            200: OpenApiResponse(
                response=CompanySerializer,
                description="OK (All company data)",
            ),
            400: OpenApiResponse(
                description="Bad Request (Invalid request data)",
            ),
            404: OpenApiResponse(
                description="Not Found (Company data not found)",
            ),
        },
        auth=[],
        tags=["company"],
    )
}

price_list_schema = {
    "get": extend_schema(
        summary="Get Several Prices",
        description="Get a list of all available prices.",
        responses={
            200: OpenApiResponse(
                response=PriceSerializer(many=True),
                description="OK (List of prices successfully retrieved)",
            ),
            400: OpenApiResponse(
                description="Bad Request (Invalid request data)",
            ),
            404: OpenApiResponse(
                description="Not Found (Prices not found)",
            ),
        },
        auth=[],
        tags=["company"],
    )
}


service_list_schema = {
    "get": extend_schema(
        summary="Get Several Services",
        description="Get a list of all available services.",
        responses={
            200: OpenApiResponse(
                response=ServiceSerializer(many=True),
                description="OK (List of services successfully retrieved)",
            ),
            400: OpenApiResponse(
                description="Bad Request (Invalid request data)",
            ),
            404: OpenApiResponse(
                description="Not Found (Services not found)",
            ),
        },
        auth=[],
        tags=["company"],
    )
}


faq_list_schema = {
    "get": extend_schema(
        summary="Get Several Faqs",
        description="Get a list of all available faqs.",
        responses={
            200: OpenApiResponse(
                response=FaqSerializer(many=True),
                description="OK (List of faqs successfully retrieved)",
            ),
            400: OpenApiResponse(
                description="Bad Request (Invalid request data)",
            ),
            404: OpenApiResponse(
                description="Not Found (Faqs not found)",
            ),
        },
        auth=[],
        tags=["company"],
    )
}
