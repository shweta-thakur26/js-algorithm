/**
 * Checks if two strings are anagrams.
 *
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
function isAnagram(str1, str2) {
  const normalize = (str) =>
    str.toLowerCase().replace(/[^a-z0-9]/g, "").split("").sort().join("");

  return normalize(str1) === normalize(str2);
}

// Example usage
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("Dormitory", "Dirty room")); // true
console.log(isAnagram("hello", "world")); // false

module.exports = isAnagram;