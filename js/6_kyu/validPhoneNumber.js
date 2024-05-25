function validPhoneNumber(phoneNumber) {
  if (typeof phoneNumber !== "string") {
    return false;
  }

  const splitOnSpaces = phoneNumber.split(" ");

  const firstSection = splitOnSpaces[0];
  if (!isFirstSectionValid(firstSection)) return false;

  // validate correctly spaced single whitespace
  if (phoneNumber[5] !== " ") return false;

  const secondSection = splitOnSpaces[1];
  if (!isSecondSectionValid(secondSection)) return false;

  return true;
}

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
  if (!isValidLengthNumber(firstSectionMiddleThreeChar, 3)) return false;

  return true;
}

function isSecondSectionValid(secondSection) {
// length and hyphen position
  if (secondSection.length !== 8) return false;
  if (secondSection[3] !== "-") return false;

  // first number
  const secondSectionSplitByHyphen = secondSection.split("-");
  const secondSectionFirstNumber = secondSectionSplitByHyphen[0];
  if (!isValidLengthNumber(secondSectionFirstNumber, 3)) return false;

  // second number
  const secondSectionSecondNumber = secondSectionSplitByHyphen[1];
  if (!isValidLengthNumber(secondSectionSecondNumber, 4)) return false;

  return true;
}

function isValidLengthNumber(number, numberLength) {
  if (number.length !== numberLength || !isNumeric(number)) return false;

  return true;
}

function isNumeric(value) {
  return /^\d+$/.test(value);
}

module.exports = validPhoneNumber;
