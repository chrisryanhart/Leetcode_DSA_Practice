/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(!root) return null;

    let curr = root;


    while(curr){
        if(curr.val === val){
            root = curr;
            return root;
        }else if(curr.val < val){
            // go to the next node if not a match
            curr = curr.left;
        }else if(curr.val > val){
            curr = curr.right;
        }
    }

    return null;
};


var searchBST = function(root, val) {
    if(!root) return null;

    let curr = root;

    // let stack =[root];

    while(stack.length){
        let curr = stack.pop();

        if(curr.val === val){
            root = curr;
            return root;
        }else{
            // if nodes present, push to stack
            if(curr.right){
                stack.push(curr.right);
            }
            if(curr.left){
                stack.push(curr.left);
            }
        }
    }

    return null;
};