""""Validators for Utils App."""

from django.core.validators import RegexValidator


def validate_phone(value):
    """Validate a phone number according to the Chilean format."""
    validator = RegexValidator(
        regex=r"^\+56\d{9}$",
        message="Invalid phone number.",
        code="invalid_name",
    )
    validator(value)
