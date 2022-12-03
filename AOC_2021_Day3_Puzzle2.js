//Input
fs = require('fs')
let input = fs.readFileSync('/adventofcode/2021/day3/input.txt', 'utf8');
let inputArray = input.split("\n");
let secondInputArray = [...inputArray];

//oxygen generator rating
let bitPos = 0;
let mostCV = 0;
let leastCV = 0;
let firstArray = [];
let secondArray = [];
let oxygenGenRating = 0;


for(bitPos=0; bitPos < 12; bitPos++){

    for(let i=0; i < inputArray.length; i++){

        if(inputArray[i].charAt(bitPos) == "1"){
            firstArray.push(inputArray[i]);
            mostCV +=1
        }
        else{
            secondArray.push(inputArray[i]);
            mostCV -=1;
        }


    }

    if(mostCV >= 0)
        inputArray = firstArray.splice(0);
        else
            inputArray = secondArray.splice(0);
        
    //Reset MostCV
    console.log(inputArray);
    firstArray = [];
    secondArray = [];
    mostCV = 0;
    if(inputArray.length == 1)
        bitPos = 12;

}
oxygenGenRating = parseInt(Number(inputArray[0]),2);

console.log ("OxyGenRating = " + oxygenGenRating)

//CO2 scrubber rating

for(bitPos=0; bitPos < 12; bitPos++){

    for(let i=0; i < secondInputArray.length; i++){

        if(secondInputArray[i].charAt(bitPos) == "1"){
            firstArray.push(secondInputArray[i]);
            leastCV +=1
        }
        else{
            secondArray.push(secondInputArray[i]);
            leastCV -=1;
        }
    }

    if(leastCV >= 0)
        secondInputArray = secondArray.splice(0);
        else
            secondInputArray = firstArray.splice(0);
        
    //Reset MostCV
   console.log(secondInputArray);
   firstArray = [];
   secondArray = [];
      leastCV = 0;
    if(secondInputArray.length == 1)
      bitPos = 12;
}
co2ScrubRating = parseInt(Number(secondInputArray[0]),2);

console.log ("co2ScrubRating = " + co2ScrubRating)
let lifesupportrating = co2ScrubRating * oxygenGenRating;

console.log("lifesupportrating = " + lifesupportrating);

//2808054 too high