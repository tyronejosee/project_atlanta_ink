"""Views for Products App."""

from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Category, Product
from .serializers import (
    CategorySerializer,
    ProductSerializer,
    ProductMinimalSerializer,
)


class CategoryListView(ListAPIView):
    """
    Pending

    Endpoints:
    - GET /api/categories
    """

    serializer_class = CategorySerializer

    def get_queryset(self):
        return Category.objects.get_available()


class ProductListView(ListAPIView):
    """
    Pending

    Endpoints:
    - GET /api/products
    """

    serializer_class = ProductMinimalSerializer

    def get_queryset(self):
        return Product.objects.get_available().select_related(
            "category_id"
        )  # TODO: Add manager


class ProductDetailView(RetrieveAPIView):
    """
    Pending

    Endpoints
    - GET /api/products/{slug}
    """

    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.get_available().select_related(
            "category_id"
        )  # TODO: Add manager
