"""Urls for Company App."""

from django.urls import path

from .views import CompanyDataView, PriceListView, ServiceListView, FaqListView


urlpatterns = [
    path(
        "company",
        CompanyDataView.as_view(),
        name="company-data",
    ),
    path(
        "prices",
        PriceListView.as_view(),
        name="price-list",
    ),
    path(
        "services",
        ServiceListView.as_view(),
        name="service-list",
    ),
    path(
        "faqs",
        FaqListView.as_view(),
        name="faq-list",
    ),
]
