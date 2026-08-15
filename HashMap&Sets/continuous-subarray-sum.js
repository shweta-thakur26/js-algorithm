/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const remainderMap = new Map();
  remainderMap.set(0, -1);

  let prefixSum = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    const remainder = prefixSum % k;

    if (remainderMap.has(remainder)) {
      if (i - remainderMap.get(remainder) >= 2) {
        return true;
      }
    } else {
      remainderMap.set(remainder, i);
    }
  }

  return false;
};