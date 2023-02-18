function spinWords(string) {
  let wordArray = string.split(" ");
  let returnWordArray = [];
  wordArray.forEach((word) => {
    if (word.length >= 5) {
      returnWordArray.push(reverseWord(word));
    } else {
      returnWordArray.push(word);
    }
  });
  return returnWordArray.join(" ");

  function reverseWord(word) {
    let wordLength = word.length;
    let letterArray = word.split("");
    let reversedLetterArray = [];
    for (let index = 0; index < wordLength; index++) {
      reversedLetterArray.push(letterArray.pop());
    }
    return reversedLetterArray.join("");
  }
}