function validBraces(braces) {
  let validBraces = ['()', '[]', '{}'];
  if (validBraces.includes(braces)) {
      return true;
  } else {
      return false;
  }
}

module.exports = validBraces;
