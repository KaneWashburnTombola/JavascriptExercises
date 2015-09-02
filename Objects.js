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
        return me;
    };
    this.showDetails=function(){
        displayDetails();
    }
};


var Node = function(nodeValue){
    var me = this;
    me.value = nodeValue;
    me.next = null;
    me.previous=null;

    me.remove = function(){
        if(me.next === null){
            return;
        }
        else if( me.next.next === null){
            me.next = null;
        }
        else {
            me.next = me.next.next;
        }
    };
    me.insert = function(newNode){
        if(me.next !== null){
            newNode.next=me.next;
            newNode.previous=me;
            newNode.next.previous = newNode;
            newNode.previous.next=newNode;
        }
        else {
            me.next = newNode;
            newNode.previous=me;
        }
    };
    me.insertBefore=function(newNode){
        if(me.previous!==null){
            newNode.next=me;
            newNode.previous=me.previous;
            newNode.next.previous = newNode;
            newNode.previous.next=newNode;
        }
        else{
            me.previous = newNode;
            newNode.next=me;

        }
    };
    me.removeBefore=function(newNode){
        if(me.previous===null){
            return;
        }
        else if (me.previous.previous===null){
            return me;
        }
        else{

            me.previous= me.previous.previous;
            me.previous.next=me;
        }
    }
}
var outputList = function(listStart){
    var current = listStart;
    if(current === null)
    {
        return;
    }
    while(current.next !== null){
        console.log(current.value);
        current = current.next;
    }
    console.log(current.value);
}

var myNode = new Node(1);

myNode.insert(new Node(2));
myNode.insert(new Node(3));
myNode.insert(new Node(4));
myNode.insert(new Node(5));
myNode.insert(new Node(6));
myNode.insert(new Node(7));

outputList(myNode);

console.log("The New list");

myNode.next.next.remove();

outputList(myNode);

console.log("adding 78 before 6");

myNode.next.next.insertBefore(new Node(78));
outputList(myNode);

myNode = myNode.next.removeBefore();
console.log("       ");
console.log("       ");
console.log("       ");
outputList(myNode);

console.log("       ");
console.log("       ");
console.log("       ");

myNode.next.next.removeBefore();

outputList(myNode);