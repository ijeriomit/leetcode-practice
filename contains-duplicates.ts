/* 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice 
// in the array, and return false if every element is distinct.

// Examples:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 
// Constraints:
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109 **/

//Inputs
//Expected Output
//[1,2,3,1] -> true
//[1,2,3,4] -> false
//[1,1,1,3,3,4,3,2,4,2] -> true

import { printOutputs } from "./utils";

function containsDuplicate(nums: number[]): boolean {
    let duplicatesFound = false;
    nums.sort((a,b) => {
        if(a-b === 0){
            duplicatesFound = true;
        }
        return a-b;
    });
    return duplicatesFound;
};

printOutputs([[1,2,3,1],[1,2,3,4], [1,1,1,3,3,4,3,2,4,2]], containsDuplicate);


