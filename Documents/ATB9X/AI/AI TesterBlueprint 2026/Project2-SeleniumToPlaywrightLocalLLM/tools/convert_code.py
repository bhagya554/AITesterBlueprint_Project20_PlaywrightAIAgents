import requests
import os
import re

def clean_llm_response(response_text):
    """
    Extracts code from markdown code blocks if present.
    """
    code_block_pattern = r"```(?:typescript|javascript|js|ts)?\n(.*?)```"
    match = re.search(code_block_pattern, response_text, re.DOTALL)
    if match:
        return match.group(1).strip()
    return response_text.strip()

def convert_selenium_to_playwright(source_code, language="typescript"):
    """
    Sends source code to Ollama for conversion.
    """
    # Load env vars safely
    base_url = os.environ.get('OLLAMA_BASE_URL', 'http://localhost:11434')
    model = os.environ.get('OLLAMA_MODEL', 'codellama')

    system_prompt = (
        f"You are an expert Test Automation Engineer. Convert the following Selenium Java code to Playwright {language}.\n"
        "Rules:\n"
        "1. STRICTLY use async/await.\n"
        "2. Use Page Object Model (POM) structure if the input suggests a class structure.\n"
        "3. Translate TestNG annotations to Playwright Test runner syntax (test, test.beforeAll, etc).\n"
        "4. Return ONLY the code. No explanations. Wrap it in ```{language} ... ``` blocks.\n"
    )

    user_prompt = f"Source Code (Java):\n{source_code}"

    try:
        response = requests.post(f"{base_url}/api/generate", json={
            "model": model,
            "prompt": system_prompt + "\n\n" + user_prompt,
            "stream": False,
            "options": {
                "temperature": 0.2  # Low temperature for deterministic code
            }
        })
        
        if response.status_code == 200:
            full_text = response.json().get('response', '')
            return clean_llm_response(full_text)
        else:
            raise Exception(f"Ollama API Error: {response.text}")
            
    except Exception as e:
        raise Exception(f"Conversion failed: {str(e)}")
