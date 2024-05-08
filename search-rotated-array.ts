import { printOutputs } from "./utils";

/**
There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) 
such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.
Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:
Input: nums = [1], target = 0
Output: -1
*/

function search(nums: number[], target: number): number {
    let ans = -1;
    
    let pivot = findPivot(nums);
    let start = 0;
    let end = nums.length - 1;
    if(pivot != -1) {
        if(target > nums[start]) {
            end = pivot;
        } else if(target < nums[start]) {
            start = pivot;
        } else {
            return start;
        }
    }
    while (start <= end) {
        let mid = Math.floor((start + end)/2);
        if(target == nums[mid]){
            ans = mid;
            break;
        } else if(target < nums[mid]) {
            end = mid -1;
        } else if(target > nums[mid]) {
            start = mid + 1;
        }
    }
    return ans;
};

function findPivot(nums: number[]): number {
    let start = 0; 
    let end = nums.length - 1;
    let pivot = -1;
    if(nums[start] <= nums[end]){
        return pivot; // no pivot
    }
    while(start < end) {
        let mid = Math.floor((start + end)/2);
       if(mid == start) {
            pivot = end;
            break;
       }
       if(nums[mid] > nums[end]){
            start = mid;
       }
       else if(nums[mid] < nums[end]) {
            pivot = mid;
            break; //ans found
       }
    }
    return pivot;
}

printOutputs([[4,5,6,7,0,1,2], [4,5,6,7,0,1,2], [1]], search, [0,3,0]);