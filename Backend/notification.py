from typing import Mapping
from app import router, HTTPException
from firebase import messaging
from models import FCMToken, Notification


@router.get("/test")
def test():
    return "GOOD"


@router.post("/subscribe-to-topic/{topic_name}")
def subscribe_to_topic(topic_name: str, body: FCMToken):
    token = body.token
    response = messaging.subscribe_to_topic(tokens=[token], topic=topic_name)
    # print(dir(response))
    if response.success_count == 0:
        raise HTTPException(status_code=400, detail=response.errors[0].reason)
    return {"STATUS": "OK"}


@router.post("/publish-notification")
def publish_notification(notification: Notification):
    TOPIC = "RapidFire"
    print(type(notification))
    message = messaging.Message(
        data={"sent_by": "API"},
        notification=messaging.Notification(
            title=notification.title, body=notification.body
        ),
        topic=TOPIC,
    )

    response = messaging.send(message=message)
    print("Successfully sent message: ", response)

    return {"STATUS": "OK"}
