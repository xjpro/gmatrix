const matrix = require("./gmatrix");

const arrayMatrix = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24]
];

describe("subMatrix", () => {
  const a = matrix(arrayMatrix);

  test("creates a submatrix from the center of an existing matrix", () => {
    const b = a.subMatrix(6, 3, 3);
    expect(b.toJSON()).toMatchObject([[6, 7, 8], [11, 12, 13], [16, 17, 18]]);
  });

  test("creates a submatrix from the beginning of an existing matrix", () => {
    const b = a.subMatrix(0, 3, 3);
    expect(b.toJSON()).toMatchObject([[0, 1, 2], [5, 6, 7], [10, 11, 12]]);
  });

  test("creates a submatrix from the end of an existing matrix", () => {
    const b = a.subMatrix(12, 3, 3);
    expect(b.toJSON()).toMatchObject([[12, 13, 14], [17, 18, 19], [22, 23, 24]]);
  });

  test("sets values outside bounds of matrix height to undefined", () => {
    const b = a.subMatrix(16, 3, 3);
    expect(b.toJSON()).toMatchObject([[16, 17, 18], [21, 22, 23], [undefined, undefined, undefined]]);
  });

  test("sets values outside bounds of matrix width to undefined", () => {
    const b = a.subMatrix(8, 3, 3);
    expect(b.toJSON()).toMatchObject([[8, 9, undefined], [13, 14, undefined], [18, 19, undefined]]);
  });

  test("can create a 1x1 matrix", () => {
    const b = a.subMatrix(7, 1, 1);
    expect(b.toJSON()).toMatchObject([[7]]);
  });

  test("uses 1 for default height", () => {
    const b = a.subMatrix(7, 2);
    expect(b.toJSON()).toMatchObject([[7, 8]]);
  });

  test("uses 1 for default width", () => {
    const b = a.subMatrix(7);
    expect(b.toJSON()).toMatchObject([[7]]);
  });
});
