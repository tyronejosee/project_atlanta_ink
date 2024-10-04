"""Models for Products App."""

from django.db import models
from cloudinary.models import CloudinaryField

from apps.utils.mixins import SlugMixin
from apps.utils.models import BaseModel
from apps.utils.validators import validate_file_size, validate_image_dimensions
from .managers import BrandManager, CategoryManager, ProductManager
from .choices import CurrencyTypeChoices


class Brand(BaseModel):
    """Model definition for Brand model."""

    name = models.CharField(max_length=50, unique=True)

    objects = BrandManager()

    class Meta:
        ordering = ["pk"]
        verbose_name = "brand"
        verbose_name_plural = "brands"

    def __str__(self):
        return str(self.name)


class Category(BaseModel):
    """Model definition for Category model."""

    name = models.CharField(max_length=25, unique=True)

    objects = CategoryManager()

    class Meta:
        ordering = ["pk"]
        verbose_name = "category"
        verbose_name_plural = "categories"

    def __str__(self):
        return str(self.name)


class Product(SlugMixin, BaseModel):
    """Model definition for Product model."""

    name = models.CharField(max_length=100, unique=True)
    sku = models.CharField(
        max_length=100,
        unique=True,
        editable=False,
        blank=True,
        help_text=(
            "Stock Keeping Units"
            "Unique code automatically generated for inventory management."
        ),
    )
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    brand_id = models.ForeignKey(
        Brand,
        related_name="products",
        on_delete=models.PROTECT,
    )
    currency = models.CharField(
        max_length=3,
        choices=CurrencyTypeChoices.choices,
        default=CurrencyTypeChoices.USD,
        help_text="Select the currency in which product price is displayed.",
    )
    image = CloudinaryField(blank=True)
    category_id = models.ForeignKey(
        Category,
        related_name="products",
        on_delete=models.PROTECT,
    )
    stock = models.IntegerField()
    is_featured = models.BooleanField(
        default=False,
        help_text=(
            "Check this option if you want to highlight this product"
            "in main listings."
        ),
    )

    objects = ProductManager()

    MAX_FILE_SIZE_MB = 1
    MAX_WIDTH = 1080
    MAX_HEIGHT = 1080

    class Meta:
        ordering = ["pk"]
        verbose_name = "product"
        verbose_name_plural = "products"
        indexes = [
            models.Index(fields=["slug"]),
            models.Index(fields=["sku"]),
        ]

    def __str__(self):
        return str(self.name)

    def clean(self):
        super().clean()
        if self.pk is None:
            if self.image:
                validate_file_size(
                    self.image,
                    max_size_mb=self.MAX_FILE_SIZE_MB,
                )
                validate_image_dimensions(
                    self.image,
                    max_width=self.MAX_WIDTH,
                    max_height=self.MAX_HEIGHT,
                )

    def save(self, *args, **kwargs):
        from .services import ProductService

        ProductService.generate_sku_field(self)
        self.set_slug()
        super().save(*args, **kwargs)
