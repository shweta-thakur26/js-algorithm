/*
Problem:
You are given an array height where each element represents the height
of a vertical line.

Find two lines that together with the x-axis form a container
that holds the maximum amount of water.

Example:
Input: [1,8,6,2,5,4,8,3,7]
Output: 49
*/

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    // Width between the two lines
    const width = right - left;

    // Height is determined by the shorter line
    const currentHeight = Math.min(height[left], height[right]);

    // Calculate current area
    const area = width * currentHeight;

    // Update maximum area
    maxWater = Math.max(maxWater, area);

    // Move the pointer with the smaller height
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

// Example
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height)); // 49