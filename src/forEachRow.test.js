const matrix = require("./gmatrix");

const arrayMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

describe("forEachRow", () => {
  const a = matrix(arrayMatrix);

  test("iterates over every row", () => {
    const callback = jest.fn();
    a.forEachRow(callback);
    expect(callback.mock.calls.length).toEqual(3);
    for (let i = 0; i < 3; i++) {
      const call = callback.mock.calls[i];
      expect(call[0]).toEqual(arrayMatrix[i]); // row
    }
  });

  test("callback includes row index", () => {
    const callback = jest.fn();
    a.forEachRow(callback);
    for (let i = 0; i < 3; i++) {
      const call = callback.mock.calls[i];
      expect(call[1]).toEqual(i); // index
    }
  });
});
