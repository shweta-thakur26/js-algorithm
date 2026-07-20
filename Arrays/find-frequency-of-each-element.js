function findFrequency(arr) {
    const frequency = new Map();

    for (const element of arr) {
        frequency.set(element, (frequency.get(element) || 0) + 1);
    }

    return frequency;
}

const arr = [1, 2, 2, 3, 1, 4, 2];

console.log(findFrequency(arr));