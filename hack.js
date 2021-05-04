function longestSubarray(arr) {
    // Write your code here
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let check = {}
        check[arr[i]] = 1;
        let prev = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            console.log(check)
            if (Math.abs(arr[j] - prev) < 2 && Object.keys(check).length < 3) {
                prev = arr[j];
                if (check[prev] === undefined) {
                    check[prev] = 1;
                } else {
                    check[prev] += 1;
                }
            } else {
                let temp = arr.slice(i, j)
                console.log(temp)
                console.log(j + '!')
                console.log(i + '@')
                if (temp.length > result.length) {
                    result = temp;
                }
                break;


            }
            if (j === arr.length - 1 && Object.keys(check).length < 3) {
                let temp = arr.slice(i, j + 1)
                if (temp.length > result.length) {
                    result = temp;
                }
            }
        }
    }
    if (result.length === 0 && arr.length !== 0) {
        result.push(1)
    }
    return result;
}

// const arr = [5,1,2,3,4,5]
// console.log(longestSubarray(arr))


function possibleChanges(usernames) {
    // Write your code here
    let result = [];
    const alp = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < usernames.length; i++) {
        let name = usernames[i];
        for (let j = 1; j < name.length; j++) {
            let prev = name[j - 1];
            let curr = name[j];
            console.log((prev))
            console.log((curr))
            if (alp.indexOf(curr) < alp.indexOf(prev)) {
                result.push('YES');
                break;
            }
            if (j === name.length - 1) {
                result.push('NO')
            }
        }
    }
    return result;
}

// const arra = ['hydra']
// console.log(possibleChanges(arra))

function interQuartile(values, freqs) {
    // Print your answer to 1 decimal place within this function
    let arr = [];
    for (let i = 0; i < values.length; i++) {
        let el = values[i];
        for (let j = 0; j < freqs[i]; j++) {
            arr.push(el)
        }
    }
    arr.sort(function (a, b) { return a - b })
    let left = arr.slice(0, Math.floor(arr.length / 2));
    let right = arr.slice(Math.ceil(arr.length / 2));
    const median = (array) => {
        let m = 0;
        if (array.length % 2 === 0) {
            m = array[array.length / 2 - 1] + array[array.length / 2]
            return Number((m / 2).toFixed(1));
        } else {
            m = array[Math.floor(array.length / 2)]
            return Number(m.toFixed(1));
        }
        
    }
    console.log(arr.length)
    console.log((median(right) - median(left)).toFixed(1))

}

// const v = [10, 40, 30, 50, 20, 10, 40, 30, 50, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 10, 40, 30, 50, 20, 10, 40, 30, 50]
// const f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 40, 30, 50, 20, 10, 40, 30, 50, 20]
// interQuartile(v,f)