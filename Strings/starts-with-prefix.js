/**
 * Checks if a string starts with the given prefix.
 *
 * @param {string} str
 * @param {string} prefix
 * @returns {boolean}
 */
function startsWithPrefix(str, prefix) {
  return str.startsWith(prefix);
}

// Example usage
console.log(startsWithPrefix("JavaScript", "Java")); // true
console.log(startsWithPrefix("JavaScript", "Script")); // false