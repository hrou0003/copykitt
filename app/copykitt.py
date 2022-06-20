import os
import openai
import argparse


def main():
    print("running copy kitt!")

    parser = argparse.ArgumentParser()

    parser.add_argument("--input", "-i", type=str, required=True)
    args = parser.parse_args()
    user_input = args.input
    print(f"user input: {user_input}")

    result = generate_branding_snippet(user_input)
    print(result)


def generate_branding_snippet(prompt):
    openai.api_key = "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"

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