console.log("hello world");

console.log("JavaScript can use either \"double quotes\" or \'single quotes\' to denote text  ");


var record = "1997,Ford,350,\"Super luxurious\" truck";

var stringArray =record.split(",");

console.log(stringArray);


var bigWord ="JSDFHDVHUEVDAKNDSEINX";

console.log(bigWord.search('[AEIOU]'));

var queryNumber = function(query) {
    query = query.replace(/\s/g, ""); //gets rid of white space
    var regex = /[0-9]+/i;
    return regex.test(query);
}


 var validQuery= queryNumber("string");

     if(validQuery){
        console.log("this is a number");
    }
    else{
        console.log("This is not a number");
    }



var tombolapostcode = "SR1 1JR";

function valid_postcode(postcode) {
    postcode = postcode.replace(/\s/g, "");
    var regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
    return regex.test(postcode);
}


var isValid = valid_postcode(tombolapostcode);

if (isValid) {

    console.log("yey, this is a postcode man!");

}else {
    console.log("Dude, this is not correct man!");
}