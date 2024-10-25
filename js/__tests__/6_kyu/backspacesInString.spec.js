const cleanString = require('../../6_kyu/backspacesInString');

describe('cleanString', () => {
    it('should return a string', () => {
        expect(typeof cleanString('')).toBe('string');
    });

    it('should return the correct string', () => {
        expect(cleanString('abc#d##c')).toBe('ac');
        expect(cleanString('abc##d######')).toBe('');
        expect(cleanString('#######')).toBe('');
        expect(cleanString('')).toBe('');
    });
});