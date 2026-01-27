import os
import requests
import sys

# Load environment variables (simulate loading for this snippet or assume loaded)
# In production, use python-dotenv. For this atomic test, we read directly or use os.environ if set, 
# but here we'll read the .env file manually to avoid dependency issues if dotenv isn't installed yet.

def load_env():
    env_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), '.env')
    config = {}
    if os.path.exists(env_path):
        with open(env_path, 'r') as f:
            for line in f:
                if '=' in line:
                    key, value = line.strip().split('=', 1)
                    config[key] = value
    return config

def check_ollama():
    config = load_env()
    base_url = config.get('OLLAMA_BASE_URL', 'http://localhost:11434')
    model = config.get('OLLAMA_MODEL', 'codellama')
    
    print(f"Testing connection to {base_url} for model '{model}'...")

    try:
        # Check if Ollama is running
        resp = requests.get(f"{base_url}/api/tags")
        if resp.status_code == 200:
            models_data = resp.json()
            models = [m['name'] for m in models_data.get('models', [])]
            
            # Check if specific model exists (handling potential tag variations like :latest)
            model_exists = any(model in m for m in models)
            
            if model_exists:
                print(f"✅ Success: Ollama is reachable and model '{model}' is available.")
                
                # Test a quick generation
                print("Attempting a quick generation test...")
                gen_resp = requests.post(f"{base_url}/api/generate", json={
                    "model": model,
                    "prompt": "Print 'Hello' in Python",
                    "stream": False
                })
                if gen_resp.status_code == 200:
                    print(f"✅ Generation Test Passed. Response: {gen_resp.json().get('response', '').strip()}")
                else:
                    print(f"❌ Generation Test Failed: {gen_resp.text}")
                    sys.exit(1)
            else:
                print(f"❌ Error: Ollama is up, but model '{model}' was not found in: {models}")
                print(f"Please run 'ollama pull {model}' in your terminal.")
                sys.exit(1)
        else:
            print(f"❌ Error: Ollama API returned status {resp.status_code}")
            sys.exit(1)

    except Exception as e:
        print(f"❌ Connection Error: {str(e)}")
        print("Ensure Ollama is running (e.g., 'ollama serve').")
        sys.exit(1)

if __name__ == "__main__":
    check_ollama()
