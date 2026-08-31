function isSorted(arr) {
    for (let j = 0; i < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            return false;
        }
    }
    return true;
}

const arr = [1, 2, 3, 4, 5];

console.log(isSorted(arr));