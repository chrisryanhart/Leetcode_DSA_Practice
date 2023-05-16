const twoSum = require('./167-TwoSum2-SortedArr');

describe('must move all zeroes to the end', function(){
    it('moves numbers with a zero to the end', function(){
        let numbers = [2,7,11,15]
        let target = 9

        let res = twoSum(numbers,target);

        console.log('test');
        expect(res).toEqual([1,2]);
    });
    it('handles only one element', function(){
        let nums =[2,3,4];
        let target = 6;

        let res = twoSum(nums,target);

        expect(res).toEqual([1,3]);
    });
    it('handles ', function(){
        let nums =[2,3,4];
        let target = 6;

        let res = twoSum(nums,target);

        expect(res).toEqual([1,3]);
    });
});