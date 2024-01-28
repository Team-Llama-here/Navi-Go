import firebase_admin
from firebase_admin import credentials, messaging
import os

prefix = "FIREBASE_"

firebase_service_account_vars = {}
for key in os.environ:
    if key.startswith(prefix):
        stripped_key = key[key.find(prefix) + len(prefix) :]
        firebase_service_account_vars[stripped_key.lower()] = os.environ[key].replace(
            r"\n", "\n"
        )

cred = credentials.Certificate(firebase_service_account_vars)
app = firebase_admin.initialize_app(cred)
