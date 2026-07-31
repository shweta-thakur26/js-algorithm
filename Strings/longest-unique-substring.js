/**
 * Finds the longest substring without repeating characters.
 * @param {string} s
 * @returns {string}
 */
function longestUniqueSubstring(s) {
  let start = 0;
  let maxStart = 0;
  let maxLength = 0;

  const lastSeen = new Map();

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    if (lastSeen.has(char) && lastSeen.get(char) >= start) {
      start = lastSeen.get(char) + 1;
    }

    lastSeen.set(char, end);

    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      maxStart = start;
    }
  }

  return s.substring(maxStart, maxStart + maxLength);
}

// Example usage
console.log(longestUniqueSubstring("abcabcbb")); // "abc"
console.log(longestUniqueSubstring("bbbbb"));    // "b"
console.log(longestUniqueSubstring("pwwkew"));   // "wke"
console.log(longestUniqueSubstring(""));         // ""
console.log(longestUniqueSubstring("dvdf"));     // "vdf"