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

const arr = [5,1,2,3,4,5]
console.log(longestSubarray(arr))


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

const arra = ['hydra']
// console.log(possibleChanges(arra))