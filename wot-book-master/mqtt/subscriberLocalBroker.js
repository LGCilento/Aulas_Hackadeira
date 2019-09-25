const mqtt = require('mqtt')
const client = new mqtt.connect('mqtt://localhost')
//const client = mqtt.connect('mqtt://localhost')


client.subscribe('#') 

client.on('connect', () => {console.log('connected')})

client.on('message', (topic, message) => {console.log('recived message %s %s', topic, message)})

