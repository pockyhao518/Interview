// An example input could look like:
// ```
// [{name: 'Samuel', time: '05:42:14'}, {name: 'Fred', time: '05:12:53'}, {name: 'Cynthia', time: 'dnf'}]
// ```

// In this case, the output would be
//     ```
// Fred won by 0 hours, 29 minutes, and 21 seconds
// ```

// If Fred was the only one to finish and every other racer had a time of "dnf", return:
// ```
// Fred won by no contest
// ```

// Finally, if every racer provided in the input had a time of "dnf", return:
// ```
// There is no winner
// ```

const winner = (racertime) => {
    let temp = racertime[0];
    let lead = temp['time'].split(':').reduce((acc, time) => (60 * acc) + +time);
    let won = 0;
    for (let i = 0; i < racertime.length; i++){
        let racer = racertime[i];
        let second = undefined;
        if (racertime[i]['time'] !== 'dnf'){
            second = racer['time'].split(':').reduce((acc, time) => (60 * acc) + +time);
        }
        if (second && second < lead){
            won += lead - second;
            lead = second;
            temp = racer;
        }else if (second && lead === 'dnf'){
            lead = second;
            temp = racer;
        }
    }
    if (temp['time'] !== 'dnf' && won === 0){
        return temp['name'] + ' won by no contest';
    } else if (temp['time'] !== 'dnf' && won !== 0){
        let ss = won % 60;
        let mm = ((won - ss) % 3600) / 60;
        let hh = (won - ss - mm * 60) / 3600;
        return temp['name'] + ` won by ${hh} hours, ${mm} minutes, and ${ss} seconds`;
    }else{
        return 'There is no winner'
    }
}

const timer = [{ name: 'Samuel', time: '05:42:14' }, { name: 'Fred', time: '05:12:53' }, { name: 'Cynthia', time: 'dnf' }]
// console.log(winner(timer))


// mixPotions([
//     {
//         volume: 100,
//         ingredients: {
//             ingredient1: 50,
//             ingredient2: 20,
//             ingredientA: 500
//         }
//     },
//     {
//         volume: 300,
//         ingredients: {
//             ingredient1: 150,
//             ingredientA: 300,
//             ingredientB: 950
//         }
//     }
// ])
//     ```

// The above should return:
// ```javascript
// {
//     volume: 400,
//         ingredients: {
//             ingredient1: 125,
//             ingredient2: 5,
//             ingredientA: 350,
//             ingredientB: 712.5
//     }
// }


const mixPotions = (potions) => {
    let result = { volume: 0, ingredients: {}}
    for (let i = 0; i < potions.length; i++){
        let potion = potions[i];
        result['volume'] += potion['volume'];
        for (let ingredient in potion['ingredients'] ){
            if (result['ingredients'][ingredient] === undefined){
                result['ingredients'][ingredient] = potion['ingredients'][ingredient] * potion['volume']
            }else{
                result['ingredients'][ingredient] += potion['ingredients'][ingredient] * potion['volume']
            }
        }
    }
    for (let ingredient in result['ingredients']){
        result['ingredients'][ingredient] /= result['volume'];
    }
    return result;
}

const Potions = [
    {
        volume: 100,
        ingredients: {
            ingredient1: 50,
            ingredient2: 20,
            ingredientA: 500
        }
    },
    {
        volume: 300,
        ingredients: {
            ingredient1: 150,
            ingredientA: 300,
            ingredientB: 950
        }
    }
]
// console.log(mixPotions(Potions))


// `"steve,Andrew,michael,Yamuna,Harrison,Leslie\n3112,21352,123412,14134,1235,51325\n2,6,3,4,1,5"`

// which would represent the following data file:

// ```
// | steve | Andrew | michael | Yamuna | Harrison | Leslie |
// | 3112  | 21352  | 123412  | 14134  | 1235     | 51325  |
// | 2     | 6      | 3       | 4      | 1        | 5      |
// ```

// The output sorted file should look like this:

// `"Andrew,Harrison,Leslie,michael,steve,Yamuna\n21352,1235,51325,123412,3112,14134\n6,1,5,3,2,4"`

// which would represent the following sorted data:

// ```
// | Andrew | Harrison | Leslie | michael | steve | Yamuna |
// | 21352  | 1235     | 51325  | 123412  | 3112  | 14134  |
// | 6      | 1        | 5      | 3       | 2     | 4      |
// ```


const sortColumns = (string) => {
    let array = string.split('\n');
    let names = array[0].split(',');
    let data1 = array[1].split(',');
    let data2 = array[2].split(',');
    let obj = {}
    for (let i = 0; i < names.length; i++){
        obj[names[i]] = [data1[i],data2[i]]
    }
    names.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    let result = ['','','']
    for (let i = 0; i < names.length; i++){
        result[0] += names[i] + ',';
        result[1] += obj[names[i]][0] + ',';
        result[2] += obj[names[i]][1] + ',';
    }
    return result.join('\n');
}

const info = "steve,Andrew,michael,Yamuna,Harrison,Leslie\n3112,21352,123412,14134,1235,51325\n2,6,3,4,1,5"
// console.log(sortColumns(info))