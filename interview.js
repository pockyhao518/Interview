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