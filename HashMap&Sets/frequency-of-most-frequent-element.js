/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b);

  let left = 0;
  let sum = 0;
  let answer = 1;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    // Cost to make every element in the window equal to nums[right]
    while (nums[right] * (right - left + 1) - sum > k) {
      sum -= nums[left];
      left++;
    }

    answer = Math.max(answer, right - left + 1);
  }

  return answer;
};