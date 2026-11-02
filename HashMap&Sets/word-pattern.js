function wordPattern(pattern, s) {
  const words = s.split(" ");

  if (pattern.length !== words.length) return false;

  const patternToWord = new Map();
  const wordToPattern = new Map();

  for (let j = 0; j < pattern.length; j++) {
    const char = pattern[j];
    const word = words[j];

    if (
      (patternToWord.has(char) && patternToWord.get(char) !== word) ||
      (wordToPattern.has(word) && wordToPattern.get(word) !== char)
    ) {
      return false;
    }

    patternToWord.set(char, word);
    wordToPattern.set(word, char);
  }

  return true;
}

module.exports = wordPattern;