// Intro to method

const PERSON ={
    name: 'John',
    age: 31,
    sayHello: function(friend){console.log('Hello. ' + friend + ' My name is ' + this.name)}
}

// PERSON.sayHello('Brendan');
// PERSON.sayHello('Anna');
// PERSON.sayHello('Mike');

const substring = (s) => {
    let arr = [];
    for (let i = 0; i < s.length - 1; i++){
        for (let j = i + 1 ; j <= s.length; j++){
            arr.push(s.slice(i,j))
        }
    }
    return arr;
}

console.log(substring('101'))