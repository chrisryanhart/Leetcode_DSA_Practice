const reverseWords = require('./557-Reverse-Words-in-Sentence');

describe('must move all zeroes to the end', function(){
    it('moves numbers with a zero to the end', function(){
        let s = "Let's take LeetCode contest"

        let res = reverseWords(s);

        console.log('test');
        expect(res).toEqual([1,2]);
    });
    it('handles only one element', function(){
        let nums =[2,3,4];
        let target = 6;

        let res = twoSum(nums,target);

        expect(res).toEqual([1,3]);
    });
});