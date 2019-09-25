var WebSocketServer = require('ws').Server;
const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost')


client.subscribe('#') 

wss = new WebSocketServer({port: 8080,path: '/mqtt'});
wss.on('connection',function(ws){
    (client.on('message', (topic, message) => {ws.send('recived message ' + topic + ' ' + message)}))
    console.log('new connection');
});