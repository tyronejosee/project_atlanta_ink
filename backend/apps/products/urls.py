"""Urls for Products App.""" ""

from django.urls import path

from .views import (
    BrandListView,
    CategoryListView,
    ProductListView,
    ProductDetailView,
    RelatedProductsListView,
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
        "products/<uuid:pk>/related",
        RelatedProductsListView.as_view(),
        name="related-products-lis",
    ),
    path(
        "products/featured",
        FeaturedProductsListView.as_view(),
        name="featured-products-list",
    ),
]
