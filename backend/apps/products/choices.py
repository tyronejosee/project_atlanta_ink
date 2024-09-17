"""Choices for Products App."""

from django.db import models


class CurrencyTypeChoices(models.TextChoices):

    USD = "usd", "United States Dollar"
    EUR = "eur", "Euro"
    JPY = "jpy", "Japanese Yen"
    GBP = "gbp", "British Pound"
    AUD = "aud", "Australian Dollar"
    CAD = "cad", "Canadian Dollar"
    CHF = "chf", "Swiss Franc"
    CNY = "cny", "Chinese Yuan"
    SEK = "sek", "Swedish Krona"
    NZD = "nzd", "New Zealand Dollar"


class SortChoices(models.TextChoices):

    LOWEST_PRICE = "lowest_price", "Lowest Price"
    HIGHEST_PRICE = "highest_price", "Highest Price"
    LATEST = "latest", "Latest Products"
    OLDEST = "oldest", "Oldest Products"
