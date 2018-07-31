# HTTP Caching Network Service (NS) for Open Baton and Docker compose

This repository contains four components:

* Simple NodeJS server, serving a video and index.html that are cacheable for 60 seconds
* Open Baton version of the Network Service
* Docker-compose version of the Network Service
* FoxyProxy configurations for Chrome and Firefox
* Open Baton Docker compose file made by Radoslav Vlaskovski on which the NS can be deployed 

### Deploying the NS on Open Baton

To deploy the NS. Go to openbaton-http-caching-ns/edge-computing-openbaton-ns/cache-tier and execute the following command in the command line:
```
docker build -t http-cache-tier .
```

Then go to openbaton-http-caching-ns/edge-computing-openbaton-ns/lb-tier and execute the following command:
```
docker build -t http-lb-tier .
```

Then the NS is ready to be deployed via Open Baton.