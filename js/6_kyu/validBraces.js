function validBraces(braces) {
  let validBraces = ['()', '[]', '{}'];
  return (validBraces.includes(braces)) ? true: false;
}

module.exports = validBraces;
