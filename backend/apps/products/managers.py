"""Managers for Products App."""

from apps.utils.managers import BaseManager


class BrandManager(BaseManager):
    """Manager for Brand model."""

    def get_list(self):
        return self.get_available().only("id", "name")


class CategoryManager(BaseManager):
    """Manager for Category model."""

    def get_list(self):
        return self.get_available().only("id", "name")


class ProductManager(BaseManager):
    """Manager for Product model."""

    def get_list(self):
        return (
            self.get_available()
            .select_related("category_id", "brand_id")
            .only(
                "id",
                "name",
                "slug",
                "price",
                "image",
                "brand_id",
                "category_id",
            )
        )

    def get_detail(self):
        return self.get_available().select_related(
            "category_id",
            "brand_id",
        )

    def get_featured(self):
        return (
            self.get_available()
            .filter(is_featured=True)
            .select_related("category_id", "brand_id")
            .only(
                "id",
                "name",
                "slug",
                "price",
                "image",
                "brand_id",
                "category_id",
            )
        )[:6]
