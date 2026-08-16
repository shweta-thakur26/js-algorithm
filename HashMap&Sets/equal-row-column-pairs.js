// equal-row-column-pairs.js

/**
 * Return the number of pairs (row, column) where
 * the row and column contain the same values in the same order.
 *
 * @param {number[][]} grid
 * @returns {number}
 */
function equalPairs(grid) {
  const n = grid.length;
  const rowMap = new Map();

  // Store each row as a string and count its occurrences.
  for (const row of grid) {
    const key = row.join(",");
    rowMap.set(key, (rowMap.get(key) || 0) + 1);
  }

  let count = 0;

  // Build each column and check whether it exists as a row.
  for (let col = 0; col < n; col++) {
    const column = [];

    for (let row = 0; row < n; row++) {
      column.push(grid[row][col]);
    }

    const key = column.join(",");
    count += rowMap.get(key) || 0;
  }

  return count;
}

module.exports = equalPairs;