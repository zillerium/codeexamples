'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
*   Print three lines:
*   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
*   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
*   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
*
*    Parameter(s):
*   secondInteger - The string representation of an integer.
*   secondDecimal - The string representation of a floating-point number.
*   secondString - A string consisting of one or more space-separated words.
**/
function performOperation(inputStr) {
    var characters = inputStr.split('');
    //console.log(output);
    for( var i in characters ) {
        // For in loops on strings will return the indexes instead 
        // of the characters
        var ch = characters[i];
        if (isVowel(ch, characters, i)) {
           // characters.splice(i, 1);
           console.log(ch);
        }
    }
    for(var i in characters ) {
        // For in loops on strings will return the indexes instead 
        // of the characters
        var ch = characters[i];
        if (!isVowel(ch, characters, i)) {
           // characters.splice(i, 1);
            console.log(ch);
        }
    }
}

function isVowel(ch, characters, i) {
    if (ch == 'a') return true;
    if (ch == 'e') return true;
    if (ch == 'i') return true;
    if (ch == 'o') return true;
    if (ch == 'u') return true;
  // const index = characters.indexOf(ch);
 //  if (characters.includes('a')) { console.log("test"); return true; }
 //  if (characters.includes('e')) { console.log("test1"); return true; }
 //  if (characters.includes('i')) { console.log("test2"); return true; }
 //  if (characters.includes('o')) { console.log("test3"); return true; }
 //  if (characters.includes('u')) { console.log("test4"); return true; }
   return false;
}

function main() {
    const inputStr = readLine();
    
    performOperation(inputStr);
}