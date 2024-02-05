#!/bin/bash

cd "$(dirname "$0")"
docker build -t hofmeister:latest -f Dockerfile .
