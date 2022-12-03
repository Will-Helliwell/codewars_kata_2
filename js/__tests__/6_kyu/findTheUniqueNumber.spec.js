const findUniq = require('../../6_kyu/findTheUniqueNumber');

describe('findUniq function', () => {
    test('it returns correctly given an array of 3 numbers', () => {
         expect(findUniq([1,1,2])).toEqual(2);
         expect(findUniq([1,1,2,2,2,5,6,6,7,7,9,9,9,9])).toEqual(5);
    });
});