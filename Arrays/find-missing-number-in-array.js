function findMissingNumber(arr) {
    const n = arr.length;

    let xor = 0;

    for (let i = 0; i <= n; i++) {
        xor ^= i;
    }

    for (let num of arr) {
        xor ^= num;
    }

    return xor;
}

console.log(findMissingNumber([3, 0, 1]));