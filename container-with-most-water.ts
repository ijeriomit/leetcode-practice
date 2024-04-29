/**
You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
*/
import { printOutput } from "./utils";

function maxArea(height: number[]): number {
    let maxArea = 0;
    let i = 0;
    let j = height.length-1;
    let length = j - i;

    while(i < j) {
        length = j - i;        
        const area = calculateArea(getContainerHeight(height[i], height[j]), length);
        if(area > maxArea) {
            maxArea = area;
        }
        if(height[i] <= height[j]){
            i++;
        } else if(height[i] > height[j]) {
            j--;
        }
    }
    return maxArea;
};

function getContainerHeight(height1: number, height2: number): number {
    return Math.min(height1, height2);
}
function calculateArea(height: number, width: number) : number {
    return height * width;
}

printOutput([[1,8,6,2,5,4,8,3,7], [1,1]], maxArea);