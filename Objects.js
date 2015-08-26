'use strict';
var recipe={
    title:'Sunday Dinner',
    servings:4,
    ingredients:['meat','potatoes','broccoli','carrots','cabbage','stuffing','peas','yorkshire puddings','gravy granules']
};

var Person =function(name,age,number){
    var me = this;
    this.next = null;
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


var peopleList = function(){
    this.start=null;
    this.end=null;
    this.length=0;
};


peopleList.prototype.add = function(name,age,number){

    var newNode = new Person('Kane',24,'None of your business');

    if(this.start===null){
        this.start = newNode;
    }else{
        this.end.next=newNode;
    }

    this.length++;
    this.end = newNode;
}

peopleList.prototype.remove = function(name,age,number) {
    if (this.start === null) {
        return;
    }
    var previous = null;
    var current = this.start;

    while (current !== null){
        previous = current;
        current = current.next;
    }

    if (current !== null) {
        if (previous === null) {
            this.start = this.start.next;
        }
        if (current.next === null) {
            this.end = previous;
            if(this.end !== null) {
                this.end.next = null;
            }
        }
        if ((previous !== null) && (current.next !== null)) {
            previous.next = current.next;
        }
        this.length--;
    }
};