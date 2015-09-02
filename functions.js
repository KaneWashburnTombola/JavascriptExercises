'use strict';

var numberOfGallonsNeeded = function(mpg,distance){
    var gallons = distance/mpg;
    return gallons;
}
numberOfGallonsNeeded(15,315);


var loveCalculator=function(name1,name2){
    var foo = (name1.length + name2.length)-(Math.round(Math.random()*6));
    var bar = foo * 42;
    if(bar>100){
        return 100;
    }
    else{
        return bar;
    }
}


loveCalculator("kane","dan");

var circleArea= function(radius){
    var result = (radius*radius)* Math.PI;
    return result;
}

circleArea(20);