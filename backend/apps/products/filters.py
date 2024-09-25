"""Filters for Products App."""

from django_filters import rest_framework as filters

from .models import Product, Brand, Category
from .choices import SortChoices


class ProductFilter(filters.FilterSet):
    """Filter for Product model."""

    sort_by = filters.ChoiceFilter(
        choices=SortChoices.choices,
        method="filter_by_order",
        label="Search query sort direction, ex `/?=sort_by=latest`",
    )
    brand = filters.ModelChoiceFilter(
        queryset=Brand.objects.get_available(),
        field_name="brand_id",
    )
    category = filters.ModelChoiceFilter(
        queryset=Category.objects.get_available(),
        field_name="category_id",
    )

    class Meta:
        model = Product
        fields = ["brand", "category"]

    def filter_by_order(self, queryset, name, value):
        if value == SortChoices.LATEST:
            return queryset.order_by("-created_at")
        elif value == SortChoices.OLDEST:
            return queryset.order_by("created_at")
        elif value == SortChoices.HIGHEST_PRICE:
            return queryset.order_by("-price")
        elif value == SortChoices.LOWEST_PRICE:
            return queryset.order_by("price")
        return super().filter_by_order(queryset, name, value)
