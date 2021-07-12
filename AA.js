// Intro to method

const PERSON ={
    name: 'John',
    age: 31,
    sayHello: function(friend){console.log('Hello. ' + friend + ' My name is ' + this.name)}
}

PERSON.sayHello('Brendan');
PERSON.sayHello('Anna');
PERSON.sayHello('Mike');