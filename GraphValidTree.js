

// n nodes, n^2 edges
// n <= e

// n = # nodes
// e = # edges
// Time: O(n + e)
// Space: O(e)
const validTree = (n, edges) => {
    const visited = new Set();
    const graph = buildGraph(n, edges);
    const isValid = traverse(graph, 0, visited);
    return isValid && visited.size === n;
};


const traverse = (graph, node, visited) => {
    if (visited.has(node)) {
        return false;
    }

    visited.add(node);

    for (let neighbor of graph[node]) {
        graph[node].delete(neighbor);
        graph[neighbor].delete(node);
        if (traverse(graph, neighbor, visited) === false) {
            return false;
        }
    }

    return true;
};


const buildGraph = (n, edges) => {
    const graph = {};

    for (let i = 0; i < n; i += 1) {
        graph[i] = new Set();
    }

    for (let edge of edges) {
        const [a, b] = edge;
        graph[a].add(b);
        graph[b].add(a);
    }

    return graph;
};

// edgelist
const edges = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4]
];
const graph = buildGraph(5, edges);
console.log(graph);
// adj-list
// const adj = {
//   0: [2, 1, 3],
//   1: [4, 0],
//   2: [0],
//   3: [0],
//   4: [1]
// };

// delete 1-4 // O(n)