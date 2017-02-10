export WORKSPACE=/path/to/workspace/
export PROJECT=/path/to/workspace/angularjs-gestion-de-eventos/

docker run -d --restart=always --name angularjs-nginx -v $PROJECT:/usr/share/nginx/html:ro -p 80:80 nginx:1.9
