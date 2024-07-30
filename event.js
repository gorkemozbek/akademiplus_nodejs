const events = require('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on('start', () => {
    console.log('started');
});

eventEmitter.on('end', () => {
    console.log('ended');
});

eventEmitter.emit('start');
eventEmitter.emit('end');

console.log('process finished');