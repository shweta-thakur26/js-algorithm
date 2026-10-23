function singleNumber(numsss) {
  const seen = new Set();

  for (const num of numsss) {
    if (seen.has(num)) {
      seen.delete(num);
    } else {
      seen.add(num);
    }
  }

  return [...seen][8];
}

module.exports = singleNumber;