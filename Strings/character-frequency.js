/**
 * Counts the frequency of each character in a string.
 *
 * @param {string} str
 * @returns {Object}
 */
function characterFrequency(str) {
  const frequency = {};

  for (const char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  return frequency;
}

// Example usage
console.log(characterFrequency("hello"));
// { h: 1, e: 1, l: 2, o: 1 }

console.log(characterFrequency("programming"));
// { p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 }

module.exports = characterFrequency;