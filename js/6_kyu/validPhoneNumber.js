function validPhoneNumber(phoneNumber) {
  if (typeof phoneNumber !== "string") {
    return false;
  }

  const splitOnSpaces = phoneNumber.split(" ");

  // valdiate first section
  const firstSection = splitOnSpaces[0];

  if (!isFirstSectionValid(firstSection)) return false;

  // validate correctly spaced single whitespace
  if (phoneNumber[5] !== " ") return false;

  // validate second section
  const secondSection = splitOnSpaces[1];

  if (secondSection.length !== 8) return false;

  if (secondSection[3] !== "-") return false;

  const secondSectionSplitByHyphen = secondSection.split("-");
  const secondSectionFirstNumber = secondSectionSplitByHyphen[0];
  if (
    secondSectionFirstNumber.length !== 3 ||
    !isNumeric(secondSectionFirstNumber)
  )
    return false;

  const secondSectionSecondNumber = secondSectionSplitByHyphen[1];
  if (
    secondSectionSecondNumber.length !== 4 ||
    !isNumeric(secondSectionSecondNumber)
  )
    return false;

  return true;

  function isFirstSectionValid(firstSection) {
    // length
    if (firstSection.length !== 5) return false;

    // bracket position
    const firstSectionFirstChar = firstSection[0];
    const firstSectionLastChar = firstSection[firstSection.length - 1];
    if (firstSectionFirstChar !== "(" || firstSectionLastChar !== ")")
      return false;

    // middle number
    const firstSectionMiddleThreeChar = firstSection.slice(1, 4);
    if (firstSectionMiddleThreeChar.length !== 3 || !isNumeric(firstSectionMiddleThreeChar)) return false;

    return true;
  }

  function isNumeric(value) {
    return /^\d+$/.test(value);
  }
}

module.exports = validPhoneNumber;
