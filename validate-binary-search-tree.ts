/**
Given the root of a binary tree, 
determine if it is a valid binary search tree (BST).
A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 
Example 1:
Input: root = [2,1,3]
Output: true

Example 2:
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

import { TreeNode, printTreeNodes } from "./utils";

function validityCheck(root: TreeNode|null, min: number | null, max: number|null): boolean {
    if(!root) {
        return true;
    }
    if(min != null && min >= root.val){
        return false;
    }
    if(max != null && max <= root.val){
        return false;
    }
    return validityCheck(root.left, min, root.val) && validityCheck(root.right, root.val, max);
}

function isValidBST(root: TreeNode) {
    return validityCheck(root, null, null);
};

printTreeNodes([[2,1,3], [5,1,4,null,null,3,6]], isValidBST);