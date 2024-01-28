from googletrans import Translator
translator = Translator()
def translate_to_english(text,srclan):
    translation = translator.translate(text, src=srclan, dest='en')
    return translation.text

def translate_to_native(text, tarlan):
    translation = translator.translate(text, src='en', dest=tarlan)
    return translation.text

print(translate_to_english("Saptiya?", "ta"))