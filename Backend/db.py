import os

from fastapi.exceptions import HTTPException
from fastapi import Depends
from models import Base, ComplaintDBModel
from sqlalchemy import URL, Column, Integer, String, create_engine
from sqlalchemy.exc import OperationalError, SQLAlchemyError
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from models import ComplaintDBModel

connection_string = URL.create(
    "postgresql",
    username=os.environ.get("DB_USERNAME", "admin"),
    password=os.environ.get("DB_PASSWORD", "admin"),
    host=os.environ.get("DB_HOST", "localhost"),
    database=os.environ.get("DB_NAME", "navigo"),
)
engine = create_engine(connection_string)


Base.metadata.create_all(bind=engine)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def get_db() -> Session:
    """
    Returns a database session.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def test_db():
    try:
        with engine.connect():
            return True
    except OperationalError as e:
        print("DB Connection failed", e)
        return False


def create_complaint(db_session: Session, complaint: str):
    try:
        new_complaint = ComplaintDBModel(complaint=complaint)
        db_session.add(new_complaint)
        db_session.commit()
        db_session.refresh(new_complaint)
        return new_complaint
    except SQLAlchemyError as e:
        db_session.rollback()
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")


def get_all_complaints(db: Session):
    """
    Fetches all complaints from the database.

    Args:
    - db: SQLAlchemy session

    Returns:
    - List of all complaints
    """
    return db.query(ComplaintDBModel).all()
