"""Views for Company App."""

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND

from .models import Company
from .serializers import CompanySerializer


class CompanyDataView(APIView):
    """View to retrieve the Company record."""

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
