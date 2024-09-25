"""Pagination for Products App."""

from rest_framework.pagination import PageNumberPagination


class ProductPagination(PageNumberPagination):
    """Pagination class for Product model."""

    max_page_size = 100
    page_query_param = "page"
    page_size = 10
    page_size_query_param = "page_size"
    page_size_query_description = "Number of results to return per page."
