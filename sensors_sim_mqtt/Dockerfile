FROM node:14

WORKDIR /usr/src/sensors_sim_mqtt

RUN npm install mqtt express

COPY dummy_sensoring.js /usr/src/sensors_sim_mqtt
COPY package.js /usr/src/sensors_sim_mqtt
COPY package-lock.js /usr/src/sensors_sim_mqtt

CMD [ "node",  "dummy_sensoring.js"]