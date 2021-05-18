const minCostII = (costs) => {
    return recurse(costs, 0, null, {});
};

const recurse = (costs, house, lastColor, memo) => {
    const key = `${house},${lastColor}`;

    if (key in memo) return memo[key];

    if (house === costs.length) return 0;

    let minimum = Infinity;
    for (let color = 0; color < costs[house].length; color += 1) {
        if (color !== lastColor) {
            const attempt = costs[house][color] + recurse(costs, house + 1, color, memo);
            minimum = Math.min(attempt, minimum);
        }
    }

    memo[key] = minimum;
    return memo[key];
};

const costs = [
    [1, 5, 3], // 0
    [2, 9, 4]  // 1
];

console.log(minCostII(costs));