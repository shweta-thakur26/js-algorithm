function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();

    for (const num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }

    return [...duplicates];
}

const arr = [1, 2, 3, 2, 4, 5, 1];

console.log(findDuplicates(arr));