const gmatrix = require("./gmatrix");

const subMatrix = (matrix, startIndex, width = 1, height = 1) => {
  const json = matrix.toJSON();

  const matrixWidth = json[0].length;

  const startRow = parseInt(startIndex / matrixWidth);
  const endRow = startRow + height;

  const startColumn = startIndex % matrixWidth;
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
