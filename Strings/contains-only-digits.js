// contains-only-digits.js

function containsOnlyDigits(str) {
  return /^\d+$/.test(str);
}

module.exports = containsOnlyDigits;