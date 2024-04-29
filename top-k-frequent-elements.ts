/**
    Given an integer array nums and an integer k, return the k most frequent elements.
    You may return the answer in any order.
    Example 1:

    Input: nums = [1,1,1,2,2,3], k = 2
    Output: [1,2]
    Example 2:

    Input: nums = [1], k = 1
    Output: [1]
 */
import { printOutput } from "./utils";

function topKFrequent(nums: number[], k: number): number[] {
    const numMap = new Map<number, number>();
    
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        numMap.set(num, (numMap.get(num) ?? 0) +1);
    }
    const mostFreqNums = [...numMap.entries()].sort((a, b) => b[1] - a[1]).map((a) => a[0]);
    return mostFreqNums.slice(0, k);
};


printOutput([[1,1,1,2,2,3], [1]], topKFrequent);