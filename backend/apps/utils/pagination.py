"""Pagination for Utilities App."""

from rest_framework.pagination import LimitOffsetPagination


class LimitSetPagination(LimitOffsetPagination):
    """Pagination for datasets with limit and offset."""

    default_limit = 25
    limit_query_description = "Number of results to return per page, ex `/?limit=50`"
    limit_query_param = "limit"
    max_limit = 50
    offset_query_description = (
        "The initial index from which to return the results, ex `/?ffset=20`"
    )
    offset_query_param = "offset"
    template = "rest_framework/pagination/numbers.html"
