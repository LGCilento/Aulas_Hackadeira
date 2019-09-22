const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://broker.hivemq.com')


client.subscribe('sensores/tensao') 

client.on('connect', () => {console.log('connected')})

client.on('message', (topic, message) => {console.log('recived message %s %s', topic, message)})

