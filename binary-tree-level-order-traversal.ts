import { printOutputs, TreeNode } from "./utils";

/**
Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. 
(i.e., from left to right, level by level from leaf to root).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[15,7],[9,20],[3]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 */

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
 * @return {number[][]}
 */

function pst(node: TreeNode|null, levels: number[][], level: number): number[][] {
    // console.log(levels)
    if(node == null){
        return levels;
    }
    if(levels[level] == undefined) {
        levels[level] = [];
    }
    levels[level].push(node.val);
    levels = pst(node.left, levels, level + 1);
    levels = pst(node.right, levels, level + 1);
    
    return levels;
}

function levelOrderBottom(root: TreeNode): number[][]  {
    let out = pst(root, [], 1);
    let result: number[][] = [];
    for(let i = Object.entries(out).length; i >= 1; i--) {
        result.push(out[i]);
    }
    return result;
};

printOutputs([[3,9,20,null,null,15,7], [1], []], levelOrderBottom);

