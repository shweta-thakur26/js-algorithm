/**
 * Find the maximum element in an array.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function findMaximum(arr) {
    if (arr.length === 0) {
        return null;
    }

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

// Example
const numbers = [12, 45, 7, 89, 23, 56];

console.log("Maximum Element:", findMaximum(numbers));

module.exports = findMaximum;