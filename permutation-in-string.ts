import { printOutput } from "./utils";

/**
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
In other words, return true if one of s1's permutations is the substring of s2.
Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:
Input: s1 = "ab", s2 = "eidboaoo"
Output: false
*/

function checkInclusion(s1: string, s2: string): boolean {
    let targetMap = new Map<string, number>();
    let windowMap = new Map<string, number>();
    let includes = false;

    const appendMap = function(map: Map<string, number>, letter:string) {
        map.set(letter, (map.get(letter) ?? 0) + 1);
    }
    const removeMap = function(map:Map<string, number>, letter:string) {
        map.set(letter, (map.get(letter) ?? 0) - 1);
        if(map.get(letter) == 0) {
            map.delete(letter);
        }
    }
    const compareMap = function(m1:Map<string, number>, m2:Map<string, number>): boolean {
        for(const key of m1.keys()) {
            if(m1.get(key) != m2.get(key)) {
                return false;
            }
        }
        return true;
    }

    for(const letter of s1) {
        appendMap(targetMap, letter);
    }
    for(let l = 0, r = 0; r < s2.length; r++) {
        appendMap(windowMap, s2[r]);
        if(compareMap(targetMap, windowMap)) {
            includes = true;
            break;
        }
        if(r >= s1.length - 1) {
            removeMap(windowMap, s2[l]);
            l++;
        }
    }
    return includes;
};

printOutput(["ab", "ab"], checkInclusion, ["eidbaooo", "eidboaoo"]);