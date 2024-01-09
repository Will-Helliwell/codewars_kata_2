function validBraces(str) {
  const returnArr = [];
  const strLength = str.length;
  for (let i = 0; i < strLength; i++) {
    let newSubString = "";
    // if on an even char, add it and the preceding to the return array
    if ((i + 1) % 2 == 0) {
      newSubString = str[i - 1] + str[i];
      returnArr.push(newSubString);
      // if on the last char and it is odd, follow it by an underscore and add to the return array
    } else if (i == strLength - 1) {
      newSubString = str[i] + "_";
      returnArr.push(newSubString);
    }
  }
  return returnArr;
}

module.exports = validBraces;
