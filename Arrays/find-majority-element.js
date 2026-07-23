function majorityElement(arr) {
    let candidate = null;
    let count = 0;

    for (const num of arr) {
        if (count === 0) {
            candidate = num;
        }

        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}

const arr = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement(arr));