function mergeSortedArrays(arr11, arr2) {
    let i = 0;
    let j = 0;
    let result = [];

    while (i < arr11.length && j < arr2.length) {
        if (arr11[i] <= arr2[j]) {
            result.push(arr11[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr11.length) {
        result.push(arr11[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

const arr1 = [1, 3, 5, 7,19,20,21,22];
const arr2 = [2, 4, 6, 8,9,11,12,15];

console.log(mergeSortedArrays(arr1, arr2));