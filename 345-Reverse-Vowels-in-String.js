/**
 * @param {string} s
 * @return {string}
 */
// var reverseVowels = function(s) {
//     let charArr = s.split('');

//     let vowels = new Set();
//     vowels.add('a');
//     vowels.add('e');
//     vowels.add('i');
//     vowels.add('o');
//     vowels.add('u');
//     vowels.add('A');
//     vowels.add('E');
//     vowels.add('I');
//     vowels.add('O');
//     vowels.add('U');

//     // find location of all vowels
//     for(let i=0; i<charArr.length; i++){
//         if(vowels.has(charArr[i])){
//             vowelIndex.push(i);
//         }
//     }

//     let leftIdx = 0;
//     let rightIdx = vowelIndex.length -1;

//     // reverse vowels in place
//     while(leftIdx < rightIdx){
//         let temp = charArr[vowelIndex[rightIdx]];
//         charArr[vowelIndex[rightIdx]] = charArr[vowelIndex[leftIdx]];
//         charArr[vowelIndex[leftIdx]] = temp;

//         leftIdx++;
//         rightIdx--;
//     }

//     // join the res array
//     let res = charArr.join('');

//     return res;
// };

var reverseVowels = function(s) {
    let charArr = s.split('');

    let vowels = new Set();
    vowels.add('a');
    vowels.add('e');
    vowels.add('i');
    vowels.add('o');
    vowels.add('u');
    vowels.add('A');
    vowels.add('E');
    vowels.add('I');
    vowels.add('O');
    vowels.add('U');


    let leftIdx = 0;
    let rightIdx = s.length -1;

    while(leftIdx < rightIdx){
        let foundLeft = false;
        let foundRight = false;

        // have to be able to increment 
        while(!foundLeft && leftIdx < rightIdx){
            if(vowels.has(charArr[leftIdx])){
                foundLeft = true;
            }else{
                leftIdx++;
            }
        }

        while(!foundRight && rightIdx > leftIdx){
            if(vowels.has(charArr[rightIdx])){
                foundLeft = true;
            }else{
                rightIdx--;
            }
        }

        if(foundLeft && foundRight && leftIdx < rightIdx){
            let temp = charArr[rightIdx];
            charArr[rightIdx] = charArr[leftIdx];
            charArr[leftIdx] = temp;

            rightIdx --;
            leftIdx++;
        }
    }

    let res = charArr.join('');

    return res;


};