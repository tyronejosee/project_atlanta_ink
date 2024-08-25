"""Schemas for Portfolio App."""

from pydantic import BaseModel
from typing import List


class Bookmark(BaseModel):
    id: str
    title: str
    website: str
    image: str
    category: str
    tags: List[str]
    status: bool
