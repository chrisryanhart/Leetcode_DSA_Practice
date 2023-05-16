
var middleNode = function(head) {
    let slowNode = head;
    let fastNode = head
    
    while(fastNode.next !== undefined){
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }

    return slowNode;

}


var sortedSquares = function(nums) {
    // first square all elements
    console.log('test');
    nums.forEach(function(ele,idx,nums){
        nums[idx] = (ele) ** 2;
    });

    console.log('test');

    // bubble sort O(n^2)

    // first loop through the array
    for(let i=0; i < nums.length - 1; i++){


        // now compare each element to all the other elements in the array
        // have to visit each element initially
        let min = nums[i];
        let minIdx = i;
        let max = nums[i];
        let maxIdx = i;
        for(let j=nums.length - 1; j >= i; j--){



            if(nums[j] > max){
                // max = nums[j];
                maxIdx = j;
            }
            if(nums[j] < min){
                // min = nums[j];
                minIdx = j;
            }
        }
        // swap values here values here
        // first swap the min
        if(nums[minIdx] < nums[i]){
            let temp = nums[minIdx];
            nums[minIdx] = nums[i];
            nums[i] = temp;
        }

        // get last index in the array
        let lastIdx = nums.length - 1 - i;

        // set max point
        if(nums[maxIdx] > nums[lastIdx]){
            let temp = nums[maxIdx];
            nums[maxIdx] = nums[lastIdx];
            nums[lastIdx] = temp;
        }

    }
};