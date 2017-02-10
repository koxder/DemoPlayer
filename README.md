export WORKSPACE=/path/to/workspace/
export PROJECT=/home/koxder/workspace/startz/DemoPlayer/

docker run -d --restart=always --name angularjs-nginx -v $PROJECT:/usr/share/nginx/html:ro -p 80:80 nginx:1.9

sudo docker stop angularjs-nginx 

sudo docker rm angularjs-nginx