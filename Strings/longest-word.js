function findLongestWord(sentence) {
  return sentence
    .split(" ")
    .reduce((longest, current) =>
      current.length > longest.length ? current : longest
    );
}

// Example
console.log(findLongestWord("Find the longest word in this sentence"));
// Output: sentence