from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
import os
import aiofiles
import SqueezeNet

app = FastAPI()


@app.get('/', response_class=HTMLResponse)
async def root():
    return "<html> <body> <h1> It works! </h1> </body> </html>"


@app.post('/img')
async def uploadFile(inFile: UploadFile = File(...)):
    if inFile.content_type.startswith("image/"):
        outFile = 'tempFile'
        async with aiofiles.open(outFile, 'wb') as file:
            content = await inFile.read()
            await file.write(content)
        res = SqueezeNet.recognition_image(outFile)
        os.remove(outFile)
        return {"result": res.encode()}
    else:
        return {"result": "Not a valid image"}

if __name__ == "__main__":
    import uvicorn
    app.add_middleware(CORSMiddleware, allow_origins=['*'], allow_credentials=True, allow_methods=['*'], allow_headers=['*'])
    uvicorn.run(app, host="0.0.0.0", port=25123)
