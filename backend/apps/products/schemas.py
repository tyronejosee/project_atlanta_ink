"""Schemas for Products App."""

from drf_spectacular.utils import extend_schema, OpenApiResponse

from .serializers import (
    BrandSerializer,
    CategorySerializer,
    ProductSerializer,
    ProductMinimalSerializer,
)


brand_list_schema = {
    "get": extend_schema(
        summary="Get Several Brands",
        description="Get a list of all available brands.",
        responses={
            200: OpenApiResponse(
                response=BrandSerializer(many=True),
                description="OK (List of brands successfully retrieved)",
            ),
            400: OpenApiResponse(
                description="Bad Request (Invalid request data)",
            ),
            404: OpenApiResponse(
                description="Not Found (Brands not found)",
            ),
        },
        auth=[],
        tags=["products"],
    )
}


category_list_schema = {
    "get": extend_schema(
        summary="Get Several Categories",
        description="Get a list of all available categories.",
        responses={
            200: OpenApiResponse(
                response=CategorySerializer(many=True),
                description="OK (List of categories successfully retrieved)",
            ),
            400: OpenApiResponse(
                description="Bad Request (Invalid request data)",
            ),
            404: OpenApiResponse(
                description="Not Found (Categories not found)",
            ),
        },
        auth=[],
        tags=["products"],
    )
}


product_list_schema = {
    "get": extend_schema(
        summary="Get Several Products",
        description="Get a list of all available products.",
        responses={
            200: OpenApiResponse(
                response=ProductMinimalSerializer(many=True),
                description="OK (List of products successfully retrieved)",
            ),
            400: OpenApiResponse(
                description="Bad Request (Invalid request data)",
            ),
            404: OpenApiResponse(
                description="Not Found (Products not found)",
            ),
        },
        auth=[],
        tags=["products"],
    )
}


product_detail_schema = {
    "get": extend_schema(
        summary="Get a Product",
        description="Get detailed information about a specific product.",
        responses={
            200: OpenApiResponse(
                response=ProductSerializer,
                description="OK (Product details successfully retrieved)",
            ),
            400: OpenApiResponse(
                description="Bad Request (Invalid request data)",
            ),
            404: OpenApiResponse(
                description="Not Found (Product not found)",
            ),
        },
        auth=[],
        tags=["products"],
    )
}


related_products_list_schema = {
    "get": extend_schema(
        summary="Get Related Products",
        description="Get a list of all related products.",
        responses={
            200: OpenApiResponse(
                response=ProductMinimalSerializer(many=True),
                description="OK (List of products successfully retrieved)",
            ),
            400: OpenApiResponse(
                description="Bad Request (Invalid request data)",
            ),
            404: OpenApiResponse(
                description="Not Found (Products not found)",
            ),
        },
        auth=[],
        tags=["products"],
    )
}


featured_products_list_schema = {
    "get": extend_schema(
        summary="Get Featured Products",
        description="Get a list of all featured products.",
        responses={
            200: OpenApiResponse(
                response=ProductMinimalSerializer(many=True),
                description="OK (List of products successfully retrieved)",
            ),
            400: OpenApiResponse(
                description="Bad Request (Invalid request data)",
            ),
            404: OpenApiResponse(
                description="Not Found (Products not found)",
            ),
        },
        auth=[],
        tags=["products"],
    )
}
