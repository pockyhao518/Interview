function getIdealNums(low, high) {
    // Write your code here
    let count = 0;
    let x = 0;
    let y = 0;
    let num = (3 ** x) * (5 ** y);
    while (num >= low && num <= high){
        
    }
    console.log(num)
    
}

console.log(getIdealNums(1,10)) // => 4



const rating = [1,3,6,6]

function minimizeBias(ratings) {
    // Write your code here
    let count = 0;
    let Ratings = [...ratings];
    while (Ratings.length > 0) {
        let rating = Ratings[0];
        let dif = Math.max(...Ratings);
        let result = [];
        for (let j = 1; j < Ratings.length; j++) {
            let pair = Ratings[j];
                if (Math.abs(rating - pair) < dif) {
                    dif = Math.abs(rating - pair);
                    result = [0, j]
                }
            }
        count += Math.abs(rating - Ratings[result[1]]);
        first = Ratings.slice(1, result[1])
        second = Ratings.slice(result[1] + 1)
        Ratings = first.concat(second)
        
    }
    return count
}
// console.log(minimizeBias(rating))


let name = 'a';
function foo(){
    name = 'b';
    return;
    function name(){}
}
foo()
// console.log(name)

// e = edges
// n = nodes

const countConnectedComponents = (edges) => {
    const obj = {};
    for (let edge of edges) {
        const [nodeA, nodeB] = edge;
        obj[nodeA] = nodeA;
        obj[nodeB] = nodeB;
    } // O(e)
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

    let captainCount = 0;
    for (let node in obj) {
        if (node === obj[node]) captainCount += 1;
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

console.log(numIslands(grid1));

const grid2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];
console.log(numIslands(grid2));