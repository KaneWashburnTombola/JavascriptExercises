'use strict';

function rightAngle(size){
    var stars = '';
    for(var i = 0; i < size; i++){
        stars += '*';
        console.log(stars);
    }
}

rightAngle(3);
rightAngle(5);

function rightAngle(size){
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
rightAngle(22);
var fibArray=[0,1];

for(var i = 1; i < 10; i++) {
    var result =fibArray[i-1]+fibArray[i];
    fibArray.push(result);
}
console.log(fibArray);