from pydantic import BaseModel
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String


class FCMToken(BaseModel):
    token: str


class Notification(BaseModel):
    title: str
    body: str


class Complaint(BaseModel):
    complaint: str


class CommonQueryRequest(BaseModel):
    query: str
    lang: str
    location: str
    mode: int


class CommonQueryResponse(BaseModel):
    role: str
    msg: str
    id: str
    options: dict
    link: str


#  {
#                 "role": "bot",
#                 "msg": "Which mode of travel you prefer?",
#                 "id": uui,
#                 "options": [
#                     {
#                     "text": "Bus",
#                     "resp": "let's go by bus",
#                     },{
#                     "text": "train",
#                     "resp": "let's go by train",
#                     }
#                 ],
#                 "link": generateLink(source, destination)
#                 }


# ----------------------------- DB ---------------------- #

Base = declarative_base()


class ComplaintDBModel(Base):
    __tablename__ = "complaints"

    id = Column(Integer, primary_key=True)
    complaint = Column(String)

    def __repr__(self):
        return f"<Complaint(id={self.id}, complaint='{self.complaint}')>"
