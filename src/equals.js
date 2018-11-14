/**
 * Checks if two matrices have equal values
 * @param matrix1
 * @param matrix2
 * @returns {boolean} true if equal
 */
const equals = (matrix1, matrix2) => {
	const json1 = matrix1.toJSON();
	const json2 = matrix2.toJSON();

	const rowCount = json1.length;

	// Check row length
	if (rowCount !== json2.length) {
		return false;
	}

	let equals = true;
	for (let r = 0; r < rowCount; r++) {
		const columnCount = json1[r].length;

		// Check column length
		if (columnCount !== json2[r].length) {
			equals = false;
			break;
		}

		for (let c = 0; c < columnCount; c++) {
			if (json1[r][c] !== json2[r][c]) {
				equals = false;
				break;
			}
		}
	}
	return equals;
};

module.exports = equals;