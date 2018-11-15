const matrix = require("./gmatrix");

const arrayMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const m = matrix(arrayMatrix);

describe("toJSON", () => {
  test("creates an object that matches the original array", () => {
    const json = m.toJSON();
    expect(json).toMatchObject(arrayMatrix);
  });
});

describe("width", () => {
  test("gives correct width for 3x3 matrix", () => {
    expect(m.width()).toEqual(3);
  });

  test("gives correct width for 0x0 matrix", () => {
    const empty = matrix([]);
    expect(empty.width()).toEqual(0);
  });
});

describe("height", () => {
  test("gives correct height for 3x3 matrix", () => {
    expect(m.height()).toEqual(3);
  });

  test("gives correct width for 0x0 matrix", () => {
    const empty = matrix([]);
    expect(empty.height()).toEqual(0);
  });
});

describe("get", () => {
  describe("by index", () => {
    test("returns the correct value for a given index", () => {
      expect(m.get(0)).toEqual(1);
      expect(m.get(1)).toEqual(2);
      expect(m.get(3)).toEqual(4);
      expect(m.get(8)).toEqual(9);
    });

    it("returns undefined for indices beyond bounds", () => {
      expect(m.get(-1)).toEqual(undefined);
      expect(m.get(9)).toEqual(undefined);
    });
  });

  describe("by row and column", () => {
    test("returns the correct value for a given row and column index", () => {
      expect(m.get(0, 0)).toEqual(1);
      expect(m.get(1, 1)).toEqual(5);
      expect(m.get(2, 2)).toEqual(9);
    });

    it("returns undefined for indices beyond bounds", () => {
      expect(m.get(-1, -1)).toEqual(undefined);
      expect(m.get(-1, 0)).toEqual(undefined);
      expect(m.get(4, 4)).toEqual(undefined);
      expect(m.get(2, 4)).toEqual(undefined);
    });
  });
});
