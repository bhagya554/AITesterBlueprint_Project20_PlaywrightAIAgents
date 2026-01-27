# 🚀 Selenium to Playwright Converter (Local LLM)

This tool converts Selenium Java code to Playwright TypeScript/JavaScript using your local Ollama instance.

## Prerequisites

1.  **Ollama** installed and running (`ollama serve`).
2.  **CodeLlama** model pulled: `ollama pull codellama`.
3.  **Python 3.8+** installed.

## Setup

1.  Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

2.  (Optional) Configure `.env` if your Ollama is on a different port:
    ```env
    OLLAMA_BASE_URL=http://localhost:11434
    OLLAMA_MODEL=codellama
    ```

## Usage

1.  Start the server:
    ```bash
    python main.py
    ```
    *(Or `uvicorn main:app --reload`)*

2.  Open your browser to:
    **http://127.0.0.1:8000**

3.  Paste your Selenium Java code and click **Convert**.

## Features

*   **Secure**: Code never leaves your machine.
*   **Customizable**: Edit `tools/convert_code.py` to change the system prompt/rules.
*   **Modern UI**: Dark mode interface with syntax highlighting support (via textarea).
