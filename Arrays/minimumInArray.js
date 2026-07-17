/**
 * Find the minimum element in an array.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function findMinimum(arr) {
    if (arr.length === 0) {
        return null;
    }

    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Example
const numbers = [12, 35, 7, 89, 23, 53];

console.log("Minimum Element:", findMinimum(numbers));

module.exports = findMinimum;