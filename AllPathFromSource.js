const allPathsSourceTarget = (graph) => {
    const paths = _allPathsSourceTarget(graph);
    paths.forEach(path => path.reverse());
    return paths;
};

const _allPathsSourceTarget = (graph, node = 0, target = graph.length - 1) => {
    if (node === target) return [[target]];
    const neighbors = graph[node];

    const completePaths = [];
    for (let neighbor of neighbors) {
        const neighborPaths = _allPathsSourceTarget(graph, neighbor, target)
        completePaths.push(...neighborPaths);
    }

    completePaths.forEach(path => path.push(node));
    return completePaths;
};