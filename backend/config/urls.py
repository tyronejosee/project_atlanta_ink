"""URLs for config project."""

from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.views.generic.base import RedirectView
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularRedocView,
    SpectacularSwaggerView,
)


urlpatterns = [
    # Admin urls
    path("", RedirectView.as_view(url="/admin/")),
    path("admin/", admin.site.urls),
    # Docs urls
    path(
        "docs",
        SpectacularSwaggerView.as_view(url_name="schema"),
        name="swagger",
    ),
    path(
        "redoc",
        SpectacularRedocView.as_view(url_name="schema"),
        name="redoc",
    ),
    path(
        "schema",
        SpectacularAPIView.as_view(),
        name="schema",
    ),
    # Apps urls
    path("api/", include("apps.applicants.urls")),
    path("api/", include("apps.artists.urls")),
    path("api/", include("apps.bookings.urls")),
    path("api/", include("apps.company.urls")),
    path("api/", include("apps.products.urls")),
    path("api/", include("apps.tattoos.urls")),
]


# Debug config
if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT,
    )
    urlpatterns += static(
        settings.STATIC_URL,
        document_root=settings.STATIC_ROOT,
    )


# AdminSite props.
admin.site.site_header = "Atlanta Ink"
admin.site.site_title = "Atlanta Ink"
admin.site.index_title = "Admin"
