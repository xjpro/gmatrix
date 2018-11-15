const gmatrix = require("./gmatrix");

const subMatrix = (matrix, startPosition, width = 1, height = 1) => {
  const json = matrix.toJSON();

  const matrixWidth = json[0].length;

  const startRow = parseInt(startPosition / matrixWidth);
  const endRow = startRow + height;

  const startColumn = startPosition % matrixWidth;
  const endColumn = startColumn + width;

  const subRows = [];
  for (let r = startRow; r < endRow; r++) {
    const row = json[r];
    const subRow = [];
    for (let c = startColumn; c < endColumn; c++) {
      subRow.push(row ? row[c] : undefined);
    }
    subRows.push(subRow);
  }
  return gmatrix(subRows);
};

module.exports = subMatrix;
