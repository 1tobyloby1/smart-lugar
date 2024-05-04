#!/bin/bash

# Get the IDs of the containers running an image with a name containing '1tobyloby1'
container_ids=$(docker ps -a -q -f ancestor=1tobyloby1)

# If any such containers were found, stop and remove them
if [ -n "$container_ids" ]; then
    docker stop $container_ids
    docker rm $container_ids
fi

# Pull the latest images from Docker Hub
docker pull 1tobyloby1/backend:latest
docker pull 1tobyloby1/frontend:latest

# Run the new images
docker run -d -p 3000:3000 --restart always 1tobyloby1/backend:latest
docker run -d -p 8080:80 --restart always 1tobyloby1/frontend:latest

# Remove old Docker images
docker image prune -f