"""Views for Applicants App."""

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from drf_spectacular.utils import extend_schema_view

from .serializers import ApplicantSerializer
from .schemas import create_applicantion_schema


@extend_schema_view(**create_applicantion_schema)
class CreateApplicantionView(APIView):
    """
    View for create application.

    Endpoints:
    - POST /api/applicants
    """

    serializer_class = ApplicantSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid:
            serializer.save()
            return Response(
                {"detail": "Application created successfully."},
                status=status.HTTP_201_CREATED,
            )
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST,
        )
