function majorityElement(nums) {
    let candidate = null;
    let c = 0;

    for (const num of nums) {
        if (c === 0) {
            candidate = num;
        }

        if (num === candidate) {
            c++;
        } else {
            c--;
        }
    }

    return candidate;
}