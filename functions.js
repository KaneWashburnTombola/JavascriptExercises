'use strict';

var numOfGallons = function(MPG,distance){
    var gallons = distance/MPG;
    console.log(gallons);
}

numOfGallons(15,315);


var loveCalc=function(name1,name2){
    var foo = (name1.length + name2.length)-(Math.round(Math.random()*6));
    var bar = foo * 42;
    if(bar>100){
        console.log("Your love match is 100");
    }
    else{
        console.log("Your love match is" +" " +  bar);
    }
}


loveCalc("kane","dan");