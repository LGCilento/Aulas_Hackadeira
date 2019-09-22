var WebSocketServer = require('ws').Server;


function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

wss = new WebSocketServer({port: 8080,path: '/testing'});
wss.on('connection',function(ws){
    var interval = setInterval(function (){
        ws.send("data:" + randomInt(100,127) + "\n\n");
    },2000);
    console.log('new connection');
});