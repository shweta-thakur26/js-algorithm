function findIntersection(arr1, arr2) {
    let i = 0;
    let j = 0;
    const result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            if (
                result.length === 0 ||
                result[result.length - 1] !== arr1[i]
            ) {
                result.push(arr1[i]);
            }
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
}

const arr1 = [1, 2, 2, 3, 4];
const arr2 = [2, 2, 4, 6];

console.log(findIntersection(arr1, arr2));