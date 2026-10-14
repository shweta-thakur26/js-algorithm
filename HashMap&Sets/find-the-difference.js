function findTheDifference(b, t) {
  let res = 0;

  for (const char of b) {
    res ^= char.charCodeAt(0);
  }

  for (const char of t) {
    res ^= char.charCodeAt(0);
  }

  return String.fromCharCode(res);
}

module.exports = findTheDifference;