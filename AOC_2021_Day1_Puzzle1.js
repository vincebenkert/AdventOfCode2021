//Input
fs = require('fs')
let input = fs.readFileSync('/adventofcode/2021/day1/input.txt', 'utf8');
let inputArray = input.split("\n");

let previousInput = 0;
let nextInput = 0;
let countIncreased = 0;

for(let i=0; i<inputArray.length - 1; i++){

    previousInput = inputArray[i];
    nextInput = inputArray[i+1];

    //console.log("PI = " + previousInput + " NI = " + nextInput);
    if(previousInput < nextInput){
        countIncreased += 1;
        //console.log("PI = " + previousInput + " NI = " + nextInput + " an increase we detected");
        //console.log("an increase we detected");
    }
    else
        console.log("PI = " + previousInput + " NI = " + nextInput + " no increase....");
}
console.log(countIncreased);
