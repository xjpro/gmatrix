/**
 * Copy a 2 dimensional array
 * @param rows
 * @returns
 */
const copy = rows => [...rows.map(row => [...row])];

/**
 * Iterate over rows
 * @param rows
 * @param fn callback that will receive row and index of row
 */
const forEach = (rows, fn) => {
  const rowCount = rows.length;
  for (let r = 0; r < rowCount; r++) {
    const returnValue = fn(rows[r]);
    if (returnValue === false) {
      break;
    }
  }
};

/**
 * Iterate over elements
 * @param rows
 * @param fn callback that will receive element, row index of element, and column index of element
 */
const forEachElement = (rows, fn) => {
  const rowCount = rows.length;
  for (let r = 0; r < rowCount; r++) {
    const columnCount = rows[r].length;
    for (let c = 0; c < columnCount; c++) {
      const returnValue = fn(rows[r][c], r, c);
      if (returnValue === false) {
        break;
      }
    }
  }
};

/**
 * Return a new gmatrix rotated 90 degrees left from given one
 * Columns, in reverse order, become rows.
 * @param rows
 * @returns {{toJSON, rotateLeft, rotateRight, rotate180}}
 */
const rotateLeft = rows => {
  const rotated = [];
  const rowLastIndex = rows.length - 1;
  const colLastIndex = rows[0].length - 1;

  for (let c = colLastIndex; c >= 0; c--) {
    const rotatedRow = [];
    for (let r = 0; r <= rowLastIndex; r++) {
      rotatedRow.push(rows[r][c]);
    }
    rotated.push(rotatedRow);
  }

  return gmatrix(rotated);
};

/**
 * Return a new gmatrix rotated 90 degrees right from given one
 * Columns, in order but reversed by row, become rows.
 * @param rows
 * @returns {{toJSON, rotateLeft, rotateRight, rotate180}}
 */
const rotateRight = rows => {
  const rotated = [];
  const rowLastIndex = rows.length - 1;
  const colLastIndex = rows[0].length - 1;

  for (let c = 0; c <= colLastIndex; c++) {
    const rotatedRow = [];
    for (let r = rowLastIndex; r >= 0; r--) {
      rotatedRow.push(rows[r][c]);
    }
    rotated.push(rotatedRow);
  }

  return gmatrix(rotated);
};

/**
 * Return a new gmatrix rotated 180 degrees from given one
 * Reverse elements of all rows and the order of all rows
 * @param rows
 * @returns {{toJSON, rotateLeft, rotateRight, rotate180}}
 */
const rotate180 = rows => gmatrix([...rows.map(row => [...row].reverse())].reverse());

/**
 * Return a new gmatrix which is flipped over the horizontal axis from given one
 * Reverse the order of all rows
 * @param rows
 * @returns {{toJSON, rotateLeft, rotateRight, rotate180}}
 */
const flipHorizontal = rows => gmatrix([...rows.map(row => [...row])].reverse());

/**
 * Return a new gmatrix which is flipped over the vertical axis from the given one
 * Reverse the order of elements in all rows
 * @param rows
 * @returns {{toJSON, rotateLeft, rotateRight, rotate180}}
 */
const flipVertical = rows => gmatrix([...rows.map(row => [...row].reverse())]);

class GeometricMatrix {
  constructor(rows) {
    this.rows = rows;
  }

  toJSON() {
    return copy(this.rows);
  }

  equals(other) {
    return require("./equals")(this, other);
  }

  clone() {
    return require("./clone")(this);
  }

  subMatrix(startPosition, width, height) {
    return require("./subMatrix")(this, startPosition, width, height);
  }

  forEach(fn) {
    return forEach(this.rows, fn);
  }

  forEachElement(fn) {
    return forEachElement(this.rows, fn);
  }

  rotateLeft() {
    return rotateLeft(this.rows);
  }

  rotateRight() {
    return rotateRight(this.rows);
  }

  rotate180() {
    return rotate180(this.rows);
  }

  flipHorizontal() {
    return flipHorizontal(this.rows);
  }

  flipVertical() {
    return flipVertical(this.rows);
  }
}

const gmatrix = rows => new GeometricMatrix(rows);

module.exports = gmatrix;
