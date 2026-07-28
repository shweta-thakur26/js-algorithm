function countConsonants(str) {
  const matches = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
  return matches ? matches.length : 0;
}

module.exports = countConsonants;