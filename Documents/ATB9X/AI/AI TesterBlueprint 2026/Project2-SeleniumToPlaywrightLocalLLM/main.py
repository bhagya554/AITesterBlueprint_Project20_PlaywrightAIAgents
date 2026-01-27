from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import os
import sys

# Add project root to path to import tools
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from tools.convert_code import convert_selenium_to_playwright

app = FastAPI()

# Allow CORS for local testing
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ConversionRequest(BaseModel):
    source_code: str
    language: str = "typescript"

class ConversionResponse(BaseModel):
    converted_code: str
    status: str
    error: str = None

@app.post("/api/convert", response_model=ConversionResponse)
async def convert(request: ConversionRequest):
    try:
        # 1. Convert
        result_code = convert_selenium_to_playwright(request.source_code, request.language)
        
        # 2. Return
        return ConversionResponse(
            converted_code=result_code,
            status="success"
        )
    except Exception as e:
        return ConversionResponse(
            converted_code="",
            status="error",
            error=str(e)
        )

# Serve Frontend
# Ensure frontend directory exists
frontend_path = os.path.join(os.path.dirname(__file__), "frontend")
if not os.path.exists(frontend_path):
    os.makedirs(frontend_path)

app.mount("/", StaticFiles(directory=frontend_path, html=True), name="frontend")

if __name__ == "__main__":
    # Load .env variables locally
    from tools.check_ollama import load_env
    env_vars = load_env()
    for k, v in env_vars.items():
        os.environ[k] = v
        
    uvicorn.run(app, host="127.0.0.1", port=8000)
