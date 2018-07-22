FROM node:8.1

RUN mkdir -p /origin
WORKDIR /origin
COPY . /origin
RUN npm install

# start app
CMD ["npm", "start"]

EXPOSE 4312/tcp
EXPOSE 4312/udp
