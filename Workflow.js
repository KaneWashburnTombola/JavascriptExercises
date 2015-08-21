'use strict';

var rightAngle =function(size){
    var stars = '';
    for(var i = 0; i < size; i++){
        stars += '*';
        console.log(stars);
    }
}

rightAngle(3);
rightAngle(5);

var equalateralTri= function(size){
    var stars = '';
    var spaces = '';
    for(var i = 0 ; i < size; i++){
        spaces = '';
        for(var j = size -1-i; j > 0; j--) {
            spaces += ' ';
        }
        stars += '*';
        if(stars.length > 1) {
            stars += '*'
        }
        console.log(spaces+stars);
    }
}

equalateralTri(22);

var fibArray=[0,1];

for(var i = 1; i < 10; i++) {
    var result =fibArray[i-1]+fibArray[i];
    fibArray.push(result);
}
console.log(fibArray);

for(var i= 1; i<=100; i++){
    if (i%3===0 && i%5!=0){
        console.log("Java");
    }
    else if(i%5===0 && i%3!=0){
        console.log("Script");
    }
    else if(i%3===0 && i%5===0){
        console.log("JavaScript");
    }
    else{
        console.log(i);
    }
}