"""Views for Applicants App."""

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import ApplicantSerializer


class CreateApplicantionView(APIView):
    """View for Create Application."""

    serializer_class = ApplicantSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid:
            serializer.save()
            return Response(
                {"detail": "Aplicacion created succeful."},
                status=status.HTTP_201_CREATED,
            )
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST,
        )
