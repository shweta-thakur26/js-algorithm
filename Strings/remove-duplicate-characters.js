/**
 * Removes duplicate characters from a string while preserving order.
 *
 * @param {string} str
 * @returns {string}
 */
function removeDuplicateCharacters(str) {
  return [...new Set(str)].join("");
}

// Example usage
console.log(removeDuplicateCharacters("programming")); // "progamin"
console.log(removeDuplicateCharacters("hello"));       // "helo"
console.log(removeDuplicateCharacters("aabbcc"));      // "abc"

module.exports = removeDuplicateCharacters;