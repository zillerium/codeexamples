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

function getMaxLessThanK(n, k) {
   // console.log( "+++++++++++++++")
   // console.log( " n = "+n + " k = " + k)
    var max=0;
    for (var i=0;i<n; i++) {
        var a=i+1;
     //   console.log("================== i = " + i)
        for (var j=a;j<n;j++) {
       //     console.log(" j = "+ j)
            var b=j+1;
            var x = a & b;
         //   console.log("bitwise " + " a = " + a + " b = " + b + " x = " +x);
            if ((x>max) && (x<k) ){
                max = x;
            }
        }

    }
    return max;
}


function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}