/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const indexMap = new Map();

  list1.forEach((restaurant, index) => {
    indexMap.set(restaurant, index);
  });

  let minSum = Infinity;
  const result = [];

  list2.forEach((restaurant, index) => {
    if (!indexMap.has(restaurant)) return;

    const indexSum = indexMap.get(restaurant) + index;

    if (indexSum < minSum) {
      minSum = indexSum;
      result.length = 0;
      result.push(restaurant);
    } else if (indexSum === minSum) {
      result.push(restaurant);
    }
  });

  return result;
};