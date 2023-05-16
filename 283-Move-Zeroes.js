/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * 
 */
var moveZeroes = function(nums) {

    let pointer = 0;

    // will increment to the next element no matter what
    for(let i=0; i<nums.length-1; i++){
        if(nums[i]!==0){
            // swap then increment pointer
            let temp = nums[i];
            nums[i] = nums[pointer];
            nums[pointer] = temp;

            pointer++;
        }
    }
    // every time we swap, pointer goes to the next zero element
    
    return nums;
};

// var moveZeroes = function(nums) {

//     // let pivotIdx = Math.floor((nums.length-1)/2);

//     // initialize pointers
//     let pivotIdx = -1;
//     let right = nums.length-1;

//     // if one element, return nums
//     if(right === 0) return nums;


//     for(let int of nums){
//         if(int !== 0){
//             pivotIdx ++;
//         }
//     }

//     // if no zeroes return nums
//     if(pivotIdx === -1) return nums;

//     // move all zeros to the back of the pivot
//     // make left and right pointer up to the pivot
//     let left = 0;
//     let lastZero = 0;
//     while(left <= pivotIdx){
//         if(nums[lastZero] !== 0 && nums[left]!==0){
//             lastZero ++;
//             left ++;
//         }else if(nums[lastZero] === 0 && nums[left]===0){
//             // only the left is 
//             left ++;
//         }else if(nums[lastZero] === 0 && nums[left] !== 0){
//             let temp = nums[left]
//             nums[left] = nums[lastZero];
//             nums[lastZero] = temp;

//             // increment
//             lastZero ++;
//             left ++;
//         }
//     }

//     // let zeroCount = nums.length - insertionIdx;

//     // swap with the last zero
//     // start at the pivotIdx+1 or left
//     let secondInsertIdx = pivotIdx + 1;

//     // move zeros to the end 
//     while(secondInsertIdx < nums.length){

//         // swap values that equal zero
//         if(nums[lastZero]===0 && nums[secondInsertIdx] !== 0){
//             // idxBeforeSwap = right;

//             let temp = nums[secondInsertIdx];
//             nums[secondInsertIdx] = nums[lastZero];
//             nums[lastZero] = temp;

//             // increment/decrement pointers
//             // if they're adjacent elements that's ok.  they'll pass each other.
//             lastZero ++;
//             secondInsertIdx ++;
//         }else if(nums[lastZero]!==0 && nums[secondInsertIdx] === 0){
//             // should be zero until the end of the array is reached
//             console.log('should not enter this test case');
//         }else if(nums[lastZero]===0 && nums[secondInsertIdx] === 0){
//             secondInsertIdx ++;
//         }
//     }

//     return nums;
// };


// var moveZeroes = function(nums) {
//     console.log('test');

//     // initialize pointers
//     let left = 0;
//     let right = nums.length-1;
//     let idxBeforeSwap;

//     // if one element, return nums
//     if(right === 0) return nums;


//     // loop through array
//     // must loop 1X
//     while(left < right){

//         // swap values that equal zero
//         if(nums[left]===0 && nums[right] !== 0){
//             // idxBeforeSwap = right;

//             let temp = nums[right];
//             nums[right] = nums[left];
//             nums[left] = temp;

//             // increment/decrement pointers
//             // if they're adjacent elements that's ok.  they'll pass each other.
//             left ++;
//             right --;
//         }else {
//             right --;
//         }
        
        
        
        
//         // if(nums[right]===0){
//         //     right--;
//         // }else if(nums[left]!==0){
//         //     // is the order maintained befor moving?
//         //     if(idxBeforeSwap && left < idxBeforeSwap){

//         //     }
//         //     left ++;
//         // }
//     }

//     return nums;
// };

module.exports = moveZeroes;