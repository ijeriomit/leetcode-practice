import { printOutput } from "./utils";
/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 * Example 1:
 * Input: nums = [100,4,200,1,3,2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 * Example 2:
 * Input: nums = [0,3,7,2,5,8,4,6,0,1]
 * Output: 9 
 * */

function longestConsecutiveSequence(nums: number[]): number {
    const map = new Map<number, number>();
    const numSet = new Set(nums);
    let maxVal = 0;

    for(const num of numSet) {
        console.log(num);
        let lower = map.get(num - 1) || 0;
        let higher = map.get(num + 1) || 0;
        let val = lower + higher + 1;
        map.set(num - lower, val);
        map.set(num + higher, val);
        maxVal = Math.max(maxVal, val);
    }
    return maxVal;
};

printOutput([[100,4,200,1,3,2], [0,3,7,2,5,8,4,6,0,1]], longestConsecutiveSequence);