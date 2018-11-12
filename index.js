/**
 * Copy a 2 dimensional array
 * @param rows
 * @returns
 */
const copy = rows => [...rows.map(row => [...row])];

/**
 * Return a new matrix that's a copy of the given one
 * @param rows
 * @returns {{toJSON, forEach, forEachElement, rotateLeft, rotateRight, rotate180, flipHorizontal, flipVertical}}
 */
const clone = rows => matrix(copy(rows));

/**
 * Iterate over rows
 * @param rows
 * @param fn callback that will receive row and index of row
 */
const forEach = (rows, fn) => {
	rows.forEach((row, rowIndex) => {
		fn(row, rowIndex);
	});
};

/**
 * Iterate over elements
 * @param rows
 * @param fn callback that will receive element, row index of element, and column index of element
 */
const forEachElement = (rows, fn) => {
	rows.forEach((row, rowIndex) => {
		row.forEach((element, columIndex) => {
			fn(element, rowIndex, columIndex);
		})
	});
};

/**
 * Return a new matrix rotated 90 degrees left from given one
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

	return matrix(rotated);
};

/**
 * Return a new matrix rotated 90 degrees right from given one
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

	return matrix(rotated);
};

/**
 * Return a new matrix rotated 180 degrees from given one
 * Reverse elements of all rows and the order of all rows
 * @param rows
 * @returns {{toJSON, rotateLeft, rotateRight, rotate180}}
 */
const rotate180 = rows => matrix([...rows.map(row => [...row].reverse())].reverse());

/**
 * Return a new matrix which is flipped over the horizontal axis from given one
 * Reverse the order of all rows
 * @param rows
 * @returns {{toJSON, rotateLeft, rotateRight, rotate180}}
 */
const flipHorizontal = rows => matrix([...rows.map(row => [...row])].reverse());

/**
 * Return a new matrix which is flipped over the vertical axis from the given one
 * Reverse the order of elements in all rows
 * @param rows
 * @returns {{toJSON, rotateLeft, rotateRight, rotate180}}
 */
const flipVertical = rows => matrix([...rows.map(row => [...row].reverse())]);

const matrix = (rows) => {
	if (!rows) {
		rows = [];
	}

	return {
		toJSON: () => copy(rows),
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

module.exports = matrix;