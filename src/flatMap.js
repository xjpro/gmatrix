/**
 * Map over elements in matrix
 * @param matrix
 * @param fn callback that will receive element, index of element, row index of element, and column index of element
 * @return Array the results from each callback
 */
const flatMap = (matrix, fn) => {
  const array = [];
  const json = matrix.toJSON();
  const rowCount = json.length;
  let index = 0;
  for (let r = 0; r < rowCount; r++) {
    const columnCount = json[r].length;
    for (let c = 0; c < columnCount; c++) {
      array.push(fn(json[r][c], index++, r, c));
    }
  }
  return array;
};

module.exports = flatMap;
