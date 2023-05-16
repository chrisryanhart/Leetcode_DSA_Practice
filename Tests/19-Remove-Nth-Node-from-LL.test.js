const { removeNthFromEnd, ListNode } = require('./19-Remove-Nth-Node-from-LL.js');

describe('removes nth node from LL', function(){
    it('removes nth node', function(){
        let tail = new ListNode(5);
        let fourth = new ListNode(4,tail);
        let third = new ListNode(3,fourth);
        let second = new ListNode(2, third);
        let head = new ListNode(1,second);

        // let head = [1,2,3,4,5];
        let n = 2;

        let res = removeNthFromEnd(head,n);

        console.log('test');

    });
    // it('removes nth node', function(){
    //     let tail = new ListNode(5);
    //     let fourth = new ListNode(4,tail);
    //     let third = new ListNode(3,fourth);
    //     let second = new ListNode(2, third);
    //     let head = new ListNode(1,second);

    //     // let head = [1,2,3,4,5];
    //     let n = 5;

    //     let res = removeNthFromEnd(head,n);

    //     console.log('test');

    // });
})