"""Schemas for Portfolio App."""

from pydantic import BaseModel
from typing import List, Optional


class Experience(BaseModel):
    id: str
    company: str = ""
    position: str = ""
    start_date: str
    end_date: str
    location: str
    responsibilities: List[str]
    achievements: List[str]


class Skill(BaseModel):
    id: str
    name: str
    icon: Optional[str] = None
    status: bool


class Project(BaseModel):
    id: str
    name: str
    description: str
    image: Optional[str] = None
    repository: str
    website: str
    skills: List[str]
    status: bool


class Bookmark(BaseModel):
    id: str
    title: str
    website: str
    image: str
    category: str
    tags: List[str]
    status: bool
