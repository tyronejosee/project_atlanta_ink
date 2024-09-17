"""Views for Tattoos App."""

from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny

from .models import Tattoo
from .serializers import TattooSerializer


class TattooListView(ListAPIView):
    """Pending."""

    permission_classes = [AllowAny]
    serializer_class = TattooSerializer

    def get_queryset(self):
        return Tattoo.objects.filter(is_available=True).select_related("artist_id")
