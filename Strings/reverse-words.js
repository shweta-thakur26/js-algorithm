// reverse-words.js
function reverseWords(str) {
  return str.trim().split(/\s+/).reverse().join(" ");
}

module.exports = reverseWords;