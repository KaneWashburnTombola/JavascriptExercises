'use strict';
var foo =1;
if(foo%2===0){
    console.log("this number is even!");
}
else{
    console.log("this number is odd");
}

var convertFarenheit = 0;
var convertCelsius=function(number){
    convertFarenheit = (((number*5)/9)+32);
}
convertCelsius(12);
console.log(convertFarenheit);

var convertRadians =0;
var convertDegrees=function(number){
    convertRadians=((Math.PI/180)*number);
}
convertDegrees(345);
console.log(convertRadians);

var Hypotoneuse=0;
var findHypotoneuse=function(number1,number2){
    Hypotoneuse=Math.sqrt(((number1*number1)+(number2*number2)));
}
findHypotoneuse(3,4);
console.log(Hypotoneuse);

var hypotoneuseLength = 0;
var trigCalculation = function(length,angle){
    hypotoneuseLength= Math.sin(angle)*length;
}
trigCalculation(12,30);
console.log(hypotoneuseLength);


var diceRoll = (Math.floor(Math.random()*6)+1);

console.log(diceRoll);
