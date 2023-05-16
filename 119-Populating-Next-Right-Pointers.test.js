const {Node, connect} = require('./119-Populating-Next-Right-Pointers.js');

describe('populates next pointer', function(){
    // it('handles BT 4 levels deep',function(){
    //     let thirteen = new Node(13);
    //     let twelve = new Node(12);
    //     let eleven = new Node(11);
    //     let ten = new Node(10);
    //     let nine = new Node(9);
    //     let eight = new Node(8);
    //     let seven = new Node(7);
    //     let six = new Node(6);

    //     let five = new Node(5,twelve,thirteen);
    //     let four = new Node(4,ten,eleven);
    //     let three = new Node(3,eight,nine);
    //     let two = new Node(2,six,seven);

    //     let one = new Node(1,four,five);
    //     let zero = new Node(0,two,three);

    //     let root = new Node(-1,zero,one);

    //     let res = connect(root);

    //     console.log('test');

    // });

    it('handles smaller BT',function(){
        let seven = new Node(7);
        let six = new Node(6);

        let five = new Node(5);
        let four = new Node(4);
        let three = new Node(3,six,seven);
        let two = new Node(2,four,five);

        let one = new Node(1,two,three);

        let res = connect(one);

        console.log('test');
    })

    // [-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13]
});