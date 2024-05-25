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
    expect(validPhoneNumber("(123) 456-7890")).toEqual(true);

    // first section
    expect(validPhoneNumber("(123( 456-7890")).toEqual(false);
    expect(validPhoneNumber("(1234) 456-7890")).toEqual(false);
    expect(validPhoneNumber("(12x) 456-7890")).toEqual(false);

    // single whitespace
    expect(validPhoneNumber("(123)456-7890")).toEqual(false);

    // second section
    expect(validPhoneNumber("(123) 456-78901")).toEqual(false);
    expect(validPhoneNumber("(123) 456_7890")).toEqual(false);
    expect(validPhoneNumber("(123) 4567-7890")).toEqual(false);
    expect(validPhoneNumber("(123) 45q-7890")).toEqual(false);
    expect(validPhoneNumber("(123) 456-789z")).toEqual(false);
    expect(validPhoneNumber("(123) 456-78901")).toEqual(false);

    // extras
    expect(validPhoneNumber("(1111)555 2345")).toEqual(false);
    expect(validPhoneNumber("(098) 123 4567")).toEqual(false);
  });
});
