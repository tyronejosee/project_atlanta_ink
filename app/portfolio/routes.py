"""Routes for Portfolio App."""

from typing import List
from fastapi import APIRouter

from app.utils.helpers import load_json
from app.portfolio.schemas import Bookmark


router = APIRouter()


@router.get(
    "/bookmarks",
    response_model=List[Bookmark],
    tags=["portfolio"],
    summary="Retrieves all available bookmarks",
    description="Pending.",
)
async def get_bookmarks():
    return load_json("app/data/bookmarks.json")
