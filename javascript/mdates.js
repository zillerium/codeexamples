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

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    var d = new Date(dateString);
    //console.log(d.toDateString());
    var x = d.toDateString();
   // console.log(x);
    var day_pre = x.substring(0,3);
    switch (day_pre) {
        case ("Mon"): return "Monday";
        case ("Tue"): return "Tuesday";
        case ("Wed"): return "Wednesday";
        case ("Thu"): return "Thursday";
        case ("Fri"): return "Friday";
        case ("Sat"): return "Saturday";
        case ("Sun"): return "Sunday";
    }

    
    return "none";
}


function main() {
    const d = +(readLine());
    
    for (let i = 0; i < d; i++) {
        const date = readLine();
        
        console.log(getDayName(date));
    }
}