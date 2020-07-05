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

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbrs.
 */
//function modifyArray(nums) {
    
//}
const modifyArray = (...nums) => {
    //console.log(nums);
    var i=0;
    var num1 = nums[0]
     num1.forEach(function(num) {
       // console.log(num1[0]);
        
        if  (num % 2 == 0) {
           num1[i] = num * 2;
       } else {
           num1[i] = num * 3; 
        }
       i++;
    })
    return num1;
}


function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);
    
    console.log(modifyArray(a).toString().split(',').join(' '));
}