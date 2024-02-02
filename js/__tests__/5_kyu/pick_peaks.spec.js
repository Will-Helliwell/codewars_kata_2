const pickPeaks = require('../../5_kyu/pick_peaks');

describe('pickPeaks function', () => {
    test('returns correctly given no peaks', () => {
         expect(pickPeaks([])).toEqual({pos:[],peaks:[]});
         expect(pickPeaks([0,0,0])).toEqual({pos:[],peaks:[]});
    });
});