'use strict';

var namesArray = ["kane","dan","dom","andrew","liam","laurie","ian","katherine","sohaib"];
var lastElement = namesArray.pop();
console.log(lastElement);



console.log(namesArray[0]);




var namesString = namesArray.join();
console.log(namesString);




var ourNames = "kane,dan,dom,andrew,liam,laurie,ian,katherine,sohaib";

var listONames=ourNames.split(',');

console.log(listONames);



var brandnewArray = namesArray.concat(['keith','steve','darren']);

console.log(brandnewArray);


