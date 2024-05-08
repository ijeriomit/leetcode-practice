import { printOutputs } from "./utils";

/**
Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

function lengthOfLongestSubstring(s: string): number {

    if(s.length == 0) {
        return 0;
    }
    const charMap = new Map<string, number>();
    let max = 1;
    let left = 0; 
    let right = left;

    for(;right < s.length; right++) {
        let letter = s[right];
        if(charMap.get(letter) === undefined || charMap.get(letter) == 0) {
            max = Math.max(max, (right - left)+1);
            charMap.set(letter, 1);
        }
        else {
            max = Math.max(max, (right - left));
            while(charMap.get(letter) !=0) {
                charMap.set(s[left], 0);
                left++;
            }
            if(left > right){
                left = right;
            }
            charMap.set(letter, 1);
        }
    }
    return max;
};

printOutputs(["abcabcbb", "bbbbb", "pwwkew"], lengthOfLongestSubstring);