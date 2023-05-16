/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let stack1 = [root1];
    let stack2 = [root2];

    while(stack1.length || stack2.length){
        let leaf1 = null;
        let leaf2 = null;

        let firstFound = false;
        let secondFound = false;

        // find left most leaf of the 1st root 
        while(!firstFound && stack1.length){
            leaf1 = stack1.pop();

            // found the end
            if(!leaf1.left && !leaf1.right){
                firstFound = true;
            }

            if(leaf1.right){
                stack1.push(leaf1.right);
            }

            if(leaf1.left){
                stack1.push(leaf1.left);
            }
        }

        // find left most leaf of the 2nd root 
        while(!firstFound && stack1.length){
            leaf2 = stack2.pop();

            // found the end
            if(!leaf2.left && !leaf2.right){
                secondFound = true;
            }

            if(leaf2.right){
                stack2.push(leaf2.right);
            }

            if(leaf2.left){
                stack2.push(leaf2.left);
            }
        }

        // can't take left or null
        if(leaf1 && leaf2){
            if(leaf1.val !== leaf2.val) return false;
        }else if(!leaf1 && leaf2){
            return false;
        }else if(leaf1 && !leaf2){
            return false;
        }
        // should never both return false
        // there should always be at least one leaf

    }

    return true;
};