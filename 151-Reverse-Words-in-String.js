/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // set pointers for start and end of words
    let start = s.length - 1;
    let end = s.length - 1;
    let wordsArr = [];

    // could also use ' ' to split the sentence into words
    // then reverse the array

    while(start >= 0){

        if(s[start] === ' ' && s[end] !== ' '){
            // start of a word detected
            let word = s.slice(start+1,end+1);
            wordsArr.push(word);
            end = start;
            end--;
            start--;
        }else if(s[start] === ' ' && s[end] === ' '){
            // if spaces for both pointers
            end--;
            start--;
        }else if(!s[start-1] && s[end] !== ' '){
            // check for end of a string
            let word = s.slice(start,end+1);
            wordsArr.push(word);
            start--;
        }else{
            start--;
        }

    }

    let res = wordsArr.join(' ');

    return res;
};

module.exports = reverseWords;