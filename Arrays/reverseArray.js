/**
 * Reverse an array without modifying the original array.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function reverseArray(arr) {
    return arr.toReversed();
}

// Example
const numbers = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers)); // [5, 4, 3, 2, 1]
console.log(numbers);               // [1, 2, 3, 4, 5] (original unchanged)

module.exports = reverseArray;