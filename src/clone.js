const gmatrix = require("./gmatrix");

/**
 * Return a new gmatrix that's a copy of the given one
 * @param matrix
 * @returns {{toJSON, forEach, forEachElement, rotateLeft, rotateRight, rotate180, flipHorizontal, flipVertical}}
 */
const clone = matrix => gmatrix(matrix.toJSON());

module.exports = clone;