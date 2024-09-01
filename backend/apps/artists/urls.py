"""Urls for Artists App."""

from django.urls import path

from .views import ArtistListView, ArtistDetailView


urlpatterns = [
    path(
        "artists/",
        ArtistListView.as_view(),
        name="artist-list",
    ),
    path(
        "artists/<uuid:pk>/",
        ArtistDetailView.as_view(),
        name="artist-detail",
    ),
]
