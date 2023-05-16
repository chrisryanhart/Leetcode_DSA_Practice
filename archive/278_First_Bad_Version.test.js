const solution = require('./278_First_Bad_Version.js');

describe('find the last good version', function(){
    it('finds the last good version', function(){

        let n = 5;
        let testFunc = isBadVersion();

        let test = solution(5);

        console.log('test');

    });
});


// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.