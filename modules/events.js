const EventEmitter = require('events');
const utils = require('util');

const myEmmiter = new EventEmitter();

//? 1. We can have multiple listiners for a single event
myEmmiter.on('someEvent', (message)=>{
    console.log(`First time : ${message}`);
});
myEmmiter.on('someEvent', (message, age)=>{
    console.log(`Second time : ${message} is ${age}`);
});

//? 2. We first listen to event then we emit it. The order matters, because if we call a on (listner) method after the emit method, then that listner will not be executed on the event
myEmmiter.emit('someEvent', 'the event was emmited!', 29);


const Person = function(name){
    this.name = name;
}
//! this is how we can inherit a property from diffrent constructor, in ES6 this is done using the extend keyword after the name of the class
utils.inherits(Person, EventEmitter);

const chintu = new Person('chintu');

console.log(chintu instanceof EventEmitter);

chintu.on('speak', (message)=>{
    console.log(`${chintu.name} said ${message}`);
});

chintu.emit('speak', `chin2's Event emmited!`); 