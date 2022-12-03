//Input
fs = require('fs')
let input = fs.readFileSync('/adventofcode/2021/day2/input.txt', 'utf8');
let inputArray = input.split("\n");

let hpos = 0;
let depth = 0;

for(let i=0;i<inputArray.length;i++){

let direction = inputArray[i].split(' ');
switch(direction[0]){

    case 'forward':
        hpos += Number(direction[1]);
        break;

    case 'down':
        depth += Number(direction[1]);
        break;

    case 'up':
        depth = depth - Number(direction[1]);
        break;
}
}
console.log("hpos = " + hpos + " depth = "  + depth);
let multi = hpos * depth;
console.log(multi);