var rotate = function(nums, k) {
    // update the array values in place
    let i = 0;

    while(i < k){
        // move each item forward
        // loop through k times
        let startIdx = nums.length - 1 - i;
        let last = nums.pop();

        for(let j=nums.length-1; j > 0; j++){
            nums[j+1] = nums[j];
        }
        i++;
    }
};

// approach 2
var rotate = function(nums, k) {
    // shift all values 3 places
    for(let i=nums.length-1; i>=0; i++){
        nums[i+k] = nums[i];
    }

    // remove k elements and add to the front
    for(let i=k; i>=0; i--){
        let last = nums.pop();
        nums[i] = last;
    }
    return nums;
};