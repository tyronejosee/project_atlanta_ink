"""Urls for Operations App."""

from django.urls import path

from .views import (
    StyleAllView,
    ArtistAllView,
    BrandAllView,
    CategoryAllView,
    ProductAlltView,
)


urlpatterns = [
    path(
        "operations/styles",
        StyleAllView.as_view(),
        name="operation-style",
    ),
    path(
        "operations/artists",
        ArtistAllView.as_view(),
        name="operation-artist",
    ),
    path(
        "operations/brands",
        BrandAllView.as_view(),
        name="operation-brand",
    ),
    path(
        "operations/categories",
        CategoryAllView.as_view(),
        name="operation-category",
    ),
    path(
        "operations/products",
        ProductAlltView.as_view(),
        name="operation-product",
    ),
]
