/*
Problem:
Given an integer array nums, return all the unique triplets
[nums[i], nums[j], nums[k]] such that:

nums[i] + nums[j] + nums[k] === 0

The solution must not contain duplicate triplets.

Example:
Input: [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
*/

function threeSum(nums) {
  const result = [];

  // Step 1: Sort the array
  nums.sort((a, b) => a - b);

  // Step 2: Fix one element and use two pointers
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicate values
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// Example
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));