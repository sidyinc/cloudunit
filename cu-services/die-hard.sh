#!/bin/bash

docker rm -vf $(docker ps -aq)
docker volume rm -f $(docker volume ls -q)
docker rmi -f $(docker images -q)

