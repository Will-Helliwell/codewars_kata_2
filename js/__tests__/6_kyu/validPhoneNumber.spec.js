const validPhoneNumber = require("../../6_kyu/validPhoneNumber");

describe("validPhoneNumber function", () => {
  test("it returns false given any non-string", () => {
    expect(validPhoneNumber(123)).toEqual(false);
    expect(validPhoneNumber(true)).toEqual(false);
    expect(validPhoneNumber(12.2)).toEqual(false);
    expect(validPhoneNumber([])).toEqual(false);
    expect(validPhoneNumber({})).toEqual(false);
    expect(validPhoneNumber(undefined)).toEqual(false);
    expect(validPhoneNumber(NaN)).toEqual(false);
    expect(validPhoneNumber(null)).toEqual(false);
  });

  test("it returns true only for the correct string format", () => {
    // first section
    expect(validPhoneNumber("(123) 456-7890")).toEqual(true);
    expect(validPhoneNumber("(123( 456-7890")).toEqual(false);
    expect(validPhoneNumber("(1234) 456-7890")).toEqual(false);
    expect(validPhoneNumber("(12x) 456-7890")).toEqual(false);

    // single whitespace
    expect(validPhoneNumber("(123)456-7890")).toEqual(false);
  });
});
