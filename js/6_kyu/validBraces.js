function validBraces(braces) {
  let validBracePairs = ["()", "[]", "{}"];
  let bracePairs = [];
  let bracesArray = braces.split("");

  // create array of brace pairs until not enough left to make a pair
  while (bracesArray.length > 0) {
    let openingBrace = bracesArray.shift();
    let closingBrace = bracesArray.pop();
    let bracePair = openingBrace + closingBrace;
    bracePairs.push(bracePair);
  }

  return anyInvalidBracePairs(bracePairs, validBracePairs);

  /**
   * Checks if all supplied brace pairs are valid
   * @param array - an array of all brace pair strings to check
   * @param array - an array of all valid brace pair strings
   * @return boolean - true if all are valid, else false
   */
  function anyInvalidBracePairs(bracePairs, validBracePairs) {
    let unmatchedBraceCount = 0;
    bracePairs.forEach((bracePair) => {
      if (!validBracePairs.includes(bracePair)) {
        unmatchedBraceCount++;
      }
    });
    return unmatchedBraceCount > 0 ? false : true;
  }
}


module.exports = validBraces;
