function majorityElement(nums) {
  const count = new Map();

  for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1);

    if (count.get(num) > nums.length / 2) {
      return num;
    }
  }
}

module.exports = majorityElement;