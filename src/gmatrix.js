/**
 * Copy a 2 dimensional array
 * @param rows
 * @returns
 */
const copy = rows => [...rows.map(row => [...row])];

/**
 * Return a new gmatrix that's a copy of the given one
 * @param rows
 * @returns {{toJSON, forEach, forEachElement, rotateLeft, rotateRight, rotate180, flipHorizontal, flipVertical}}
 */
const clone = rows => gmatrix(copy(rows));

/**
 * Checks if two matrices have equal values
 * @param a
 * @param b
 * @returns {boolean} true if equal
 */
const equals = (a, b) => {
	const rowCount = a.length;

	// Check row length
	if (rowCount !== b.length) {
		return false;
	}

	let equals = true;
	for (let r = 0; r < rowCount; r++) {
		const columnCount = a[r].length;

		// Check column length
		if (columnCount !== b[r].length) {
			equals = false;
			break;
		}

		for (let c = 0; c < columnCount; c++) {
			if (a[r][c] !== b[r][c]) {
				equals = false;
				break;
			}
		}
	}
	return equals;
};

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

const gmatrix = (rows) => {
	if (!rows) {
		rows = [];
	}

	return {
		toJSON: () => copy(rows),
		equals: other => equals(rows, other.toJSON()),
		clone: () => clone(rows),
		forEach: fn => forEach(rows, fn),
		forEachElement: fn => forEachElement(rows, fn),
		rotateLeft: () => rotateLeft(rows),
		rotateRight: () => rotateRight(rows),
		rotate180: () => rotate180(rows),
		flipHorizontal: () => flipHorizontal(rows),
		flipVertical: () => flipVertical(rows)
	};
};

module.exports = gmatrix;