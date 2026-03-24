
const EventEmitter = require('events');


const eventEmitter = new EventEmitter();


const eventHandler = () => {
    console.log("Event detected! Callback function executed.");
};

eventEmitter.on('start', eventHandler);

console.log("Application started...");
console.log("Waiting for event...");

setTimeout(() => {
    eventEmitter.emit('start');
}, 3000);
