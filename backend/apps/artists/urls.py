"""Urls for Artists App."""

from django.urls import path

from .views import ArtistListView, ArtistDetailView, ArtistTattooListView


urlpatterns = [
    path(
        "artists",
        ArtistListView.as_view(),
        name="artist-list",
    ),
    path(
        "artists/<str:slug>",
        ArtistDetailView.as_view(),
        name="artist-detail",
    ),
    path(
        "artists/<str:slug>/tattoos",
        ArtistTattooListView.as_view(),
        name="artist-tattoo-list",
    ),
]
