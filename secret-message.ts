/** In this exercise, you will develop a function named decode(message_file). This function should read an encoded message from a .txt file and return its decoded version as a string.

Note that you can write your code using any language and IDE you want (Python is preferred if possible, but not mandatory).

Your function must be able to process an input file with the following format:
3 love
6 computers
2 dogs
4 cats
1 I
5 you

In this file, each line contains a number followed by a word. 
The task is to decode a hidden message based on the arrangement of these numbers into a "pyramid" structure. 
The numbers are placed into the pyramid in ascending order, with each line of the pyramid having one more number than the line above it. 
The smallest number is 1, and the numbers increase consecutively, like so:
  1
 2 3
4 5 6

The key to decoding the message is to use the words corresponding to the numbers at the end of each pyramid line (in this example, 1, 3, and 6). You should ignore all the other words. So for the example input file above, the message words are:

1: I
3: love
6: computers
*/
import { printOutputs } from "./utils";
import * as fs from 'fs';
import * as path from 'path';


function decode_message(text : string) : string[] {
    let lineData: string[][] = [];

    text.split('\n').map((entry: string) => {
        if(entry == ''){
            return;
        }
        const num = entry.match(/\d+/)?.[0] ?? '';
        const word = entry.match(/[a-zA-Z]+/)?.[0] ?? '';
        lineData.push([num, word]);
     });
    lineData.sort((a:string[],b:string[]) => parseInt(a[0])-parseInt(b[0]));
    lineData.map((entry)=>{
        console.log(entry);
    });
    const message: string[] = [];
    let lineLen = 1;
    let currLen = 1;
    for(let i =0; i < lineData.length; i++){
        if(currLen == lineLen){
            message.push(lineData[i][1]);
            currLen = 1;
            lineLen++;
        } else {
            currLen++;
        }
    }

    return message;
}

const textInput = "283 land\n45 sun\n149 too\n258 huge\n248 hi\n25 ge\n78 ug";
fs.readFile("./secret_message.txt", "utf8", (err, data) => {
    if (err) throw err;
    // console.log(data);
    printOutputs([data], decode_message);
});
