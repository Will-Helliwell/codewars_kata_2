function validPhoneNumber(phoneNumber){
    if (typeof(phoneNumber) !== 'string') {
        return false;
    }
}

module.exports = validPhoneNumber;