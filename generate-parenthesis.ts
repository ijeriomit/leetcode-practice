import { printOutput } from "./utils";

/** 
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
*/

function generateParenthesis(n: number): string[] {
    const combos: string[] = [];
    const generate = function(open: number, close:number, n: number, str: string) {
        if(str.length == 2 * n) {
            combos.push(str);
        }
        if(open > close) {
            generate(open, close+1, n, str+')');
        }
        if(open < n) {
            generate(open+1, close, n, str+'(');
        }
    };
    generate(0, 0, n, '');
    return combos;
};

printOutput([3,1], generateParenthesis);