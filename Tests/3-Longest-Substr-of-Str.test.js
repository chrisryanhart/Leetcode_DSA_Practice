const lengthOfLongestSubstring = require('./3-Longest-Substr-of-Str');


describe('returns count of longest substr',function(){
    it('counts longest string',function(){
        let s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

        let res = lengthOfLongestSubstring(s);
        console.log(res);
    });

});