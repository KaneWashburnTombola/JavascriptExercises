'use strict';
var recipe={
    title:'Sunday Dinner',
    servings:4,
    ingredients:['meat','potatoes','broccoli','carrots','cabbage','stuffing','peas','yorkshire puddings','gravy granules']
};

var Person =function(){
    var me = this;
    this.name,
    this.age,
    this.number,
    var displayDetails=function(){
        console.log(me);
    };
    this.showDetails=function(){
        displayDetails();
    }
};

var kane = new Person();
kane.name='Kane';
kane.age=24;
kane.number='None of your business';




kane.showDetails();