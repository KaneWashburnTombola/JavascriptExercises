'use strict';

var namesArray = ["kane","dan","dom","andrew","liam","laurie","ian","katherine","sohaib"];

console.log(namesArray[namesArray.length-1]);

console.log(namesArray[0]);

var namesString = namesArray.join();
console.log(namesString);

var ourNames = "kane,dan,dom,andrew,liam,laurie,ian,katherine,sohaib";

var listONames=ourNames.split(',');

console.log(listONames);

var brandnewArray = namesArray.concat(['keith','steve','darren']);

console.log(brandnewArray);

var randomNumber = [(Math.random()*100),(Math.random()*100),(Math.random()*100),(Math.random()*100)];

for(var i =0;i<randomNumber.length;i++){
    if(randomNumber[i]%3===0){
        console.log("Number is divisible by 3");
    }
    else{
        console.log("Number is not divisible by 3");
    }}