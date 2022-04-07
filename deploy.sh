#!/bin/sh

echo "List of running containers"
docker ps
echo "Stopping running containers"
docker-compose stop
echo "Removing running containers"
docker-compose rm -f
echo "Pulling latest images"
docker-compose build
echo "Starting containers"
docker-compose -f docker-compose.yml up -d
echo "Deployment complete"