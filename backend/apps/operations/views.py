"""Views for Operations App."""

from rest_framework.generics import ListAPIView

from apps.artists.models import Style, Artist
from apps.products.models import Brand, Category, Product
from .serializers import (
    StyleAllSerializer,
    ArtistAllSerializer,
    BrandAllSerializer,
    CategoryAllSerializer,
    ProductAllSerializer,
)


# Artists Views


class StyleAllView(ListAPIView):

    serializer_class = StyleAllSerializer

    def get_queryset(self):
        return Style.objects.all()


class ArtistAllView(ListAPIView):

    serializer_class = ArtistAllSerializer

    def get_queryset(self):
        return Artist.objects.all()


# Products Views


class BrandAllView(ListAPIView):

    serializer_class = BrandAllSerializer

    def get_queryset(self):
        return Brand.objects.all()


class CategoryAllView(ListAPIView):

    serializer_class = CategoryAllSerializer

    def get_queryset(self):
        return Category.objects.all()


class ProductAlltView(ListAPIView):

    serializer_class = ProductAllSerializer

    def get_queryset(self):
        return Product.objects.all()
