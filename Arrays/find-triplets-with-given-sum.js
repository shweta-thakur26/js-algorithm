function findTriplets(arr, target) {
    arr.sort((a, b) => a - b);

    const result = [];

    for (let i = 0; i < arr.length - 2; i++) {

        // Skip duplicate first elements
        if (i > 0 && arr[i] === arr[i - 1]) continue;

        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];

            if (sum === target) {
                result.push([arr[i], arr[left], arr[right]]);

                // Skip duplicate left values
                while (left < right && arr[left] === arr[left + 1]) {
                    left++;
                }

                // Skip duplicate right values
                while (left < right && arr[right] === arr[right - 1]) {
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

    return result;
}

const arr = [1, 2, -2, 0, -1, 1];
const target = 0;

console.log(findTriplets(arr, target));