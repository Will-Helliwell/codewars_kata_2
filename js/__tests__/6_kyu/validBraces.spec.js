const validBraces = require('../../6_kyu/validBraces');

describe('validBraces function', () => {
    test('returns true given single bracket pairs', () => {
         expect(validBraces('()')).toEqual(true);
         expect(validBraces('[]')).toEqual(true);
         expect(validBraces('{}')).toEqual(true);
    });
});