/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let min = 1;
    let max = n;

    while(min < max){
        // take min point
        // min point will take the 2nd larger value if n is even
        let mid = Math.floor((max-min)/2) + min;

        let res = guess(mid);

        if(res === 0) return mid;

        if(res === -1){
            max = mid - 1;
        }else if(res === 1){
            min = mid + 1;
        }
    }
};