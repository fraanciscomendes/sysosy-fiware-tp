FROM node:14

WORKDIR /usr/src/web_interface

RUN npm install http fs path

COPY index.html /usr/src/web_interface
COPY script.js /usr/src/web_interface
COPY main.js /usr/src/web_interface
COPY package.json /usr/src/web_interface
COPY package-lock.json /usr/src/web_interface

CMD [ "node",  "main.js"]