"""Routes for Portfolio App."""

from typing import List
from fastapi import APIRouter

from app.utils.helpers import load_json
from app.portfolio.schemas import Experience, Skill, Project, Bookmark


router = APIRouter()


@router.get(
    "/experiences",
    response_model=List[Experience],
    tags=["portfolio"],
    summary="Retrieves all experience data",
    description="Pending.",
)
async def get_experiences():
    return load_json("app/data/experiences.json")


@router.get(
    "/skills",
    response_model=List[Skill],
    tags=["portfolio"],
    summary="Retrieves all skill data",
    description="Pending.",
)
async def get_skills():
    return load_json("app/data/skills.json")


@router.get(
    "/projects",
    response_model=List[Project],
    tags=["portfolio"],
    summary="Retrieves all projects data",
    description="Pending.",
)
async def get_projects():
    return load_json("app/data/projects.json")


@router.get(
    "/bookmarks",
    response_model=List[Bookmark],
    tags=["portfolio"],
    summary="Retrieves all bookmarks data",
    description="Pending.",
)
async def get_bookmarks():
    return load_json("app/data/bookmarks.json")
