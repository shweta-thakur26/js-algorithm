/**
 * Finds the longest palindromic substring in a given string.
 * @param {string} s
 * @returns {string}
 */
function longestPalindrome(s) {
  if (!s || s.length < 2) return s;

  let start = 0;
  let end = 0;

  const expandFromCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  for (let i = 0; i < s.length; i++) {
    const len1 = expandFromCenter(i, i);       // Odd-length palindrome
    const len2 = expandFromCenter(i, i + 1);   // Even-length palindrome
    const len = Math.max(len1, len2);

    if (len > end - start + 1) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}

// Example usage
console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // "bb"
console.log(longestPalindrome("racecar"));// "racecar"
console.log(longestPalindrome("a"));     // "a"
console.log(longestPalindrome("ac"));    // "a"