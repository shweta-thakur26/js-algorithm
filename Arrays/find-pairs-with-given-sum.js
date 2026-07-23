function findPairs(arr, target) {
    const seen = new Set();
    const result = [];

    for (const num of arr) {
        const complement = target - num;

        if (seen.has(complement)) {
            result.push([complement, num]);
        }

        seen.add(num);
    }

    return result;
}

const arr = [2, 7, 11, 15, 3, 6];
const target = 9;

console.log(findPairs(arr, target));