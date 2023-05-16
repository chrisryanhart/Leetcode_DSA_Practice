const { mergeTwoLists, ListNode } = require('./21-Merge-Two-Sorted-Lists.js');

describe('merge two lls', function(){
    it('merges two lists',function(){
        let tail = new ListNode(4);
        let second = new ListNode(2,tail);
        let list1 = new ListNode(1, second);

        let s2 = new ListNode(3,tail);
        let list2 = new ListNode(1,s2);

        let res = mergeTwoLists(list1,list2);



        console.log('test');

        let output = [1,1,2,3,4,4];
    });
})