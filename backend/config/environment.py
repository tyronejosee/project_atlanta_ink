"""Enviroments configs."""

import environ

env = environ.Env()
environ.Env.read_env("backend/.env")

ENVIRONMENT = env("ENVIRONMENT", default="local")

if ENVIRONMENT == "local":
    SETTINGS_MODULE = "config.settings.local"
if ENVIRONMENT == "testing":
    SETTINGS_MODULE = "config.settings.testing"
if ENVIRONMENT == "production":
    SETTINGS_MODULE = "config.settings.production"
