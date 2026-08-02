// character-occurrence.js

function characterOccurrence(str, char) {
  return [...str].filter((c) => c === char).length;
}

module.exports = characterOccurrence;