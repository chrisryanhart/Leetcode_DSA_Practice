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
 * @return {number[]}
 */
var rightSideView = function(root) {

    const visibleNodes = [];
    const queue = [root];

    while(queue.length){
        let rowCount = queue.length;
        let foundFirst = false;

        while(rowCount){
            let curr = queue.shift();
            if(!foundFirst && curr){
                visibleNodes.push(curr.val);
                foundFirst = true;
            }

            if(curr && curr.right){
                queue.push(curr.right);
            }

            if(curr && curr.left){
                queue.push(curr.left);
            }
            rowCount --;
        }
    }
    return visibleNodes;
};