/**
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Examples:
Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

import { printOutput } from "./utils";

function isValid(s: string): boolean {
    let isValid = false;
    const getMatchingString = (s: string) => {
        switch (s){
            case ')':
                return '(';
            case '}':
                return '{';
            case ']':
                return '[';
        }
        return '';
    };
    if(s.length == 1){
        return isValid;
    }
    let stack: string[] = [];
    let openStrings= ['[', '(', '{'];
    for(let i = 0; i < s.length; i++) {
        if(openStrings.includes(s[i])) {
            isValid = false;
            stack.push(s[i]);
        } 
        else if(stack.pop() != getMatchingString(s[i])) {
             isValid = false;
             break;
        }
        else {
            isValid = true;
        }
    }
    if(stack.length != 0) {
        isValid = false;
    }
    return isValid;
    
};

printOutput(['()', '()[]{}', '(]'], isValid);