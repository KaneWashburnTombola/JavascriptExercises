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
    var me = this;
    this.start=null;
    this.end=null;
    this.length=0;
};


peopleList.prototype.add = function(object){

    if(this.start===null){
        this.start = object;
        this.end = object;
    }else if(this.end===null){
        this.end = object;
        this.next=object;
    }
    peopleList.prototype.length++;
}

peopleList.prototype.remove = function(object) {
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
        peopleList.prototype.length--;
    }
};

var kane;
peopleList.prototype.add(kane);

var list = new peopleList();
list.add(new Person("kane",24,7542524371));
list.add(new Person("kane",24,7542524371));
console.log(list);