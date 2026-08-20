function findTheDifference(a, t) {
  let result = 0;

  for (const char of a) {
    result ^= char.charCodeAt(0);
  }

  for (const char of t) {
    result ^= char.charCodeAt(0);
  }

  return String.fromCharCode(result);
}

module.exports = findTheDifference;