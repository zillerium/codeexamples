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

function instr(str, s) {
    if (str.indexOf(s) > -1) return true;
    return false;
 
}

function getLetter(s) {
    let letter;
    var s1 = s.charAt(0);
    // Write your code here
    switch (true) {
        case instr("aeiou", s1): letter = "A"; break;
        case instr("bcdfg", s1): letter = "B"; break;
        case instr("hjklm", s1): letter = "C"; break;
        case instr("nmopqrstuvwxz", s1): letter = "D"; break;
      
    }
    return letter;
}

