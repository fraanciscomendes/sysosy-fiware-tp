const express = require('express')
const app = express()
const port = 3023
//const cors = require('cors');

const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883');
//app.use(cors());
app.listen(port)

const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

var currentHumidity;
var currentTemperature;
var currentSoilMoisture;

client.on('connect', () => {
    console.log('Connected to MQTT broker');
});

client.on('error', (error) => {
    console.error('Connection error:', error);
});

// A cada 5 segundos "ler" dos sensores
setInterval(() => {
    currentSoilMoisture = getRandomValue(10, 60);
    currentTemperature = getRandomValue(15, 35);
    currentHumidity = getRandomValue(40, 80);
    
    client.publish('sensor/soil_moisture', `sm|${currentSoilMoisture}`);
    client.publish('sensor/temperature', `t|${currentTemperature}`);
    client.publish('sensor/humidity', `h|${currentHumidity}`);
}, 5000);

app.get('/humidity', (req, res) => {
    res.send({value: currentHumidity});
});

app.get('/temperature', (req, res) => {
    res.send({value: currentTemperature});
});

app.get('/soilmoisture', (req, res) => {
    res.send({value: currentSoilMoisture});
});