const matrix = require("./gmatrix");

const arrayMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

describe("toJSON", () => {
  const m = matrix(arrayMatrix);

  test("creates an object that matches the original array", () => {
    const json = m.toJSON();
    expect(json).toMatchObject(arrayMatrix);
  });
});

describe("width", () => {
  test("gives correct width for 3x3 matrix", () => {
    const m = matrix(arrayMatrix);
    expect(m.width()).toEqual(3);
  });

  test("gives correct width for 0x0 matrix", () => {
    const m = matrix([]);
    expect(m.width()).toEqual(0);
  });
});

describe("height", () => {
  test("gives correct height for 3x3 matrix", () => {
    const m = matrix(arrayMatrix);
    expect(m.height()).toEqual(3);
  });

  test("gives correct width for 0x0 matrix", () => {
    const m = matrix([]);
    expect(m.height()).toEqual(0);
  });
});
