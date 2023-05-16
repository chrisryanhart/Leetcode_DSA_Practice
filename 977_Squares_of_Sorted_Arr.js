
// two pointer method

var sortedSquares = function(nums) {
    let result = [];
    let left = 0;
    let right = nums.length -1;
    let insertPoint = nums.length-1;

    // we know that either the outter left or right of the array will be the max
    while(left < right){
        
        // if left abs greater, move to the front of the array
        // else don't swap, but still square
        if(Math.abs(nums[left]) > Math.abs(nums[right])){
            // let temp = nums[left];
            // nums[left] = nums[right];
            // nums[right] = temp ** 2;
            result[insertPoint] = nums[left] ** 2;
            left++;
        }else if(Math.abs(nums[left]) <= Math.abs(nums[right])){
            result[insertPoint] = nums[right] ** 2;
            right --;
        }
        insertPoint--;

    }
    return result;
};


// bubble sort approach

// var sortedSquares = function(nums) {
//     // first square all elements
//     nums.forEach(function(ele,idx,nums){
//         nums[idx] = (ele) ** 2;
//     });


//     // bubble sort O(n^2)

//     // first loop through the array
//     // have to start at zero for each iteration
//     for(let i=0; i < nums.length; i++){
//         for(let j = 0; j < nums.length - i; j++){
//             // swap if value is greater
//             if(nums[j] > nums[j+1]){
//                 let temp = nums[j+1];
//                 nums[j+1] = nums[j];
//                 nums[j] = temp;
//             }
//         }
//     }
//     return nums;
// };