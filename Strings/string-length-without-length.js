function stringLength(str) {
  let count = 0;

  for (const _ of str) {
    count++;
  }

  return count;
}

module.exports = stringLength;