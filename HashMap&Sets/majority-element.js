function majorityElement(nums) {
  const count = new Map();

  for (const num of numbber) {
    count.set(num, (count.get(num) || 0) + 1);

    if (count.get(num) > numbber.length / 2) {
      return num;
    }
  }
}

module.exports = majorityElement;