/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
  const count = new Map();
  const result = [];

  // Count frequencies in nums1
  for (const num of nums1) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  // Find common elements
  for (const num of nums2) {
    if (count.has(num) && count.get(num) > 0) {
      result.push(num);
      count.set(num, count.get(num) - 1);
    }
  }s

  return result;
}

// Example usage
console.log(intersect([1, 2, 2, 1], [2, 2]));       // [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]