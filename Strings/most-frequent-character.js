/**
 * Finds the most frequent character in a string.
 *
 * @param {string} str
 * @returns {string|null}
 */
function mostFrequentCharacter(str) {
  if (str.length === 0) return null;

  const frequency = {};
  let maxChar = str[0];
  let maxCount = 0;

  for (const char of str) {
    frequency[char] = (frequency[char] || 0) + 1;

    if (frequency[char] > maxCount) {
      maxCount = frequency[char];
      maxChar = char;
    }
  }

  return maxChar;
}

// Example usage
console.log(mostFrequentCharacter("javascript")); // a
console.log(mostFrequentCharacter("mississippi")); // i