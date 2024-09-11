"""Views for Bookings App."""

from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status

from .serializers import BookingSerializer


class CreateBookingView(APIView):
    """
    View to create a reservation or booking

    Endpoints:
    POST api/bookings
    """

    permission_classes = [AllowAny]
    serializer_class = BookingSerializer

    def post(self, request, *args, **kwargs):
        try:
            serializer = self.serializer_class(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(
                    {"detail": "Record created successfully."},
                    status=status.HTTP_201_CREATED,
                )
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST,
            )
        except Exception as e:
            return Response(
                {"errors": f"{e}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
