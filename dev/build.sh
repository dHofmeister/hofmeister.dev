#!/bin/bash

cd "$(dirname "$0")"
../app/build.sh

docker build --build-arg PACKAGE="hofmeister:latest" -t hofmeister:dev -f Dockerfile .
