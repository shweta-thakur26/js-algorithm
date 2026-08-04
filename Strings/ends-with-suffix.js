/**
 * Checks if a string ends with the given suffix.
 *
 * @param {string} str
 * @param {string} suffix
 * @returns {boolean}
 */
function endsWithSuffix(str, suffix) {
  return str.endsWith(suffix);
}

// Example usage
console.log(endsWithSuffix("JavaScript", "Script")); // true
console.log(endsWithSuffix("JavaScript", "Java"));   // false