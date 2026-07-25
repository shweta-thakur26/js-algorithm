/*
Problem:
Given an array nums of n integers, return all the unique quadruplets
[nums[a], nums[b], nums[c], nums[d]] such that:

nums[a] + nums[b] + nums[c] + nums[d] === target

The solution must not contain duplicate quadruplets.

Example:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output:
[
  [-2,-1,1,2],
  [-2,0,0,2],
  [-1,0,0,1]
]
*/

function fourSum(nums, target) {
  const result = [];

  // Step 1: Sort the array
  nums.sort((a, b) => a - b);

  const n = nums.length;

  // Step 2: Fix the first two elements
  for (let i = 0; i < n - 3; i++) {
    // Skip duplicates for i
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < n - 2; j++) {
      // Skip duplicates for j
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1;
      let right = n - 1;

      // Step 3: Two pointers
      while (left < right) {
        const sum =
          nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([
            nums[i],
            nums[j],
            nums[left],
            nums[right],
          ]);

          // Skip duplicate values
          while (
            left < right &&
            nums[left] === nums[left + 1]
          ) {
            left++;
          }

          while (
            left < right &&
            nums[right] === nums[right - 1]
          ) {
            right--;
          }

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
}

// Example
const nums = [1, 0, -1, 0, -2, 2];
const target = 0;

console.log(fourSum(nums, target));