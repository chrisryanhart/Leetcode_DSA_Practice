
//  * Definition for singly-linked list.
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// const list3 = [];

const mergeTwoLists = function(list1, list2) {

    function mergeLists(node1,node2){
        // base case
        // return one or the other list if one node is null
        // if both are null, pick one to return
        if(!node1) return node2;
        if(!node2) return node1;


        // normal case
        let res;
        if(node1.val <= node2.val){
            res = mergeLists(node1.next,node2);
            node1.next = res;
            res = node1;
            console.log('test');
        }else{
            res = mergeLists(node1,node2.next);
            node2.next = res;
            res = node2;
            console.log('test');

        }

        return res;
    }
 
    return mergeLists(list1,list2);
}

// const mergeTwoLists = function(list1, list2) {
//     if(!list1) return list2;
//     if(!list2) return list1;

//     function mergeLists(node1,node2){
//         // base case
//         if(!node1 && !node2) return null;

//         // normal case
//         // call function until we arrive at the end nodes
//         let merged;
//         if(!node1 && node2){
//             merged = mergeLists(node1, node2.next);
//         }else if(node1 && !node2){
//             merged = mergeLists(node1.next, node2);
//         }else if(node1 && node2){
//             merged = mergeLists(node1.next,node2.next);
//         }

//         // make judgements based off returned merged values

//         // update the merged value
//         if(node1.val >= node2.val){
//             node1.next = merged;
//             merged = node1;
            
//         }else if(node1.val < node2.val){
//             node2.next = merged;
//             merged = node2;
//         }

//         return merged;
//     }

//     let res = mergeLists(list1,list2);

//     return res;
// }


module.exports = { mergeTwoLists, ListNode};