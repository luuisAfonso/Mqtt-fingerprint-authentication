import mqtt from 'mqtt';

const client = mqtt.connect('mqtt://localhost:1883');

client.on('connect', () => {
    console.log('Client successefuly connected! :D');
    
    client.subscribe('authentication', (err) => {
        if(err) {
            throw new Error('Unable to subscribe to authentication' + err.message);
        }
    });
});

client.on('error', (err) =>{
    console.log(err);
});

for(let i = 0; i < 200; i++) {
    setTimeout(() => {
        client.publish('authentication', JSON.stringify({
            success: true,
            name: 'Luis Afonso',
            id: 1,
            time: Date.now(),
            err: null,
        }));
    }, 1000 * i * Math.random());
    setTimeout(() => {
        client.end();
    }, 1000 * 15);
}

client.on('message', (topic, message) => {
    const response = JSON.parse(message.toString());
    console.log('======================================');
    console.log('User name: ' +  response.name);
    console.log('User id: ' +  response.id);
    console.log('Logged at: ' +  new Date(response.time).toLocaleString());
    console.log('======================================');
    console.log('\n\n\n')
});

