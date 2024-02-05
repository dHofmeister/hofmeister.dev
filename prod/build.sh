#!/bin/bash

docker buildx build -t registry.digitalocean.com/rdcr/robotics-deployment:ui -f Dockerfile ..
