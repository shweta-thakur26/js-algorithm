function findShortestWord(sentence) {
  return sentence
    .split(" ")
    .reduce((shortest, current) =>
      current.length < shortest.length ? current : shortest
    );
}

// Example
console.log(findShortestWord("Find the shortest word in this sentence"));
// Output: in