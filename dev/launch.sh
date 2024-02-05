#!/bin/bash

cd "$(dirname "$0")"

docker compose up -d && docker exec -it hofmeister-dev bash
