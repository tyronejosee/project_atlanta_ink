"""Urls for Products App.""" ""

from django.urls import path

from .views import (
    BrandListView,
    CategoryListView,
    ProductListView,
    ProductDetailView,
    FeaturedProductsListView,
)


urlpatterns = [
    path(
        "brands",
        BrandListView.as_view(),
        name="brand-list",
    ),
    path(
        "categories",
        CategoryListView.as_view(),
        name="category-list",
    ),
    path(
        "products",
        ProductListView.as_view(),
        name="product-list",
    ),
    path(
        "products/<str:slug>",
        ProductDetailView.as_view(),
        name="product-detail",
    ),
    path(
        "products/featured",
        FeaturedProductsListView.as_view(),
        name="featured-products-list",
    ),
]
