"""Managers for Company App."""

from apps.utils.managers import BaseManager


class CompanyManager(BaseManager):
    """Manager for Company model."""


class PriceManager(BaseManager):
    """Manager for Price model."""

    def get_list(self):
        return self.get_available().defer("created_at", "updated_at")


class ServiceManager(BaseManager):
    """Manager for Service model."""

    def get_list(self):
        return self.get_available().only("id", "name", "image", "description")


class FaqManager(BaseManager):
    """Manager for Faq model."""

    def get_list(self):
        return self.get_available().defer("created_at", "updated_at")
