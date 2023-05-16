const search = require('./704_Binary_search.js');

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
describe('finds target number', function(){
    it('finds the target value', function(){
        let nums = [-1,0,3,5,9,12];
        let target = 9;

        const result = search(nums,target);

        expect(result).toEqual(4);
    });
    it('not found returns -1', function(){
        let nums = [-1,0,3,5,9,12];
        let target = 2;

        const result = search(nums,target);

        expect(result).toEqual(-1);
    });
});