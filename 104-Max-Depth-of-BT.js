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
 * @return {number}
 */
var maxDepth = function(root) {
    
    function findDepth(node){
        // base case
        if(node === null) return 0;

        // normal case
        let left = findDepth(node.left);
        let right = findDepth(node.right);

        let max = Math.max(left,right);

        return 1 + max;
    }

    return findDepth(root);
};