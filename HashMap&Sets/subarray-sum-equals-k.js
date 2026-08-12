/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySum(nums, k) {
  const prefixSums = new Map();
  prefixSums.set(0, 1);

  let sum = 0;
  let count = 0;

  for (const num of nums) {
    sum += num;

    if (prefixSums.has(sum - k)) {
      count += prefixSums.get(sum - k);
    }

    prefixSums.set(sum, (prefixSums.get(sum) || 0) + 1);
  }

  return count;
}

module.exports = subarraySum;