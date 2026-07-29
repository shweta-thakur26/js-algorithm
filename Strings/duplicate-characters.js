// duplicate-characters.js
function findDuplicateCharacters(str) {
  const charCount = {};
  const duplicates = [];

  for (const char of str) {
    if (char === " ") continue;

    charCount[char] = (charCount[char] || 0) + 1;

    if (charCount[char] === 2) {
      duplicates.push(char);
    }
  }

  return duplicates;
}

module.exports = findDuplicateCharacters;