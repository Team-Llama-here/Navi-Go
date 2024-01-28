import google.generativeai as genai
from .Variables import GAPI_KEY, CAPI_KEY
from .Variables import prompt
import os
from openai import OpenAI

client = OpenAI(api_key=CAPI_KEY)


genai.configure(api_key = GAPI_KEY)

def askgemini(userprompt):
    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content(prompt+userprompt)
    return response.text

def askgpt(userprompt):
    prompt_text = "" 
    prompt_text+=prompt
    prompt_text += userprompt

    stream = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt_text}],
        stream=True,
    )
    response = ""
    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            response+=chunk.choices[0].delta.content
    return response
