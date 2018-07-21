FROM nginx:1.15-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.cache.conf /etc/nginx/conf.d/nginx.cache.conf
COPY proxy_params /etc/nginx/proxy_params

EXPOSE 82/tcp
EXPOSE 82/udp
