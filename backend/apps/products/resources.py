"""Resources for Products App."""

from import_export.resources import ModelResource

from .models import Brand, Category, Product


class BrandResource(ModelResource):
    """Resource definition for Brand model"""

    class Meta:
        model = Brand


class CategoryResource(ModelResource):
    """Resource definition for Category model"""

    class Meta:
        model = Category


class ProductResource(ModelResource):
    """Resource definition for Product model"""

    class Meta:
        model = Product
