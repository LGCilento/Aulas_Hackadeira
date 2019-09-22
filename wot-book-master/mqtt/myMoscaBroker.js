var mosca = require('mosca')

var pubsubsettings = {
    //usando o ascoltatore
    type:  'mongo',
    url:   'mongodb://localhost:27017/mqtt',
    pubsubCollection:   'ascoltatori',
    mongo:  {}
};

var moscaSettings = {
    port: 1883,
    backend: pubsubsettings
};

var server = new mosca.Server(moscaSettngs);
server.on('ready', setup);

function setup(){
    console.log('Mosca server is up and running')
}

var message = {
    topic: '/hello/world',
    payload:   'Hello World!',
    qos:    0,
    retain: false
}

server.publish(message,function () {console,log('done!');});

server.on('published',function () { //Executado a cada mensagem recebida
    console.log('Published',packet);
    console.log('Client',client);
});

server.on('clientConnected',function (client) { // Executado toda vez que um cliente se conecta
    console.log('Client Connected:',client.id);    
});

server.on('clientDisconnected', function (client) {
    console.log('Client Disconnected:',client.id)    
});
