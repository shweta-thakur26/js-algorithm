/**
 * Longest Subarray with Sum K
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function longestSubarrayWithSumK(arr, k) {
  const prefixSumMap = new Map();

  let sum = 0;
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    // If the entire subarray from 0 to i has sum k
    if (sum === k) {
      maxLength = i + 1;
    }

    // Check if there is a prefix sum such that
    // currentSum - prefixSum = k
    if (prefixSumMap.has(sum - k)) {
      const length = i - prefixSumMap.get(sum - k);
      maxLength = Math.max(maxLength, length);
    }

    // Store the first occurrence of the prefix sum
    if (!prefixSumMap.has(sum)) {
      prefixSumMap.set(sum, i);
    }
  }

  return maxLength;
}

// Example Usage
const arr = [10, 5, 2, 7, 1, 9];
const k = 15;

console.log("Longest Subarray Length:", longestSubarrayWithSumK(arr, k)); // 4