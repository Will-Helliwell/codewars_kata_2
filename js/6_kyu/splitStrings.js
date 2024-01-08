function validBraces(str) {
  const returnArr = [];
  const strLength = str.length;
  for (let i = 0; i < strLength; i++) {
    // if on an even char, add it and the one before to the return array
    if ((i+1) % 2 == 0) {
      let newSubString = str[i - 1] + str[i];
      returnArr.push(newSubString);
    }
  }
  return returnArr;
}

module.exports = validBraces;
