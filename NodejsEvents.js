const EventEmitter = require('events');

class MyEmmitter extends EventEmitter {}

const myEmmitter= new MyEmmitter();

myEmmitter.on("Waterfull", ()=>{
    console.log("The tank is full, please turn off the motor");

    setTimeout(()=>{
        console.log("Turn off the motor now!");}, 3000);
});

console.log("The script is running");
myEmmitter.emit("Waterfull");
console.log("The script is still running");