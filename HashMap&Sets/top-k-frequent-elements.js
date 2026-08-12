/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const frequency = new Map();

  for (const num of nums) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  const buckets = Array.from({ length: nums.length + 1 }, () => []);

  for (const [num, count] of frequency) {
    buckets[count].push(num);
  }

  const result = [];

  for (let count = buckets.length - 1; count >= 0 && result.length < k; count--) {
    result.push(...buckets[count]);
  }

  return result.slice(0, k);
}

module.exports = topKFrequent;