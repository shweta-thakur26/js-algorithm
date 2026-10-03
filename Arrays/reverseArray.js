/**
 * Reverse an array without modifying the original array.
 *
 * @param {Array} arr - The input array.
 * @returns {Array} A new array containing the elements in reverse order.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function reverseArray(arr) {
    return [...arr].reverse();
}

// Example
const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(reverseArray(numbers));
// Output: [7, 6, 5, 4, 3, 2, 1]

console.log(numbers);
// Output: [1, 2, 3, 4, 5, 6, 7]

// Export for testing
module.exports = reverseArray;