const validBraces = require('../../6_kyu/validBraces');

describe('validBraces function', () => {
    test('returns true given single bracket pairs', () => {
         expect(validBraces('()')).toEqual(true);
         expect(validBraces('[]')).toEqual(true);
         expect(validBraces('{}')).toEqual(true);
    });

    test('returns false 2 different brackets', () => {
        expect(validBraces('[}')).toEqual(false);
        expect(validBraces('{)')).toEqual(false);
        expect(validBraces('(]')).toEqual(false);
    });

    test('returns true given multiple correct brackets', () => {
        expect(validBraces('({})')).toEqual(true);
        expect(validBraces('(())')).toEqual(true);
        expect(validBraces('{[()]}')).toEqual(true);
    });

    test('returns false given a single bracket', () => {
        expect(validBraces('(')).toEqual(false);
        expect(validBraces('}')).toEqual(false);
        expect(validBraces(']')).toEqual(false);
    });
});