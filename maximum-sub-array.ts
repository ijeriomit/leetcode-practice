/**
Given an integer array nums, find the 
subarray with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
*/

import { printOutputs } from "./utils";

function maxSubArray(nums: number[]) {
    let runSum = nums[0];
    let result = runSum;
    for(let i=1; i < nums.length; i++){
        if(runSum + nums[i] >= nums[i]){
            runSum += nums[i]
        }
        else{
            runSum = nums[i]
        }
        result = Math.max(result, runSum)
    }
    return result;
};

printOutputs([[-2,1,-3,4,-1,2,1,-5,4], [1], [5,4,-1,7,8]], maxSubArray);