const events = require('events');
const utils = require('util');

const myEmmiter = new events.EventEmitter();


myEmmiter.on('someEvent', (message)=>{
    console.log(message);
});


myEmmiter.emit('someEvent', 'the event was emmited!');


const Person = function(name){
    this.name = name;
}
//! this is how we can inherit a property from diffrent constructor, in ES6 this is done using the extend keyword after the name of the class
utils.inherits(Person, events.EventEmitter);

const chintu = new Person('chintu');

console.log(chintu instanceof events.EventEmitter);

chintu.on('speak', (message)=>{
    console.log(`${chintu.name} said ${message}`);
});

chintu.emit('speak', `chin2's Event emmited!`); 