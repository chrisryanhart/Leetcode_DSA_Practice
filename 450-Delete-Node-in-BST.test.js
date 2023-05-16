const { deleteNode, TreeNode } = require('./450-Delete-Node-in-BST');

describe('delete the target node if present', function(){
    it('deletes the node',function(){
        let root = new TreeNode(0);
        let key = 0;

        let res = deleteNode(root,key);

        console.log(res);

    });
});