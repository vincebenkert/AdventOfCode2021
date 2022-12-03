//Input
fs = require('fs')
let input = fs.readFileSync('/adventofcode/2021/day3/input.txt', 'utf8');
let inputArray = input.split("\n");

let gRate = 0;
let eRate = 0;
let firstBit = 0;
let firstBitmost = 0;
let firstBitleast = 0;
let secondBit = 0;
let secondBitmost = 0;
let secondBitleast = 0;
let thirdBit = 0;
let thirdBitmost = 0;
let thirdBitleast = 0;
let fourthBit = 0;
let fourthBitmost = 0;
let fourthBitleast = 0;
let fifthBit = 0;
let fifthBitmost = 0;
let fifthBitleast = 0;
let sixthBit = 0;
let sixthBitmost = 0;
let sixthBitleast = 0;
let seventhBit = 0;
let seventhBitmost = 0;
let seventhBitleast = 0;
let eighthBit = 0;
let eighthBitmost = 0;
let eighthBitleast = 0;

let ninthBit = 0;
let ninthBitmost = 0;
let ninthBitleast = 0;

let tenthBit = 0;
let tenthBitmost = 0;
let tenthBitleast = 0;
let eleventhBit = 0;
let eleventhBitmost = 0;
let eleventhBitleast = 0;
let twelfthBit = 0;
let twelfthBitmost = 0; 
let twelfthBitleast = 0; 


for(let i=0; i<inputArray.length; i++){
    if(inputArray[i].charAt(0) == '1')
        firstBit += 1;
    else
        firstBit -= 1;
    
    if(inputArray[i].charAt(1) == '1')
        secondBit += 1;
    else
        secondBit -= 1;

    if(inputArray[i].charAt(2) == '1')
        thirdBit += 1;
    else
        thirdBit -= 1;  
    if(inputArray[i].charAt(3) == '1')
        fourthBit += 1;
    else
        fourthBit -= 1; 
    if(inputArray[i].charAt(4) == '1')
        fifthBit += 1;
    else
        fifthBit -= 1; 
    if(inputArray[i].charAt(5) == '1')
        sixthBit += 1;
    else
        sixthBit -= 1; 

    if(inputArray[i].charAt(6) == '1')
        seventhBit += 1;
    else
        seventhBit -= 1; 

    if(inputArray[i].charAt(7) == '1')
        eighthBit += 1;
    else
        eighthBit -= 1; 
        
    if(inputArray[i].charAt(8) == '1')
        ninthBit += 1;
    else
        ninthBit -= 1; 
    
    if(inputArray[i].charAt(9) == '1')
        tenthBit += 1;
    else
        tenthBit -= 1; 

    if(inputArray[i].charAt(10) == '1')
        eleventhBit += 1;
    else
        eleventhBit -= 1; 

    if(inputArray[i].charAt(11) == '1')
        twelfthBit += 1;
    else
        twelfthBit -= 1;     
    

}
console.log(firstBit + " " + secondBit + " " + thirdBit + " " + fourthBit + " " + fifthBit + " " + sixthBit + " " + seventhBit + " " + eighthBit + " " + ninthBit + " " + tenthBit + " " + eleventhBit + " " + twelfthBit);


if(firstBit > 0){
    firstBitmost = 1;
    firstBitleast = 0;
}
else {
    firstBitmost = 0;
    firstBitleast = 1;
}
if(secondBit > 0){
    secondBitmost = 1;
    secondBitleast = 0;
}
else {
    secondBitmost = 0;
    secondBitleast = 1;
}

if(thirdBit > 0){
    thirdBitmost = 1;
    thirdBitleast = 0;
}
else {
    thirdBitmost = 0;
    thirdBitleast = 1;
}

if(fourthBit > 0){
    fourthBitmost = 1;
    fourthBitleast = 0;
}
else {
    fourthBitmost = 0;
    fourthBitleast = 1;
}

if(fifthBit > 0){
    fifthBitmost = 1;
    fifthBitleast = 0;
}
else {
    fifthBitmost = 0;
    fifthBitleast = 1;
}

if(sixthBit > 0){
    sixthBitmost = 1;
    sixthBitleast = 0;
}
else {
    sixthBitmost = 0;
    sixthBitleast = 1;
}

if(seventhBit > 0){
    seventhBitmost = 1;
    secondBitleast = 0;
}
else {
    seventhBitmost = 0;
    seventhBitmost = 1;
}
if(eighthBit > 0){
    eighthBitmost = 1;
    eighthBitleast = 0;
}
else {
    eighthBitmost = 0;
    eighthBitleast = 1;
}
if(ninthBit > 0){
    ninthBitmost = 1;
    ninthBitleast = 0;
}
else {
    ninthBitmost = 0;
    ninthBitleast = 1;
}
if(tenthBit > 0){
    tenthBitmost = 1;
    tenthBitleast = 0;
}
else {
    tenthBitmost = 0;
    tenthBitleast = 1;
}
if(eleventhBit > 0){
    eleventhBitmost = 1;
    eleventhBitleast = 0;
}
else {
    eleventhBitmost = 0;
    eleventhBitleast = 1;
}

if(twelfthBit > 0){
    twelfthBitmost = 1;
    twelfthBitleast = 0;
}
else {
    twelfthBitmost = 0;
    twelfthBitleast = 1;
}

gRate = firstBitmost.toString() + secondBitmost.toString() + thirdBitmost.toString() + fourthBitmost.toString() + fifthBitmost.toString() + sixthBitmost.toString() + seventhBitmost.toString() + eighthBitmost.toString() + ninthBitmost.toString() + tenthBitmost.toString() + eleventhBitmost.toString() + twelfthBitmost.toString();
console.log(gRate);
console.log(parseInt(Number(gRate),2));

eRate = firstBitleast.toString() + secondBitleast.toString() + thirdBitleast.toString() + fourthBitleast.toString() + fifthBitleast.toString() + sixthBitleast.toString() + seventhBitleast.toString() + eighthBitleast.toString() + ninthBitleast.toString() + tenthBitleast.toString() + eleventhBitleast.toString() + twelfthBitleast.toString();
console.log(eRate);
console.log(parseInt(Number(eRate),2));

let answer = parseInt(gRate,2) * parseInt(eRate,2);
console.log(answer);

// 1055916 too low
// 2724524 correct answer...
