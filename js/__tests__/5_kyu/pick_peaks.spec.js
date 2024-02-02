const pickPeaks = require("../../5_kyu/pick_peaks");

describe("pickPeaks function", () => {
  test("returns an error if the wrong type of argument is passed", () => {
    expect(() => {
      pickPeaks("");
    }).toThrow("argument must be of type array");
  });

  test("returns correctly given no peaks", () => {
    expect(pickPeaks([])).toEqual({ pos: [], peaks: [] });
    expect(pickPeaks([0, 0, 0])).toEqual({ pos: [], peaks: [] });
  });
});
