'use strict';
var numberComparer = function(value1,value2){
    if(value1>value2){
        console.log("Value 1 is bigger!");
    }
    else if(value1===value2){
        console.log("They are both the same");
    }
    else{
        console.log("Value 2 is bigger");
    }
}
numberComparer(2,1);
numberComparer(3,4);
numberComparer(3,3);

var isPositiveProduct = function(value1,value2,value3){
    var result = (value1*value2)*value3;
    console.log("The product is" + " " +result);
    if(result>=0){
        return result
    }
    else{
        console.log("Product is negative!");
    }

}

isPositiveProduct(1,2,3);
isPositiveProduct(1,2,-3);
isPositiveProduct(1,2,0);
var gradeCalc=function(score){
    if(score<40){
        return "F"
    }
    else if(score<50 && score>=40){
        return "E"
    }
    else if(score<60 && score>=50){
        return "D"
    }
    else if(score<70 && score>=60){
        return"C"
    }
    else if(score<80 && score>=70){
        return "B"
    }
    else if(score<100 && score>=80){
        return "A";
    }
}

gradeCalc(39);
gradeCalc(61);
gradeCalc(70);
