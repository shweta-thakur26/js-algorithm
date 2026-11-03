function wordPattern(pattern, s) {
  const words = s.split(" ");

  if (pattern.length !== words.length) return false;

  const patternToWord = new Map();
  const wordToPattern = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

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