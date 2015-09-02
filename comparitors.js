'use strict';
var bigNum = function(value1,value2){
    if(value1>value2){
        console.log("Value 1 is bigger!");
    }
    else if(value1===value2){
        console.log("Value 2 is bigger");
    }
    else{
        console.log("They are both the same");
    }
}
bigNum(2,1);
bigNum(3,4);
bigNum(3,3);

var posProd = function(value1,value2,value3){
    var result = (value1*value2)*value3;
    console.log("The product is" + result);
    if(result>0){
        console.log("Product is positive!");
    }
    else{
        console.log("Product is negative!");
    }

}

posProd(1,2,3);
posProd(1,2,-3);

var gradeCalc=function(score){
    if(score<40){
        console.log("Your grade = F");
    }
    else if(score<50 && score>=40){
        console.log("Your grade = E");
    }
    else if(score<60 && score>=50){
        console.log("Your grade = D");
    }
    else if(score<70 && score>=60){
        console.log("Your grade = C");
    }
    else if(score<80 && score>=70){
        console.log("Your grade = B");
    }
    else if(score<100 && score>=80){
        console.log("Your grade = A");
    }
}

gradeCalc(39);
gradeCalc(61);
gradeCalc(70);
