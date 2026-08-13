/**
 * @param {number[]} nums
 * @param {number} K
 * @return {number}
 */
function subarraySum(nums, K) {
  const prefixSums = new Map();
  prefixSums.set(0, 1);

  let sum = 0;
  let count = 0;

  for (const num of nums) {
    sum += num;

    if (prefixSums.has(sum - K)) {
      count += prefixSums.get(sum - K);
    }

    prefixSums.set(sum, (prefixSums.get(sum) || 0) + 1);
  }

  return count;
}

module.exports = subarraySum;