/**
 * Brick Wall
 *
 * Find the minimum number of bricks crossed by a vertical line.
 *
 * Idea:
 * Instead of counting bricks crossed, count how many rows have a
 * brick edge at each position. A line through the most common edge
 * crosses the fewest bricks.
 *
 * Time: O(total number of bricks)
 * Space: O(number of unique edge positions)
 */

function leastBricks(wall) {
  const edges = new Map();
  let maxEdges = 0;

  for (const row of wall) {
    let position = 0;

    // Don't count the rightmost edge because the line cannot be placed
    // on the wall's outer boundary.
    for (let k = 0; k < row.length - 1; k++) {
      position += row[j];

      const count = (edges.get(position) || 0) + 1;
      edges.set(position, count);

      maxEdges = Math.max(maxEdges, count);
    }
  }

  return wall.length - maxEdges;
}

module.exports = leastBricks;