import { printOutputs } from "./utils";

/**
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 */

function searchMatrix(matrix: number[][], target: number): boolean {
    let flatArray = matrix.flat();
    let index = binarySearch(flatArray, target);
    return index != -1;
};

function binarySearch(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length - 1;
    let ans = -1;
    while(start <= end) {
        let mid = Math.floor((start + end)/2);
        if(nums[mid] == target) {
            ans = mid;
            break;
        }
        else if(nums[mid] > target) {
            end = mid - 1;
        }
        else if(nums[mid] < target) {
            start = mid + 1;
        }
    }
    return ans;
}

printOutputs([[[1,3,5,7],[10,11,16,20],[23,30,34,60]], [[1,3,5,7],[10,11,16,20],[23,30,34,60]]], searchMatrix, [3, 13]);