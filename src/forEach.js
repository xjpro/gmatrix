/**
 * Iterate over elements in matrix
 * @param matrix
 * @param fn callback that will receive element, index of element, row index of element, and column index of element
 */
const forEach = (matrix, fn) => {
  const json = matrix.toJSON();
  const rowCount = json.length;
  let index = 0;
  for (let r = 0; r < rowCount; r++) {
    const columnCount = json[r].length;
    for (let c = 0; c < columnCount; c++) {
      const returnValue = fn(json[r][c], index++, r, c);
      if (returnValue === false) {
        break;
      }
    }
  }
};

module.exports = forEach;
