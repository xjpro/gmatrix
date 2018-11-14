const gmatrix = require("./gmatrix");

const subMatrix = (matrix, startPosition, width, height) => {
	const json = matrix.toJSON();

	const matrixWidth = json[0].length;

	const startRow = parseInt(startPosition / matrixWidth);

	let endRow;
	if (startRow + height > json.length) {
		// Restrict selection to within bounds of matrix
		endRow = json.length;
	}
	else {
		endRow = startRow + height;
	}

	const startColumn = startPosition % matrixWidth;

	let endColumn;
	if (startColumn + width > matrixWidth) {
		// Restrict selection to within bounds of matrix
		endColumn = matrixWidth;
	}
	else {
		endColumn = startColumn + width;
	}

	const subRows = [];
	for (let r = startRow; r < endRow; r++) {
		const subRow = [];
		for (let c = startColumn; c < endColumn; c++) {
			subRow.push(json[r][c]);
		}
		subRows.push(subRow);
	}
	return gmatrix(subRows);
};

module.exports = subMatrix;