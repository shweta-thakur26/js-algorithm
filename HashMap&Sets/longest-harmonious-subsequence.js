// feat: solve longest harmonious subsequence

function findLHS(nums) {
  const frequency = new Map();

  for (const num of nums) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  let maxLength = 0;

  for (const [num, count] of frequency) {
    if (frequency.has(num + 1)) {
      maxLength = Math.max(maxLength, count + frequency.get(num + 1));
    }
  }

  return maxLength;
}

// Example usage
console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])); // 5
console.log(findLHS([1, 2, 3, 4])); // 2
console.log(findLHS([1, 1, 1, 1])); // 0