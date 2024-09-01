"""Urls for Company App."""

from django.urls import path

from .views import CompanyDataView

urlpatterns = [
    path(
        "company/",
        CompanyDataView.as_view(),
        name="company-data",
    ),
]
