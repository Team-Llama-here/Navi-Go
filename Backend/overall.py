from AI.Main import GetResponse
from app import router
from db import *
from models import *


@router.post("/main")
async def main_app_logic(query: CommonQueryRequest):
    response = GetResponse(
        query=query.query, lang=query.lang, location=query.location, mode=query.mode
    )
    return response
