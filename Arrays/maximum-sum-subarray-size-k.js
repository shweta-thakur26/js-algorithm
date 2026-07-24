/**
 * Maximum Sum Subarray of Size K
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function maximumSumSubarray(arr, k) {
  if (k > arr.length) {
    return null;
  }

  // Calculate the sum of the first window
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // Slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

// Example Usage
const arr = [2, 1, 5, 1, 3, 2];
const k = 3;

console.log("Maximum Sum:", maximumSumSubarray(arr, k)); // 9