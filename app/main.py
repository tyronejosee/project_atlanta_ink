"""Main configs."""

import os
import uvicorn
from fastapi import FastAPI
from fastapi.responses import RedirectResponse

# from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.portfolio import routes

tags_metadata = [
    {
        "name": "portfolio",
        "description": "Operations related to porfolio",
    },
]

app = FastAPI(
    title=settings.PROJECT_NAME,
    description=("\nAccess the API documentation at `/docs` or `/redoc`."),
    version="1.0.0",
    # terms_of_service="http://example.com/terms/",
    contact={
        "name": "Coding Latam GitHub",
        "url": "https://github.com/Coding-Latam",
        # "email": "support@example.com",
    },
    license_info={
        "name": "MIT License",
        # "url": "http://example.com/license/",
    },
    debug=False,
    openapi_tags=tags_metadata,
)

orig_cors_origins = [
    "http://localhost",
    "http://127.0.0.1",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:4200",
    "http://127.0.0.1:4200",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:8080",
    "http://127.0.0.1:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=orig_cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", include_in_schema=False)
def root():
    return RedirectResponse(url="/docs")


# app.mount(
#     "/images",
#     StaticFiles(directory=settings.STATIC_DIR),
#     name="images",
# )

app.include_router(routes.router, prefix=settings.API_V1_STR)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
