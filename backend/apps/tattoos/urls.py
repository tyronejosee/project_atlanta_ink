"""Urls for Tattoos App."""

from django.urls import path

from .views import TattooListView


urlpatterns = [
    path(
        "tattoos/",
        TattooListView.as_view(),
        name="tattoo-list",
    ),
]
