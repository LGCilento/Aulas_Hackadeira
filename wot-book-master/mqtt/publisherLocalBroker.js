const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost')

var interval = setInterval(function (){ sendData1();sendData2();sendData3();} ,2000)

client.on('message',() => {console.log('message')})

function sendData1() {
    console.log('publishing')
    client.publish("sensores/tensao","Tensao:" + randomInt(100,127) + '\n\n')
    console.log('published')
}
function sendData2() {
    console.log('publishing')
    client.publish("sensores/temperatura","Temperatura:" + randomInt(20,25) + '\n\n')
    console.log('published')
}
function sendData3() {
    console.log('publishing')
    client.publish("sensores/umidade","Umidade:" + randomInt(20,25) + '\n\n')
    console.log('published')
}


function randomInt(low,high) {
    return Math.floor(Math.random()* (high - low) + low);
}