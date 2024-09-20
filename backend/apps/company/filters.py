"""Filters for Company App."""

from django_filters import rest_framework as filters

from .models import Price


class PriceFilter(filters.FilterSet):
    """Filter for Price model."""

    is_featured = filters.BooleanFilter(
        field_name="is_featured",
        label="Boolean filter for featured prices, ex `/?is_featured=latest`",
    )

    class Meta:
        model = Price
        fields = [
            "is_featured",
        ]
