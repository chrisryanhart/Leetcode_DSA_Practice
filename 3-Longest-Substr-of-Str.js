var lengthOfLongestSubstring = function(s) {
    // initialize obj to store char counts
    let chars = {};
    let left = 0;
    let right = 0;
    let maxLen = 0;
    // let currLen = 0;

    // traverse string completely
    while(right < s.length){
        let rightChar = s[right];

        // if char 0 or undefined, increase right only
        // increment chars by 1 if already present
        if(!chars[rightChar]){
            chars[rightChar] = 1;
        }else{
            chars[rightChar] ++;
        }
        // else if it is in map, increase the left
        while(chars[rightChar] > 1){
            // decrement char count
            // don't need duplicate char count to drop to zero; 2nd occurence will count as first
            let leftChar = s[left];
            chars[leftChar]--;

            // increment left
            left++;
        }

        // update the max
        maxLen = Math.max(maxLen, right-left+1);

        right++;
    }

    return maxLen;

};

// var lengthOfLongestSubstring = function(s) {
//     if(s.length === 0) return 0;
//     if(s.length ===1) return 1;

//     let currLen = 1;
//     let maxLen = currLen;
//     let lastUniqueIdx = 0;
//     let chars = {};

//     chars[s[0]] = 0;

//     // need obj with all chars 

//     // assum at least two
//     // loop through string
//     for(let i=1;i<s.length;i++){

//         // reset currLen to 1 if char found

//         // if char wasn't found yet
//         if(!chars[s[i]]){
//             // if char not found, add to the list
//             chars[s[i]] = i;

//             currLen ++;
            
//             // where do you track what the last char was
//         }else if(chars[i]){
//             // if char not unique
//             // if before the last unique
//             if(chars[i] > lastUniqueIdx){
//                 lastUniqueIdx = i;

//             }
//         }

//         // update the max length
//         if(currLen > maxLen){
//             maxLen = currLen;
//         }
//     }
// };


module.exports = lengthOfLongestSubstring;