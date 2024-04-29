
/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Examples: 
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Input: strs = [""]
Output: [[""]]

Input: strs = ["a"]
Output: [["a"]]
**/
import { printOutput } from "./utils";

function groupAnagrams(strs: string[]): string[][] {
    const anagrams: string[][] = [];
    const wordMaps: Map<string, number>[] = [];

    const appendMap = function(map: Map<string, number>, letter: string) {
        if(map.has(letter)) {
            map.set(letter, map.get(letter)! + 1);
        }else{
            map.set(letter, 1);
        }
    };
    const compareMaps = function(map1: Map<string, number>, map2: Map<string, number>): boolean {
        if(map1.size != map2.size){
            return false;
        }
        for(const [key,value] of map1.entries()) {
            if(map2.get(key) != value){
                return false
            }
        }
        return true;
    }
    for(let i = 0; i < strs.length; i++) {
        let wordMap = new Map<string, number>();
        let str = strs[i];
        for(let j = 0; j < str.length; j++) {
            appendMap(wordMap, str[j]);
        }
        let wordMapIndex = -1;
        for(let k = 0; k < wordMaps.length; k++){
            if(compareMaps(wordMap, wordMaps[k])) {
                wordMapIndex = k;
                break;
            }
        }
        if(wordMapIndex != -1){
            anagrams[wordMapIndex].push(strs[i]);
        }
        else {
            wordMaps.push(wordMap);
            anagrams.push([strs[i]]);
        }
    }
    return anagrams;
};

const inputs: string[][] = [["eat","tea","tan","ate","nat","bat"],[""], ["a"]];
printOutput(inputs, groupAnagrams);