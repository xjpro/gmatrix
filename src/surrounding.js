const gmatrix = require("./gmatrix");

const surrounding = (matrix, centerIndex) => {
  const json = matrix.toJSON();

  const matrixWidth = json[0].length;

  const startRow = parseInt(centerIndex / matrixWidth) - 1;
  const endRow = startRow + 3;

  const startColumn = (centerIndex % matrixWidth) - 1;
  const endColumn = startColumn + 3;

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

module.exports = surrounding;
