console.log("hello world");

console.log("JavaScript can use either \"double quotes\" or \'single quotes\' to denote text  ");


var record = "1997,Ford,350,\"Super luxurious\" truck";

var stringArray =record.split(",");

console.log(stringArray);


var bigWord ="JSDFHDVHUEVDAKNDSEINX";

console.log(bigWord.search('[AEIOU]'));

var queryNumber = function(query){
    if(isNaN(query)===true){
        console.log("This is not a number");
    }
    else{
        console.log("this is a number");
    }
}

queryNumber("string");
queryNumber(50);

var tombolapostcode = "SR1 1JR";

function valid_postcode(postcode) {
    postcode = postcode.replace(/\s/g, "");
    var regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
    return regex.test(postcode);
}

//This will check the post code
var isValid = valid_postcode(tombolapostcode);

if (isValid) {

    console.log("yey, this is a postcode man!");

}else {
    console.log("Dude, this is not correct man!");
}