const findUniq = require('../../6_kyu/validPhoneNumber');

describe('validPhoneNumber function', () => {
    test('it returns false given any non-string', () => {
         expect(findUniq(123)).toEqual(false);
         expect(findUniq(true)).toEqual(false);
         expect(findUniq(12.2)).toEqual(false);
         expect(findUniq([])).toEqual(false);
         expect(findUniq({})).toEqual(false);
         expect(findUniq(undefined)).toEqual(false);
         expect(findUniq(NaN)).toEqual(false);
         expect(findUniq(null)).toEqual(false);
    });
});