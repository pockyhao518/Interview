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
