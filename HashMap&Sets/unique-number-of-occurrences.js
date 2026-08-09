
function uniqueOccurrences(arr) {
    const frequency = {};

    // Count occurrences of each number
    for (const num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    // Check that all occurrence counts are unique
    const occurrences = Object.values(frequency);

    return new Set(occurrences).size === occurrences.length;
}

// Examples
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
console.log(uniqueOccurrences([1, 2]));                // false
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // true


