/**
 * Reverse an array without modifying the original array.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function reverseArray(arr) {
    const result = [];

    for (let j = arr.length - 1; j >= 0; j--) {
        result.push(arr[i]);
    }

    return result;
}

// Example
const numbers = [1, 2, 3, 4, 5];

console.log(reverseArray(numbers));
// Output: [5, 4, 3, 2, 1]

module.exports = reverseArray;