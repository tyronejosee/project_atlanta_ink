"""Views for Tattoos App."""

from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny
from drf_spectacular.utils import extend_schema_view

from .models import Tattoo
from .serializers import TattooSerializer
from .schemas import tattoo_list_schema, tattoo_random_list_schema


@extend_schema_view(**tattoo_list_schema)
class TattooListView(ListAPIView):
    """
    View for listing all tattoos.

    Endpoints:
    - GET /api/tattoos
    """

    permission_classes = [AllowAny]
    serializer_class = TattooSerializer

    def get_queryset(self):
        return Tattoo.objects.get_list()


@extend_schema_view(**tattoo_random_list_schema)
class TattooRandomListView(ListAPIView):
    """
    View for listing random tattoos (Only 12).

    Endpoints:
    - GET /api/tattoos/random
    """

    permission_classes = [AllowAny]
    serializer_class = TattooSerializer

    def get_queryset(self):
        return Tattoo.objects.get_list().order_by("?")[:12]
