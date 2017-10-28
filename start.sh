#!/bin/bash
echo "Starting abs container..."
docker run -d \
    --name abs \
    --network apps-net \
    -p "9195:3000" \
    -e "NODE_ENV=production" \
    -e "VIRTUAL_HOST=abs.iulian.co.uk" \
    -e "VIRTUAL_PORT=3000" \
    -e "LETSENCRYPT_HOST=abs.iulian.co.uk" \
    -e "LETSENCRYPT_EMAIL=iulian@iulian.co.uk" \
    docker.iulian.co.uk/tools:latest
