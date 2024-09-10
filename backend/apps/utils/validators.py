""""Validators for Utils App."""

from django.core.validators import RegexValidator


def validate_phone(value):
    """Validate a phone number according to the Atlanta format."""
    validator = RegexValidator(
        regex=r"^\+1404\d{7}$",
        message="Invalid phone number.",
        code="invalid_name",
    )
    validator(value)
