/**
 * Iterate over rows in matrix
 * @param matrix
 * @param fn callback that will receive row and index of row
 */
const forEachRow = (matrix, fn) => {
  const json = matrix.toJSON();
  const rowCount = json.length;
  for (let r = 0; r < rowCount; r++) {
    const returnValue = fn(json[r], r);
    if (returnValue === false) {
      break;
    }
  }
};

module.exports = forEachRow;
