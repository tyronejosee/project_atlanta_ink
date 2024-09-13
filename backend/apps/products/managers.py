"""Managers for Products App."""

from apps.utils.managers import BaseManager


class CategoryManager(BaseManager):
    """Manager for Category model."""

    def get_list(self):
        return self.get_available().only("id", "name")


class ProductManager(BaseManager):
    """Manager for Product model."""

    def get_list(self):
        return (
            self.get_available()
            .select_related("category")
            .only("id", "name", "price", "image", "category")
        )

    def get_detail(self):
        return self.get_available().select_related("category")

    def get_featured(self):
        return (
            self.get_available()
            .filter(is_featured=True)
            .select_related("category")
            .only("id", "name", "price", "image", "category")
        )[:6]
