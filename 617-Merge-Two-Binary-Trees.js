/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */


var mergeTrees = function(root1, root2) {

    if(!root1) return root2;
    if(!root2) return root1;

    function mergeNodes(node1,node2){
        // base case
        if(!node1 && !node2) return null;
        // prevent nodes with no children from being called
        if(!node1) return node2;
        if(!node2) return node1;

        let result;
        
        // normal case
        // if there are two nodes, pass function
        // can't take left of a null value
        // what if you call the func on the current val
        let left = mergeNodes(node1.left, node2.left);
        let right = mergeNodes(node1.right, node2.right);

        // add the two nodes together or take node with val
        if(node1.val && node2.val){
            result = node1;
            result.val = node1.val + node2.val;
            merged.push(node1);
        }else if(node1.val && !node2.val){
            result = node1;

        }else if(!node1.val && node2.val){
            result = node2;
        }

        // clear out existing children
        // Or make new node?
        result.left = null;
        result.right = null;

        // won't enter the case where both are null

        // what if both null
        // reset the left and right children
        result.left = left;
        result.right = right;

        return result;
    }
    let merged = mergeNodes(root1,root2);

    return merged;
};



// method when handling arrays
// var mergeTrees = function(root1, root2) {
//     let merged = [];
//     let i = 0;
    
//     while(i<root1 && i<root2){
//         if(root1[i] && root2[i]){
//             merged
//         }

//         i++;
//     }

//     while(i<root1){

//         i++;
//     }

//     while(i<root2){

//         i++;
//     }

//     return merged;
// };