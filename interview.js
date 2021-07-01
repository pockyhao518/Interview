function sortRoman(names) {
    // Write your code here
    let obj = {}
    names = names.sort();
    for (let i = 0; i < names.length; i++){
        let el = names[i];
        let info = el.split(' ');
        let name = info[0];
        let num = info[1];
        if (obj[name] === undefined){
            obj[name] = [toNum(num)]
        }else{
            obj[name].push(toNum(num))
        }
    }
    let result = [];
    for (let key in obj){
        let arr = obj[key].sort(function (a, b) {return a - b;});
        for (let i = 0; i < arr.length; i++){
            result.push(key + ' ' + convertToRoman(arr[i]))
        }
    }
    return result;
}

const toNum = (string) => {
    if(string == null) return -1;
    let num = char_to_int(string.charAt(0));
    let pre, curr;

    for(var i = 1; i < string.length; i++){
        curr = char_to_int(string.charAt(i));
        pre = char_to_int(string.charAt(i-1));
        if(curr <= pre){
            num += curr;
        } else {
            num = num - pre*2 + curr;
        }
    }
    return num;
}

function char_to_int(c){
    switch (c){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        default: return -1;
    }
}

const convertToRoman = (num) => {
  const decimalValue = [50, 40, 10, 9, 5, 4, 1];
  const romanNumeral = [
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];
  let romanized = "";
  for (let i = 0; i < decimalValue.length; i++) {
    while (decimalValue[i] <= num) {
      romanized += romanNumeral[i];
      num -= decimalValue[i];
    }
  }
  return romanized;
};


// e = edges
// n = nodes

const countConnectedComponents = (edges) => {
    const obj = {};
    for (let edge of edges) {
        const [nodeA, nodeB] = edge;
        obj[nodeA] = nodeA;
        obj[nodeB] = nodeB;
    } // O(e)
    // console.log(obj)
    const union = (nodeA, nodeB) => {
        // Join the group that A is in with the group that B is in
        // find captainA
        // find captainB
        // make captainA follow captainB

        const captainA = find(nodeA);
        const captainB = find(nodeB);
        obj[captainA] = captainB;
    }; // O(n)
    const find = (node) => {
        if (node === obj[node]) return node;
        return find(obj[node]);
        // Give back the captain of the group node is in
        // via a depth first traversal
    };// O(n)
    for (let edge of edges) {
        union(...edge)
    }; // O(en)
    // console.log(obj)
    let captainCount = 0;
    for (let node in obj) {
        if (node === obj[node]) {
            captainCount += 1;
            // console.log(node)
        }
    } // O(n)
    return captainCount;
}; // O(en)


const edges = [
    ['a', 'c'],
    ['d', 'a'],
    ['a', 'b'],
    ['c', 'd'],
    ['y', 'x'],
    ['z', 'y'],
    ['p', 'q'],
    ['p', 'h'],
    ['p', 'i'],
    ['p', 'j'],
];

// console.log(countConnectedComponents(edges));

const numIslands = (grid) => {
    const obj = {};

    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid[0].length; c += 1) {
            if (grid[r][c] === '1') {
                const pos = r + ',' + c;
                obj[pos] = pos;
            }
        }
    }
    console.log(obj)
    const union = (nodeA, nodeB) => {
        const capA = find(nodeA);
        const capB = find(nodeB);
        obj[capB] = capA;
    };

    const find = (node) => {
        if (node === obj[node]) return node;
        return find(obj[node]);
    };

    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid[0].length; c += 1) {
            const deltas = [[0, 1], [0, -1], [1, 0], [-1, 0]];
            for (let delta of deltas) {
                const [dRow, dCol] = delta;
                const neighborRow = r + dRow;
                const neighborCol = c + dCol;
                const nRowInbounds = 0 <= neighborRow && neighborRow < grid.length;
                const nColInbounds = 0 <= neighborCol && neighborCol < grid[0].length;
                if (nRowInbounds && nColInbounds &&
                    grid[neighborRow][neighborCol] === '1' &&
                    grid[r][c] === '1') {
                    const posA = r + ',' + c;
                    const posB = neighborRow + ',' + neighborCol;
                    union(posA, posB);
                }
            }
        }
    }
    console.log(obj)
    let captainCount = 0;
    for (let node in obj) {
        if (node === obj[node]) captainCount += 1;
    }
    return captainCount;
};

const grid1 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
];

// console.log(numIslands(grid1));

const grid2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];
// console.log(numIslands(grid2));

// hello

// Input: 
//   path: '%USER%->%ROLE%/%ROOT%/desktop/%DATE%.txt'
//   tokens: { USER: 'azablan', DATE: '06-15-2021', ROLE: 'dev', ROOT: 'main/tmp' }
//
// Output: 'azablan->dev/main/tmp/desktop/06-15-2021.txt'

// n = length of the input s
// k = maximal length of any token value
// time: O(n*n)
// const replaceTokens = (s, tokens) => {
//   let output = s;
//   for (let key in tokens) { // n
//     const value = tokens[key];
//     output = output.split('%' + key + '%').join(value); // n
//   }
//   return output;
// };

// s = %x%%x%%x%%x%%x%%x%%x%%x%%x%
// tokens = {x: 'zzzzzzzzzzzzzzzzzzz...'}

// const out = replaceTokens(
//   '%USER%->%ROLE%/%ROOT%/desktop/%DATE%/%DATE%.txt',
//   { USER: 'azablan', DATE: '06-15-2021', ROLE: 'dev', ROOT: 'main/tmp' }
// );

// console.log(out)
// 'azablan->dev/main/tmp/desktop/06-15-2021/06-15-2021.txt'

// ANNE:
//  -loop thru all keys of the tokens obj
//     -for each key do a s.replace(token, value)

// KEVIN:
//  - parse out every token
//     -then replace each with token

// time: O(n*n*k)
// n = len of s
// k = len of the longest token value

const replaceTokens = (s, tokens) => {
    let output = [];
    let i = 0;
    while (i < s.length) { // n

        if (s[i] === '%') {
            const j = s.indexOf('%', i + 1); // n
            const key = s.slice(i + 1, j); //   n
            const value = tokens[key];
            output.push(value);
            i = j + 1;
        } else {
            // otherwise it is not a percent
            output.push(s[i]);
            i += 1;
        }
    }

    return output.join('');
};

// const replaceTokens  = (s, tokens) => {
//   const split = s.split("%")

//   for (let i = 0; i < split.length; i++) {
//     if (split[i] in tokens) {
//       split[i] = tokens[split[i]];
//     }
//   }

//   return split.join("");
// }

// const out = replaceTokens(
//   '%USER%->%ROLE%/%ROOT%desktop%DATE%/%desktop%.txt',
//   { USER: 'azablan', DATE: '06-15-2021', ROLE: 'dev', ROOT: 'main/tmp',
//     desktop: '!'
//   });

// 'azablan->dev/main/tmp/desktop/06-15-2021/!.txt'


// console.log(out);

// Input: 
//   path: '%USER%/%ROOT%/desktop/%DATE%.txt'
//   tokens: { 
//  USER: 'azablan->%ROLE%', 
//  DATE: '06-15-2021', 
//  ROLE: 'dev', 
//  ROOT: 'main/tmp',
//    A: 'one%B%%C%',
//    B: 'two',
//    C: 'three%D%',
//    D: 'LOL'
//   }
//
// Output: 'azablan->dev/main/tmp/desktop/06-15-2021.txt'
//
// 
// s: '%A%potato'
// out: 'onetwothreeLOLpotato'


// A -> B -> C -> D
const evaluateTokens = (tokens) => {
    const evaluated = {};
    for (let key in tokens) {
        const evaluatedToken = depthFirstEval(tokens, key);
        evaluated[key] = evaluatedToken;
    }
    return evaluated;
};


const depthFirstEval = (tokens, node) => {
    let value = tokens[node];
    let output = [];
    let i = 0;
    while (i < value.length) {

        if (value[i] === '%') { // NEIGHBOR
            const j = value.indexOf('%', i + 1);
            const neighbor = value.slice(i + 1, j);
            const neighborEval = depthFirstEval(tokens, neighbor);
            output.push(neighborEval);
            i = j + 1;
        } else {
            // otherwise it is not a percent
            output.push(value[i]);
            i += 1;
        }
    }

    const answer = output.join('');
    tokens[node] = answer;
    return answer
};

const replaceTokens = (s, tokens) => {
    let output = [];
    let i = 0;
    while (i < s.length) { // n

        if (s[i] === '%') {
            const j = s.indexOf('%', i + 1); // n
            const key = s.slice(i + 1, j); //   n
            const value = tokens[key];
            output.push(value);
            i = j + 1;
        } else {
            // otherwise it is not a percent
            output.push(s[i]);
            i += 1;
        }
    }

    return output.join('');
};

const replaceNestedTokens = (s, tokens) => {
    const evalTokens = evaluateTokens(tokens);
    return replaceTokens(s, evalTokens);
}

// Input: 
const s = '%USER%/%ROOT%/desktop/%DATE%/%A%.txt'
const tokens = {
    USER: 'azablan->%ROLE%',
    DATE: '06-15-2021',
    ROLE: 'dev',
    ROOT: 'main/tmp',
    A: 'one%B%%C%',
    B: 'two',
    C: 'three%D%',
    D: 'LOL'
};

console.log(replaceNestedTokens(s, tokens));


// const tokens = { 
//   A: 'one%B%',
//   B: 'two%C%',
//   C: 'three%D%',
//   D: 'end'
// };

// console.log(evaluateTokens(tokens));


var findPaths = function (m, n, maxMove, startRow, startColumn) {
    let count = 0;
    let pos = [[startRow, startColumn]]
    for (let i = 0; i < maxMove; i++) {
        let currentPos = [];
        let visted = {};
        while (pos.length > 0) {
            let point = pos.shift();
            if (visted[point] === undefined) {
                let [r, c] = point;
                let temp = 0;
                let arr = [];
                if (r + 1 < m && c < n) {
                    arr.push([r + 1, c])
                } else {
                    temp += 1
                }
                if (c - 1 >= 0 && r < m) {
                    arr.push([r, c - 1])
                } else {
                    temp += 1
                }
                if (c + 1 < n && r < m) {
                    arr.push([r, c + 1])
                } else {
                    temp += 1
                }
                if (r - 1 >= 0 && c < n) {
                    arr.push([r - 1, c])
                } else {
                    temp += 1
                }
                visted[point] = [temp, arr];
                count += temp;
            }else{
                count += visted[point][0]
                currentPos.concat(visted[point][1])
            }
        }
        pos = currentPos;
    }
    return count;
};

function Employee(id, importance, subordinates) {
    this.id = id;
    this.importance = importance;
    this.subordinates = subordinates;
}


// e = # employees
// Time: O(e)
// Space: O(e)

const GetImportance = (employees, id) => {
    const employeeMap = {};

    for (let employee of employees) {
        employeeMap[employee.id] = employee;
    }

    return importanceSum(employeeMap, id);
};

const importanceSum = (employeeMap, id) => {
    const rootEmployee = employeeMap[id];
    let totalImportance = rootEmployee.importance;
    for (let subordinateId of rootEmployee.subordinates) {
        totalImportance += importanceSum(employeeMap, subordinateId);
    }
    return totalImportance;
};
//target: b

      //      a
      //     / \
      //    2   c 
      //   / \ / \
      //  3  7 f g 
      // /\
      // 1 9

// # 850
// Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
// Output: 3
// Explanation:
// 1. The cars starting at 10 and 8 become a fleet, meeting each other at 12.
// 2. The car starting at 0 doesn't catch up to any other car, so it is a fleet by itself.
// 3. The cars starting at 5 and 3 become a fleet, meeting each other at 6.
// Note that no other cars meet these fleets before the destination, so the answer is 3.


// target = 12
//   CAR:      A  B   C   D    E
// position = [10,8,  0,  5,   3]
// speed =    [2, 4,  1,  1,   3]

// hour1 =    [12,12, 1,  6,   6]
// hour2 =    [X, X,  2,  7,   7]
// hour3 =    [X, X,  3,  8,   8]
// hour4 =    [X, X,  4,  9,   9]
// hour5 =    [X, X,  5,  10,  10]
// hour6 =    [X, X,  6,  11,  11]
// hour7 =    [X, X,  7,  12,  12]
// hour8 =    [X, X,  8,  X,   X]

// n = # cars
// t = target
// O(nlogn + t*n*?)

// const carFleet = (target, position, speed) => {
//     const cars = [];

//     for (let i = 0; i < position.length; i += 1) {
//       cars.push({
//         position: position[i],
//         speed: speed[i]
//       });
//     }

//     const sortedCars = cars.sort((car1, car2) => car1.position - car2.position); 

//     console.log(sortedCars);


//     let currentCars = sortedCars


//     let count = 0;
//     while(currentCars.length > 0) {
//       // move for 1 hr

//       for (let car of currentCars) {
//         car.position += car.speed;
//       }

//       // merge cars into same fleet // O(n)
//       let newCars = [];
//       let i = 0;
//       let j = 0;
//       while (j < currentCars.length) {
//         // if (currentCars[j].position === currentCars[i].position) {
//         if (currentCars[j].position <= currentCars[i].position) {
//           j += 1;
//         } else {
//           // const newCar = { 
//             // position: currentCars[i].position,  
//           //   speed: currentCars[j - 1].speed
//           // };
//           const newCar = { 
//             position: currentCars[j - 1].position,  
//             speed: currentCars[j - 1].speed
//           };
//           if (newCar.position < target) {
//             newCars.push(newCar);
//           } else {
//             count += 1;
//           }
//           i = j;
//         }
//       }
//       // [
//         // { position: 11, speed: 9 }, i 
//       //   { position: 9, speed: 3 }, 
//       //   { position: 19, speed: 2 }, j
//       // ]

//       // new : {pos: 9, speed: 3}
//       const newCar = { 
//         position: currentCars[i].position,  
//         speed: currentCars[j - 1].speed
//       };
//       if (newCar.position < target) {
//         newCars.push(newCar);
//       } else {
//         count += 1;
//       }
//       console.log(newCars);
//       currentCars = newCars;
//     }

//     return count;

// };


// console.log(carFleet(12,
//   [10,8,  0,  5,   3],
//   [2, 4,  1,  1,   3]
// )); // 3
