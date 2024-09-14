"""Views for Company App."""

from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND

from .models import Company, Price, Service, Faq
from .serializers import (
    CompanySerializer,
    PriceSerializer,
    ServiceSerializer,
    FaqSerializer,
)


class CompanyDataView(APIView):
    """
    View to retrieve the Company record.

    Enpoints:
    - GET /api/company
    """

    serializer_class = CompanySerializer

    def get(self, request, *args, **kwargs):
        company_data = Company.objects.first()
        if company_data:
            serializer = self.serializer_class(company_data)
            return Response(serializer.data)
        return Response(
            {"error": "Company data not found"},
            status=HTTP_404_NOT_FOUND,
        )


class PriceListView(ListAPIView):
    """
    View for listing all prices.

    Endpoints:
    - GET /api/prices
    """

    serializer_class = PriceSerializer

    def get_queryset(self):
        return Price.objects.get_list()


class ServiceListView(ListAPIView):
    """
    View for listing all services.

    Endpoints:
    - GET /api/services
    """

    serializer_class = ServiceSerializer

    def get_queryset(self):
        return Service.objects.get_list()


class FaqListView(ListAPIView):
    """
    View for listing all faqs.

    Endpoints:
    - GET /api/faqs
    """

    serializer_class = FaqSerializer

    def get_queryset(self):
        return Faq.objects.get_list()
