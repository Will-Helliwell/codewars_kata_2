function validPhoneNumber(phoneNumber){
    if (typeof(phoneNumber) !== 'string') {
        return false;
    }

    const splitOnSpaces = phoneNumber.split(" ");

    // valdiate first section
    const firstSection = splitOnSpaces[0];
    if(firstSection.length !== 5){
        return false;
    }

    const firstSectionFirstChar = firstSection[0];
    const firstSectionLastChar = firstSection[firstSection.length - 1];
    if(firstSectionFirstChar !== '(' || firstSectionLastChar !== ')') {
        return false;
    } 

    const firstSectionMiddleThreeChar = firstSection.slice(1,4);
    if (!isNumeric(firstSectionMiddleThreeChar)) {
        return false;
    }

    // validate correctly spaced single whitespace
     if (phoneNumber[5] !== ' ') return false;

    return true;


    function isNumeric(value) {
        return /^\d+$/.test(value);
    }
}

module.exports = validPhoneNumber;