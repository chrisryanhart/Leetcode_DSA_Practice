/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    // divide each word into their own 
    s = s.split(' ');


    for(let i=0; i<s.length; i++){
        let reversed = reverseWord(s[i]);
        s[i] = reversed;
    }

    return s.join(' ');
};

function reverseWord(word){
    let arr = word.split('');
    let left = 0;
    let right = word.length -1;

    while(left < right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left ++;
        right --;
    }

    return arr.join('');
}

module.exports = reverseWords;