FROM nginx:1.15-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.cache.conf /etc/nginx/conf.d/nginx.cache.conf

EXPOSE 82/tcp
EXPOSE 82/udp

ENTRYPOINT echo $SERVER_HOSTNAME && echo $CACHE_HOSTNAME && sed -i "s|cache1|$SERVER_HOSTNAME|g" /etc/nginx/conf.d/nginx.cache.conf && nginx -g 'daemon off;'