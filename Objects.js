'use strict';
var recipe={
    title:'Sunday Dinner',
    servings:4,
    ingredients:['meat','potatoes','broccoli','carrots','cabbage','stuffing','peas','yorkshire puddings','gravy granules']
};

var Person =function(name,age,number){
    var me = this;
    this.name=name;
    this.age=age;
    this.number=number;
    var displayDetails=function(){
        console.log(me);
    };
    this.showDetails=function(){
        displayDetails();
    }
};

var kane = new Person('Kane',24,'None of your business');
kane.showDetails();