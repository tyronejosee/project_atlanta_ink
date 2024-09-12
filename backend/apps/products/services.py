"""Services for Products App."""

import random
import string
from django.utils.text import slugify


class ProductService:
    """
    Service for Product model.
    """

    @staticmethod
    def generate_sku_field(product):
        """Generate the SKU ID."""
        if not product.sku:
            prefix_sku = slugify(product.name[:3]).upper()
            suffix_sku = "".join(
                random.choices(string.ascii_uppercase + string.digits, k=6)
            )
            product.sku = f"{prefix_sku}-{suffix_sku}"
