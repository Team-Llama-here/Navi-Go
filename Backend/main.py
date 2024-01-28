from app import app, router
from notification import *
from complaints import *
from overall import *


@router.get("/")
def health_check():
    return {"SYSTEM_OK": True, "DB_OK": test_db()}


app.include_router(router)
