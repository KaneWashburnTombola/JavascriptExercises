'use strict';

var namesArray = ["kane","dan","dom","andrew","liam","laurie","ian","katherine","sohaib"];

console.log(namesArray[namesArray.length]);

console.log(namesArray[0]);

for(var i=0; i<namesArray.length; i++){
    var nameString = "";
    nameString += namesArray[i] + ',';
    console.log(nameString);
}

