/**
 * LeetCode 242. Valid Anagram
 * Approach: Hash Map (Character Frequency Count)
 * Time: O(n)
 * Space: O(1) // Fixed alphabet size (26 for lowercase English letters)
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const count = new Map();

  for (const char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!count.has(char)) {
      return false;
    }

    count.set(char, count.get(char) - 1);

    if (count.get(char) === 0) {
      count.delete(char);
    }
  }

  return count.size === 0;
}

// Example usage
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false