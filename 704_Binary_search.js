/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// array is sorted in ascending order

// O(log n) runtime required
// return the index if the value exists, else -1
var search = function(nums, target) {

    // make pointers
    // start in the middle of the array
    // if greater/less than move the left/right pointer

    let leftIdx = 0;
    let rightIdx = nums.length-1;

    // find the halfway point of the array
    let midIdx = Math.floor((nums.length-1)/2);

    // left pointer can't be more than the right pointer
    // exit loop if the indices are adjacent
    while(leftIdx < rightIdx - 1){
        if(nums[midIdx] === target) return midIdx;

        if(target > nums[midIdx]){
            leftIdx = midIdx;
        }else if(target < nums[midIdx]){
            rightIdx = midIdx;
        }

        // move to the new midpoint

        midIdx = Math.floor(((rightIdx - leftIdx + 1)/2)) +leftIdx;

    }
    if(nums[leftIdx] === target) return leftIdx;
    if(nums[rightIdx] === target) return rightIdx;

    return -1;

    
};

module.exports = search;