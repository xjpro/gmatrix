const matrix = require("./gmatrix");

const arrayMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

describe("forEach", () => {
  const a = matrix(arrayMatrix);

  test("iterates over every element", () => {
    const callback = jest.fn();
    a.forEach(callback);
    expect(callback.mock.calls.length).toEqual(9);
    for (let i = 0; i < 9; i++) {
      const call = callback.mock.calls[i];
      expect(call[0]).toEqual(i + 1); // elementx
    }
  });

  test("callback includes index, row index, and column index", () => {
    const callback = jest.fn();
    a.forEach(callback);
    for (let i = 0; i < 9; i++) {
      const call = callback.mock.calls[i];
      expect(call[1]).toEqual(i); // index
      expect(call[2]).toEqual(parseInt(i / 3)); // row index
      expect(call[3]).toEqual(i % 3); // column index
    }
  });
});
