const splitStrings = require('../../6_kyu/splitStrings');

describe('splitStrings function', () => {
    test('returns an empty array given an empty string', () => {
         expect(splitStrings('')).toEqual([]);
    });

    test('returns correctly given an even number of chars', () => {
         expect(splitStrings('ab')).toEqual(['ab']);
         expect(splitStrings('abcd')).toEqual(['ab', 'cd']);
         expect(splitStrings('abcdef')).toEqual(['ab', 'cd', 'ef']);
    });
});