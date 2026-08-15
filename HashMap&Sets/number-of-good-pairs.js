/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const frequency = new Map();
  let count = 0;

  for (const num of nums) {
    if (frequency.has(num)) {
      count += frequency.get(num);
    }

    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  return count;
};