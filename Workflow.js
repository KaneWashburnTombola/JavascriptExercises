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


var fibArray=[0,1];

for(var i = 1; i < 10; i++) {
    var result =fibArray[i-1]+fibArray[i];
    fibArray.push(result);
}
console.log(fibArray);