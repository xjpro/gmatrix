/**
 * Map over elements in matrix
 * @param matrix
 * @param fn callback that will receive element, index of element, row index of element, and column index of element
 * @return Array 2d array of results from each callback
 */
const map = (matrix, fn) => {
  const rows = [];
  const json = matrix.toJSON();
  const rowCount = json.length;
  let index = 0;
  for (let r = 0; r < rowCount; r++) {
    const row = [];
    const columnCount = json[r].length;
    for (let c = 0; c < columnCount; c++) {
      row.push(fn(json[r][c], index++, r, c));
    }
    rows.push(row);
  }
  return rows;
};

module.exports = map;
