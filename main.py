from fastapi import FastAPI

app = FastAPI()

@app.get("/items")
def list_items():
    return {"message": "List items for: build me a test app"}
