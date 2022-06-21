from multiprocessing.sharedctypes import Value
import os
import openai
import argparse
import re

MAX_INPUT_LENGTH = 32

def main():

    parser = argparse.ArgumentParser()

    parser.add_argument("--input", "-i", type=str, required=True)
    args = parser.parse_args()
    user_input = args.input
    print(f"user input: {user_input}")

    if validate_length(user_input):
        snippet_result = generate_branding_snippet(user_input)
        keywords_result = generate_keywords(user_input)
        print(snippet_result, keywords_result)
    else:
        raise ValueError(f"Input length is too long. Must be under {MAX_INPUT_LENGTH}")

def validate_length(prompt: str) -> bool:
    return len(prompt) < MAX_INPUT_LENGTH

def generate_keywords(prompt):

    openai.api_key = os.getenv("OPENAI_API_KEY")

    enriched_prompt = f"Generate related branding keywords for {prompt}"
    response = openai.Completion.create(engine="text-davinci-002", prompt=enriched_prompt, max_tokens=32)

    # Extract the text from OpenAI response
    keywords_text: str = response["choices"][0]["text"]

    # Strip whitespace
    keywords_text = keywords_text.strip()
    keywords_array = re.split(",|\n| |-", keywords_text)

    return keywords_array

def generate_branding_snippet(prompt):


    openai.api_key = os.getenv("OPENAI_API_KEY")

    enriched_prompt = f"Generate upbeat branding snippet for {prompt}"
    response = openai.Completion.create(engine="text-davinci-002", prompt=enriched_prompt, max_tokens=32)

    # Extract the text from OpenAI response
    branding_text: str = response["choices"][0]["text"]

    # Strip whitespace
    branding_text = branding_text.strip()

    # Add .. to truncated statements
    last_char = branding_text[-1]

    if last_char not in {".", "!", "?"}:
        branding_text += "..."

    return branding_text

if __name__ == "__main__":
    main()