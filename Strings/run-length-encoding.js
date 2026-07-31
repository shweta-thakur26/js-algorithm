/**
 * Encodes a string using Run-Length Encoding (RLE).
 * @param {string} str
 * @returns {string}
 */
function encode(str) {
  if (!str) return "";

  let result = "";
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += count + str[i - 1];
      count = 1;
    }
  }

  return result;
}

/**
 * Decodes a Run-Length Encoded string.
 * @param {string} str
 * @returns {string}
 */
function decode(str) {
  if (!str) return "";

  let result = "";
  let count = "";

  for (const char of str) {
    if (!isNaN(char)) {
      count += char;
    } else {
      result += char.repeat(Number(count || 1));
      count = "";
    }
  }

  return result;
}

// Example usage
console.log(encode("aaabbcdddd"));   // "3a2b1c4d"
console.log(decode("3a2b1c4d"));      // "aaabbcdddd"

console.log(encode("abcd"));          // "1a1b1c1d"
console.log(decode("1a1b1c1d"));      // "abcd"

console.log(encode(""));              // ""
console.log(decode(""));              // ""