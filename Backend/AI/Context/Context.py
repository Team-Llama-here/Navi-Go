import google.generativeai as genai
import os
from .Variables import GAPI_KEY, CAPI_KEY
from .Variables import prompt

# from Variables import GAPI_KEY, CAPI_KEY
# from Variables import prompt
from openai import OpenAI

client = OpenAI(api_key=CAPI_KEY)
# api_key = os.getenv(CAPI_KEY)
# openai.api_key = api_key
# openai.api_key = CAPI_KEY


genai.configure(api_key=GAPI_KEY)


def getContext(userprompt):
    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(prompt + userprompt)
    return response.text


def getContextC(userprompt):
    prompt_text = ""
    prompt_text += prompt
    prompt_text += userprompt

    stream = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt_text}],
        stream=True,
    )
    response = ""
    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            response += chunk.choices[0].delta.content
    return response


# print(getContextC("Today one bus conductor cursed me in bad words when I travel in bus."))
