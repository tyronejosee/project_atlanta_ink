"""Urls for Tattoos App."""

from django.urls import path

from .views import TattooListView, TattooRandomListView


urlpatterns = [
    path(
        "tattoos",
        TattooListView.as_view(),
        name="tattoo-list",
    ),
    path(
        "tattoos/random",
        TattooRandomListView.as_view(),
        name="tattoo-random-list",
    ),
]
