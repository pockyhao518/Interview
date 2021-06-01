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

const getMaxLessThanK = (n, k) => {
    let result = 0;
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            if ((i ^ j) < k && (i ^ j) > result) {
                result = i ^ j
            }
        }
    }
    return result;
}

// console.log(getMaxLessThanK(132,107))

function toBiny(num) {
    let n = Math.floor(Math.log(num) / Math.log(2));
    let biny = '';
    if (num === 0){
        return '0'
    }
    while (num != 0) {
        if (num - (2 ** n) >= 0){
            biny += 1;
            num -= (2 ** n);
        }else{
            biny += 0;
        }
        n--;
    }
    return biny;
}

// console.log(toBiny(125))

const subset = (nums) => {
    if (nums.length === 0) {
        return [];
    }
    if (nums.length === 1) {
        return [[], nums]
    }
    let last = nums[nums.length - 1];
    let arr = subset(nums.slice(0, nums.length - 1));
    // let sub = subset(nums.slice(0, nums.length - 1));
    // sub.map(el => el.push(last))
    let sub = arr.map(el => el.concat([last]))
    return sub.concat(arr)
}

// console.log(subset([1,2]))

const getCharacters = (n) => 'abcdefghijklmnopqrstuvwxyz'.slice(0, n);

// n = length
// Time: O(n)
const makePalindrome = (length, numUniqueChars) => {
    const chars = getCharacters(numUniqueChars);

    let palindrome = length % 2 === 1 ? chars[0] : '';
    let charIdx = length % 2 === 1 ? 1 : 0;

    while (palindrome.length < length) {
        let char = chars[charIdx % chars.length];
        palindrome = char + palindrome + char;
        charIdx += 1
    }

    return palindrome;
};
