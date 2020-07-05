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
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    var c =0;
    var co = true;
    var ox=0;
    var oy=0;
    for (var key in objects) {
        var obj = objects[key];
        for (var prop in obj) {
           // console.log(" prop " + obj[prop] + " " + prop)    
                if (prop == 'x') {
                    ox = obj[prop];
                } else {
                    if (prop == 'y') {
                        oy = obj[prop];
                    }
                }
        }
        if (ox == oy) {
            c++;
        }
        ox = 0; oy=0;
    }
    return c;
}

