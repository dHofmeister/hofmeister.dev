#!/bin/bash

docker login registry.digitalocean.com
docker push registry.digitalocean.com/rdcr/robotics-deployment:ui
