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

describe("clone", () => {
	const m = matrix(arrayMatrix);

	test("creates a new matrix that matches the original", () => {
		const clone = m.clone();
		expect(clone === m).toEqual(false);
		expect(clone).not.toMatchObject(m);
		expect(clone.equals(m)).toEqual(true);
	});
});

describe("equals", () => {
	const a = matrix(arrayMatrix);

	test("two matrices with non equals values are not equal", () => {
		const b = matrix([
			[10, 11, 12],
			[13, 14, 15],
			[16, 17, 18]
		]);
		expect(a.equals(b)).toEqual(false);
	});

	test("matrices with different row lengths are not equal", () => {
		const b = matrix([
			[1, 2, 3, 4],
			[5, 6, 7, 8]
		]);
		expect(a.equals(b)).toEqual(false);
	});

	test("matrices with different column lengths are not equal", () => {
		const b = matrix([
			[1, 2],
			[3, 4]
		]);
		expect(a.equals(b)).toEqual(false);
	});

	test("two matrices with equal values are equal", () => {
		const b = matrix(arrayMatrix);
		expect(a.equals(b)).toEqual(true);
	});
});