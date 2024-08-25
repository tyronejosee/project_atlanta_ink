"""Configs for Core Module."""

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    PROJECT_NAME: str = "Coding Latam API"
    API_V1_STR: str = "/api/v1"
    STATIC_DIR: str = "app/static/images"


settings = Settings()
