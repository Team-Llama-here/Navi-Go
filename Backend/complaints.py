from app import router
from db import *
from models import Complaint


@router.post("/complaints/")
async def create_complaint_endpoint(
    complaint: Complaint, db: Session = Depends(get_db)
):
    created_complaint = create_complaint(db, complaint)
    db.close()
    return {"QUERY": "OK"}


@router.get("/complaints/", response_model=list[Complaint])
async def get_complaints(db: Session = Depends(get_db)):
    """
    Retrieve all complaints from the database.
    """
    complaints = get_all_complaints(db)
    return complaints
