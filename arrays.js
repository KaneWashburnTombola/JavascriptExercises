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


var randomNumber=function(array) {
    var valueArray=[];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0) {
           valueArray.push(array[i]);
        }
        else{
            console.log("The array has no elements divisible by 3");
        }
    }
    return valueArray;
}
console.log(randomNumber([3,6,9,12,15]));
console.log(randomNumber([1,2,4,5,7,8]));