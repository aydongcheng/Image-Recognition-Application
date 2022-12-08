sudo apt-get install python3-pip
sudo apt-get install libjpeg-dev zlib1g-dev
pip3 install fastapi
pip3 install aiofiles
pip3 install torch==1.10.1+cpu torchvision==0.11.2+cpu -f https://download.pytorch.org/whl/torch_stable.html
pip3 install uvicorn==0.16.0
python3 app.py