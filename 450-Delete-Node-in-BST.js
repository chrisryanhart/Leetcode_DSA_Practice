
// Definition for a binary tree node.
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(!root) return root;
    if(root.val === key && !root.right && !root.left){
        root = null;
        return root;
    }

    // first find the parent and the 
    const foundNode = [];

    // add logic to only visit half the nodes
    function findNode(node,parent=null){
        // base case
        if(node === null) return;
        if(node.val === key){
            foundNode.push(node);
            foundNode.push(parent);
        }

        // normal case
        if(key > node.val){
            findNode(node.right,node);
        }else if(key < node.val){
            findNode(node.left,node);
        }
            
        return null
    }

    findNode(root);

    // if target not found, return complete BST
    if(!foundNode[0]) return root;
    // if(!foundNode[1]){
    //     root.val = null;
    //     return root;
    // } 

    // have to delete the found node
    let nodeToDelete = foundNode[0];
    let parent = foundNode[1];
    let replacementNode = foundNode[0].left;

    let oldRightChildOfReplacement;
    if(replacementNode){
        oldRightChildOfReplacement = replacementNode.right;
    }else{
        oldRightChildOfReplacement = null;
    }

    let newRightForReplacementNode = foundNode[0].right;

    // if both null, set target node to null
    // can't execute if target is parent.val
    // not necessary to place nodes in the BST if 

        if(!replacementNode && !newRightForReplacementNode){
            // if parent, set parent to null
            if(parent && parent.left === nodeToDelete){
                parent.left = null;
            }else if(parent && parent.right === nodeToDelete){
                parent.right = null;
            }else{
                root = null;
            }
            return root;
        }else if(replacementNode && !newRightForReplacementNode){
            // if parent, if right null, add left side
            if(parent && parent.left === nodeToDelete){
                parent.left = replacementNode;
            }else if(parent && parent.right === nodeToDelete){
                parent.right = replacementNode;
            }else{
                root = replacementNode;
            }
            return root;
        }else if(!replacementNode && newRightForReplacementNode){
            // if parent, if left null, add right side
            if(parent && parent.left === nodeToDelete){
                parent.left = newRightForReplacementNode;
            }else if(parent && parent.right === nodeToDelete){
                parent.right = newRightForReplacementNode;
            }else{
                root = newRightForReplacementNode;
            }
            return root;
        }else{
            // if left and right brances exist
            // if no parent, skip to set the right side
            // update parent's child
    
            if(parent && parent.left === nodeToDelete){
                parent.left = replacementNode;
            }else if(parent && parent.right){
                parent.right = replacementNode;
            }else{
                root = replacementNode;
            }
        }


    // may or may not have parent; steps are still the same
    // connect the new right child
    replacementNode.right = newRightForReplacementNode;

    // if oldRightChild is null, no need to place it properly in the BST
    if(!oldRightChildOfReplacement) return root;

    // place oldRightChildOfReplacement

    let nodePlaced = false;
    let currNode = newRightForReplacementNode;

    // moves branch to new location in the BST
    // only required if a right side exists
    while(!nodePlaced){
        if(oldRightChildOfReplacement.val > currNode.val){
            if(!currNode.right){
                currNode.right = oldRightChildOfReplacement;
                nodePlaced=true;
            }else{
                currNode = currNode.right;
            }
        }else{
            if(!currNode.left){
                currNode.left = oldRightChildOfReplacement;
                nodePlaced=true;
            }else{
                currNode = currNode.left;
            }
        }
    }

    return root;

};

module.exports = {deleteNode, TreeNode};