
 // Definition for a Node.
 function Node(val, left, right, next) {
     this.val = val === undefined ? null : val;
     this.left = left === undefined ? null : left;
     this.right = right === undefined ? null : right;
     this.next = next === undefined ? null : next;
 };


/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {

    const stack = [];
    
    function findNext(node,prev=null){
        // base case
        if(node === null) return null;


        // normal case
        // use stack to keep track of level

        let item = null;
        if(stack.length){
            item = stack.pop();
        }

        // necessary to drill down the left side of the tree
        let left = findNext(node.left, item);

        if(stack.length){
            item = stack.pop();
        }
        // if(item === undefined) item = null;
        // required to pass in the result from the left side of the tree
        let right = findNext(node.right,item);

        if(prev){
            prev.next = node.left;
        }

        if(node.left && node.right){
            node.left.next = node.right;
        }

        if(node.right){
            stack.push(node.right);
        }
        
        return;
    }

    findNext(root);

    return root;
};

module.exports = {connect, Node};