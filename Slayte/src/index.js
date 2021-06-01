
// const summary = (arrayInput) => {
//   //TODO implement
//   let tot = 0;
//   for (let i = 0; i < arrayInput.length; i++){
//     tot += arrayInput[i];
//   }
//   return tot;
// }
// const result = summary([1,2,3,4,5]) // expected: 1+2+3+4+5
// document.getElementById("app").innerHTML=`
// ${result}
// `;

const mapFromArray = (arrayInput) => {
    //TODO implement
    // let obj = {};
    // for (let i = 0; i < arrayInput.length; i++){
    //   let info // definition
    //   info = arrayInput[i]; // not allocation, just a new pointer
    //   // { uuid:'abd', name:'ABC 123'}
    //   let key = info['uuid'];
    //   let value = info['name'];
    //   obj[key] = value;
    // }// no longer use after scope
    // return obj;

    // param 1: function (acc, ele, idx, arrayInput) {

    // }

    // param 2: initialValue
    const reducer = (acc, ele) => {
        return Object.assign(acc, { [ele.uuid]: ele.name })
    }
    return arrayInput.reduce(reducer, {})
    // {} is initial value for reduce function
    // the result is sorted cause Object.assign 
    // works in the order defined by 
    // [[OwnPropertyKeys]]
}

// iteration:   1   
// memory:      XXX 

// iteration:   2
// memory:      (___ XXX) 3

// Alternative:
// iteration:   2
// memory:     (XXX) 3

// char[] variable = malloc(size(char) * 5)
// char* variable2 = &variable
// Garbage Collection (mark & sweep)

const result2 = mapFromArray([
    { uuid: 'abd', name: 'ABC 123' },
    { uuid: 'asdf', name: '1k2lj3hkl12jh3' },
    { uuid: '123123', name: 'xzcvsadfasdfsdaf' },
])

document.getElementById("app").innerHTML = `
${JSON.stringify(result2, null, 3)}
=== {
abd: 'ABC 123',
asdf: '1k2lj3hkl12jh3',
123123: 'xzcvsadfasdfsdaf'
}
`;

