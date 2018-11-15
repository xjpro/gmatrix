const matrix = require("./gmatrix");

const a = matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

describe("clone", () => {
  test("creates a new matrix that matches the original", () => {
    const b = a.clone(a);
    expect(a === b).toEqual(false);
    expect(a).not.toBe(b);
    expect(a.equals(b)).toEqual(true);
  });
});
