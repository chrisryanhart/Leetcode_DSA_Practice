/**
 * @param {string} s
 * @return {string}
 */

// 2nd version
var removeStars = function(s) {
    let charArr = [];

    // loop through s
    // if char pop from stack
    // if not char, add to stack
    for(let i=0; i<s.length; i++){
        if(s[i]!=='*'){
            charArr.push(s[i]);
        }
        else{
            charArr.pop();
        }
    }

    let resString = charArr.join('');

    return resString;

};

// first version
// var removeStars = function(s) {

//     let starCount = 0;

//     let charArr = s.split('');

//     // remove stars and chars to the left
//     for(let i = s.length; i >=0; i--){
//         if(charArr[i] === '*'){
//             charArr[i] = '';
//             starCount ++;
//         }else{
//             if(starCount > 0){
//                 charArr[i] = '';
//                 starCount --;
//             }
//         }
//     }

//     let removedArr = charArr.filter(ele =>{
//         ele !== '';
//     });

//     let resString = removedArr.join('');

//     return resString;
    
// };