/**
 * Compresses a string using character counts.
 * Example: "aaabbcc" -> "a3b2c2"
 *
 * @param {string} str
 * @returns {string}
 */
function compressString(str) {
  if (str.length === 0) return "";

  let compressed = "";
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      compressed += str[i - 1] + count;
      count = 1;
    }
  }

  return compressed;
}

// Example usage
console.log(compressString("aaabbcc"));     // "a3b2c2"
console.log(compressString("aabcccccaaa")); // "a2b1c5a3"
console.log(compressString("abcd"));        // "a1b1c1d1"
console.log(compressString(""));            // ""