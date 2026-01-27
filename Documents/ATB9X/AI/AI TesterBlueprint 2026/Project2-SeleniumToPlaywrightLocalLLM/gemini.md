# Project Constitution (Data & Rules)
## Data Schemas
### ConversionRequest
- `source_code` (string): The raw Selenium Java code input from the UI.
- `output_path` (string): The target directory path to save the file.
- `language` (enum): "typescript" | "javascript" (default: "typescript")

### ConversionResponse
- `original_code` (string): The input code.
- `converted_code` (string): The generated Playwright code.
- `file_path` (string): Absolute path where the file was saved.
- `status` (string): "success" | "error"
- `error_message` (string, optional): Detailed error if failed.

## Behavioral Rules
- **Async/Await**: Always use `async`/`await` patterns for Playwright interactions.
- **Page Object Model (POM)**: Structure the output using POM where applicable.
- **Library Mapping**:
    - `TestNG` annotations -> Playwright functionality (e.g., `test`, `beforeAll`, `afterAll`).
    - `Webdriver` actions -> Playwright `page` actions (e.g., `driver.findElement(By.id("x")).click()` -> `await page.locator('#x').click()`).
- **Scope**: Convert "everything" — setup, teardown, and test methods.


## Maintenance Log
- **2026-01-26**: Initial Release.
    - Connected to Ollama (`codellama`).
    - Implemented FastAPI backend.
    - Created Dark Mode UI.
    - Verified `tools/check_ollama.py`.

