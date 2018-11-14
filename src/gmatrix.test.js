const matrix = require("./gmatrix");

const arrayMatrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

describe("toJSON", () => {
	const m = matrix(arrayMatrix);

	test("creates an object that matches the original array", () => {
		const json = m.toJSON();
		expect(json).toMatchObject(arrayMatrix);
	});
});