/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  const firstIndex = new Map();
  firstIndex.set(0, -1);

  let balance = 0;
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    balance += nums[i] === 0 ? -1 : 1;

    if (firstIndex.has(balance)) {
      maxLength = Math.max(maxLength, i - firstIndex.get(balance));
    } else {
      firstIndex.set(balance, i);
    }
  }

  return maxLength;
};