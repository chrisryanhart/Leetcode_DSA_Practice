/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
*/

// 2nd attempt
// var checkInclusion = function(s1, s2) {
//     let left = 0;
//     let right = 0;
//     const charObj = {};

//     // map charObj
//     for(const char of s1){
//         if(!charObj[char]){
//             charObj[char] = 1;
//         }else{
//             charObj[char]++;
//         }
//     }

//     while(right < s2.length){
//         let rightChar = s2[right];

//         // if char found in map
//         if(charObj[rightChar]){
//             charObj[rightChar]--;

//             if(s1.length === right-left+1) return true;
//             right++;
//         }else{
//             // start adding in from the last char removed
//             // add chars back in
//             // decrease right until equal to left

//             while(right > left){
//                 // start removing
//                 let rightChar = s2[right-1];
//                 charObj[rightChar]++;
//                 right--;
//             }
//             // increment both left and right so that we start at a new index of s2
//             right++;
//             left++;
//         }
//     }

//     return false;

// };

// var checkInclusion = function(s1, s2) {
//     let left = 0;
//     let right = 0;
//     const charObj = {};

//     // map charObj
//     for(const char of s1){
//         if(!charObj[char]){
//             charObj[char] = 1;
//         }else{
//             charObj[char]++;
//         }
//     }

//     while(right < s2.length){
//         let rightChar = s2[right];

//         // if char found in map
//         if(charObj[rightChar]){
//             charObj[rightChar]--;

//             if(s1.length === right-left+1) return true;
//             right++;
//         }else{
//             // add chars back into map that were removed
//             while(left < right){
//                 let leftChar = s2[left];
//                 charObj[leftChar]++;
//                 left++;
//             }
//             // increment both left and right so that we start at a new index of s2
//             right++;
//             left++;
//         }
//     }

//     return false;

// };

var checkInclusion = function (s1, s2) {
	// If s1 is larger than s2 then match is not possible
	// i.e (s1 cannot be substring of s2)
	if (s1.length > s2.length) return false;
	let neededChar = {}; //To Store the frequency/count of required string s1
	for (let i = 0; i < s1.length; i++) {
		// Initially neededChar[s1[i]] will be undefined and
		// undefined || 0 will return 0. So we increment it by 1
		neededChar[s1[i]] = (neededChar[s1[i]] || 0) + 1;
	}
	/* 
	Now we have neededChar
	i.e neededChar={
		a:1,
		b:1
	}
	*/
    

	let left = 0, //left pointer/index of the sliding window
		right = 0, //right pointer/index of the sliding window
		requiredLength = s1.length, //length of the substring required in s2

	// Now iterate until the right index of window is lesser than length of s2
	while (right < s2.length) {
		// If we found s2 character in s1 i.e in neededChar then we decrease requiredLength
		if (neededChar[s2[right]] > 0) requiredLength--;
		// Since we have encountered new char i.e s2[right] we decrease it's 
		// count in neededChar even if it is not present in neededChar because we only care about neededChars
		neededChar[s2[right]]--;

		// Now if our requiredLength becomes 0 it means we have found a match of the s2 substring
		// So we return true
		if (requiredLength === 0) return true;

        right++ //window is incremented by 1 step

        // this current right index hasn't checked for a char 
		// If our window length is equal to s1 length (length of string to search in s2)
		// then we have to remove left element of window i.e left++ and add new element from right 
		// will be added in next iteration
		if (right - left === s1.length) {
			// if the left element we are removing was a required character then we increase requiredLength
			// because that element will no longer be the part of sliding window
            // if the char wasn't initially mapped, this will return an error
			
            // this should be wrapped into the if conditional
            if (neededChar[s2[left]] >= 0) requiredLength++;
			// We will also increase the count of left element removed from window
			neededChar[s2[left]]++;
			// And finally we will decrease the window size by 1 from left i.e left++
			left++
		}
	}
	// If match was not found we return false
	return false;
};