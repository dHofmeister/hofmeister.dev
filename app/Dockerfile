FROM ubuntu:22.04

ARG DEBIAN_FRONTEND=noninteractive

LABEL maintainer="Deniz Hofmeister"
LABEL description="Hofmeister.dev"

RUN apt-get update && apt-get install -y --no-install-recommends \
  wget \
  tar \
  xz-utils \
  git \
  ca-certificates \
  && apt-get autoremove -y \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

RUN wget https://nodejs.org/dist/v20.11.0/node-v20.11.0-linux-x64.tar.xz && \
  tar -xJf node-v20.11.0-linux-x64.tar.xz && \
  chmod +x node-v20.11.0-linux-x64/bin/node && \
  mv node-v20.11.0-linux-x64 /opt/node && \
  rm node-v20.11.0-linux-x64.tar.xz

ENV PATH="/opt/node/bin:${PATH}"

COPY . /opt/hofmeister
WORKDIR /opt/hofmeister
RUN npm install

CMD ["bash"]
