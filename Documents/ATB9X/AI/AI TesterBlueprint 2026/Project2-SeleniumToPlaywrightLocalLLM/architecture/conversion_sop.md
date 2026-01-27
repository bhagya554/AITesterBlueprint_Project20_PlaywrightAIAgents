# SOP: Selenium to Playwright Conversion (SOP-001)

## Goal
Convert a given Selenium Java code snippet into a Playwright TypeScript/JavaScript file using a Local LLM, adhering to Page Object Model (POM) and async/await patterns.

## Input
- `source_code`: String (Java)
- `target_language`: String ("typescript" or "javascript")

## Process Flow
1.  **Analyze**: Identify TestNG annotations (`@Test`, `@BeforeClass`, etc.) and Webdriver calls.
2.  **Prompt Engineering**: Construct a prompt for the Local LLM that includes:
    - The source code.
    - Constraints: "Use POM", "Async/Await", "Convert specific TestNG to Playwright Test Runner syntax".
3.  **LLM Interaction**: Send payload to Local LLM (e.g., Ollama/Llama3 or similar).
4.  **Extraction**: Parse the LLM response to extract strictly the code block.
5.  **Refinement**: (Optional) Run a basic syntax check or regex replacement for common hallucinations.
6.  **Output**: Return the clean code string.

## Edge Cases
- **Missing Imports**: Ensure standard Playwright imports are added (`import { test, expect } from '@playwright/test';`).
- **Complex Locators**: Java `By.xpath` might need careful conversion to Playwright selectors.
- **Waits**: Convert `WebDriverWait` to `await expect(locator).toBeVisible()` or `await locator.waitFor()`.

## Output
- `converted_code`: String (TS/JS)
