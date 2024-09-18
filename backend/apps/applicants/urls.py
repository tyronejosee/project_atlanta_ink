"""Urls for Applicants App."""

from django.urls import path

from .views import CreateApplicantionView


urlpatterns = [
    path(
        "applicants",
        CreateApplicantionView.as_view(),
        name="create-application",
    ),
]
