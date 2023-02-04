function validBraces(braces) {
  let validBraces = ['()', '[]', '{}'];
  let unmatchedBraceCount = 0;

  let bracePairs = [];
  let bracesArray = braces.split("");

  // create array of brace pairs until not enough left to make a pair
  while(bracesArray.length > 1){
    let openingBrace = bracesArray.shift();
    let closingBrace = bracesArray.pop();
    let bracePair = openingBrace + closingBrace;
    bracePairs.push(bracePair);
  }

  // check if any brace pair is invalid
  bracePairs.forEach(bracePair => {
    if(!validBraces.includes(bracePair)){
      unmatchedBraceCount ++;
    }
  });

  return (unmatchedBraceCount > 0)? false : true;
}

module.exports = validBraces;
