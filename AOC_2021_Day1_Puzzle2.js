fs = require('fs')
let input = fs.readFileSync('/adventofcode/2021/day1/input.txt', 'utf8');
let inputArray = input.split("\n");


let previousSW = 0;
let nextSW = 0;
let countIncreased = 0;


for(let i=0; i<inputArray.length; i++){

    previousSW = Number(inputArray[i]) + Number(inputArray[i+1]) + Number(inputArray[i+2]);
    nextSW = Number(inputArray[i+1]) + Number(inputArray[i+2]) + Number(inputArray[i+3]);
    
    //Is there an increase check...
    if(previousSW < nextSW)
        countIncreased += 1;
}

console.log(countIncreased);