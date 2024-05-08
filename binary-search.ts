import { printOutputs } from "./utils";

/**
    Given an array of integers nums which is sorted in ascending order, 
    and an integer target, write a function to search target in nums. 
    If target exists, then return its index. Otherwise, return -1.
    You must write an algorithm with O(log n) runtime complexity.
    Example 1:

    Input: nums = [-1,0,3,5,9,12], target = 9
    Output: 4
    Explanation: 9 exists in nums and its index is 4
    Example 2:

    Input: nums = [-1,0,3,5,9,12], target = 2
    Output: -1
    Explanation: 2 does not exist in nums so return -1
*/

function search(nums: number[], target: number): number {
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
};

printOutputs([[-1,0,3,5,9,12],[-1,0,3,5,9,12]], search, [9, 2]);