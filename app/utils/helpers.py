"""Helpers for Utils App."""

import json
from typing import Dict


def load_json(file_path: str) -> Dict:
    """Loads a JSON file from path and returns its content as a dictionary."""
    with open(file_path, "r", encoding="utf-8") as file:
        return json.load(file)
