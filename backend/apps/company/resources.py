"""Resources for Company App."""

from import_export.resources import ModelResource

from .models import Company, Price, Service, Faq


class CompanyResource(ModelResource):
    """Resource definition for Company model"""

    class Meta:
        model = Company


class PriceResource(ModelResource):
    """Resource definition for Price model"""

    class Meta:
        model = Price


class ServiceResource(ModelResource):
    """Resource definition for Service model"""

    class Meta:
        model = Service


class FaqResource(ModelResource):
    """Resource definition for Faq model"""

    class Meta:
        model = Faq
