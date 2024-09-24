""""Validators for Utils App."""

import io
from PIL import Image
from django.core.validators import RegexValidator
from django.core.exceptions import ValidationError


def validate_phone(value):
    """Validate a phone number according to the Atlanta format."""
    validator = RegexValidator(
        regex=r"^\+1404\d{7}$",
        message="Invalid phone number.",
        code="invalid_name",
    )
    validator(value)


def validate_file_size(image, max_size_mb=1):
    """Validate that image file does not exceed the allowed maximum size."""
    if image.size > max_size_mb * 1024 * 1024:
        raise ValidationError(f"File size should not exceed {max_size_mb} MB.")


def validate_image_dimensions(image, max_width=1920, max_height=1080):
    """Validate that image dimensions do not exceed the allowed maximum."""
    try:
        img = Image.open(io.BytesIO(image.file.read()))
        width, height = img.size

        if width > max_width or height > max_height:
            raise ValidationError(
                f"Image dimensions must not exceed {max_width}x{max_height}px."
            )
    except Exception as e:
        raise ValidationError(f"Invalid image file {str(e)}.")
