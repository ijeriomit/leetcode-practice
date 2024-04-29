/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. 

Examples:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]

**/
import { printOutput } from "./utils";


function twoSum(nums: number[], target: number): number[] {
    const targets: number[] = [];
    const sortedNums = mergeSort([...nums]);
    const map = buildMap(sortedNums);
    let searchValue = -1;
    for(let i = 0; i < nums.length; i++) {
        searchValue = target - nums[i];
        if(binarySearch(sortedNums, searchValue, map.get(nums[i])![0])){
            targets.push(i);
            break;
        }
        map.get(nums[i])!.shift();
    }
    for(let i=0; i < nums.length; i++) {
        if(nums[i] == searchValue && i != targets[0]){
            targets.push(i);
        }
    }
    return targets;
};

function mergeSort(nums: number[]): number[] {
    const leastToGreatest = (a: number, b : number) => {
        if(a < b) {
            return -1;
        } else if( a > b) {
            return 1;
        } else {
            return 0;
        }
    };
    const sortedNums = nums.sort(leastToGreatest); //time somplexity nlogn
    return sortedNums;
}

function binarySearch(nums: number[], searchValue: number, excludedIndex: number): boolean {
    let found: boolean = false;
    let left: number = 0;
    let right: number = nums.length - 1;
    while (left <= right) {
        const mid: number = Math.floor((left + right) / 2);
        if (nums[mid] === searchValue && mid != excludedIndex) { 
            found = true;
            break;
        }
        if (searchValue < nums[mid]) {
            right = mid - 1
        } else {
            left = mid + 1;
        }
    }
  return found;
}

function buildMap(arr: number[]): Map<number, number[]> {
    const map = new Map<number, number[]>();
    for(let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])){
            map.get(arr[i])!.push(i);
        }else{
            map.set(arr[i], [i]);
        }
    }
    return map;
}

printOutput([[2,7,11,15], [3,2,4], [3,3]], twoSum, [9, 6, 6]);