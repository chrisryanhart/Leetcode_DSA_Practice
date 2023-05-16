
//  * Definition for singly-linked list.
function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
    // if only 1 node, remove it
    if(!head.next){
        head.val = null;
        return head;
    }

    let current = head;
    let nFromCurrent = -n + 1;
    let nthNodeFromEnd =null;
    let nodeAfterNth = null;
    let nodeBeforeNth = null;

    // traverse complete list
    while(current){

        // want to assign based on count from the end || increment node
        if(nFromCurrent === -1){
            nodeAfterNth = head;
        }else if(nodeAfterNth){
            nodeAfterNth = afterNth.next;
        }

        if(nFromCurrent === 0){
            nthNodeFromEnd = head;
        }else if(nthNodeFromEnd){
            nthNodeFromEnd = nthNodeFromEnd.next;
        }

        // track the node after
        if(nFromCurrent === 1){
            nodeBeforeNth = head;
        }else if(nodeBeforeNth){
            nodeBeforeNth = nodeBeforeNth.next;
        }

        // if at end of the list, remove node and return the list
        // edge case: head of the list is removed
        // edge case: tail of the list is removed
        if(!current.next && !nodeBeforeNth){
            head = nodeAfterNth;
            return head;
        }else if(!current.next && nthNodeFromEnd === current){
            nodeBeforeNth.next = null;
            return head;
        }else if(!current.next){
            nodeBeforeNth.next = nodeAfterNth;
            return head;
        }

        current = current.next;
        nFromCurrent++;
    }
    return head;
};

// var removeNthFromEnd = function(head, n) {
//     // if only 1 node, remove it
//     // 
//     if(head.val === n){
//         head.val = null;
//         return head;
//     }
    
//     let current = head.next;
//     let previous = head;

//     while(current){
//         // if node, remove it
//         // return arr
//         if(current.val === n){
//             // let temp = current;
//             previous.next = current.next;
//             return head;
//         }
//         // otherwise, increment prev and curr
//         let temp = current;
//         current = current.next;
//         previous = temp;
//         console.log('test');
//     }
//     console.log('test');
// };

module.exports = { removeNthFromEnd, ListNode };