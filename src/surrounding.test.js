const matrix = require("./gmatrix");

const arrayMatrix = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24]
];

describe("surrounding", () => {
  const a = matrix(arrayMatrix);

  test("creates a 3x3 submatrix of the elements around the given index", () => {
    const b = a.surrounding(12);
    expect(b.toJSON()).toMatchObject([[6, 7, 8], [11, 12, 13], [16, 17, 18]]);
  });

  test("fills out of bounds elements with undefined", () => {
    const topLeft = a.surrounding(0);
    expect(topLeft.toJSON()).toMatchObject([[undefined, undefined, undefined], [undefined, 0, 1], [undefined, 5, 6]]);

    const topRight = a.surrounding(4);
    expect(topRight.toJSON()).toMatchObject([[undefined, undefined, undefined], [3, 4, undefined], [8, 9, undefined]]);

    const bottomLeft = a.surrounding(20);
    expect(bottomLeft.toJSON()).toMatchObject([
      [undefined, 15, 16],
      [undefined, 20, 21],
      [undefined, undefined, undefined]
    ]);

    const bottomRight = a.surrounding(24);
    expect(bottomRight.toJSON()).toMatchObject([
      [18, 19, undefined],
      [23, 24, undefined],
      [undefined, undefined, undefined]
    ]);
  });
});
