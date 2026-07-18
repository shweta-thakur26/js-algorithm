function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
}

let nums = [1, 1, 2, 2, 3, 4, 4, 5];

let k = removeDuplicates(nums);

console.log(k); // 5
console.log(nums.slice(0, k)); // [1, 2, 3, 4, 5]