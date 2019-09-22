const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://broker.hivemq.com')

var interval = setInterval(function (){ sendData()} ,2000)

client.on('message',() => {console.log('message')})

function sendData() {
    console.log('publishing')
    client.publish("sensores/tensao","Tensao:" + randomInt(100,127) + '\n\n')
    console.log('published')
}

function randomInt(low,high) {
    return Math.floor(Math.random()* (high - low) + low);
}