//string manipulation practice in DOM

var str = 'The revolution is dull!';
str;

//var badStr = test;
//var badStr2 = 'Test;
//var badStr3 = Test';

var maybeBadStr = str; //works b/c str is already defined!
maybeBadStr;


//quotes single vs double
var sgl = 'Single Quotes.';
var dbl = "Double QUotes.";
sgl;
dbl;

//var badQuotes = 'What on earth?!";
var sglDbl = 'Would you eat a "fish supper"?';
var dblSgl = "I'm feeling blue.";
sglDbl
dblSgl;


//escape special chars
var bigmouth = 'I\'ve got no right';
bigmouth;


//concatentation
var part1 = "Hello";
var part2 = "World";
var joined = part1 + part2;
joined;

var multi = part1 + part1 + part1 + part1;
multi;

var respond = part1 + " there!";
respond;

var btn = document.querySelector('button');

btn.onclick = function() {
	var name = prompt('What is your name?');
	alert("Hello " + name);
}


//numbers vs strings
var date = '19' + '67';
typeof date;

var myStr = '123';
var myNum = Number(myStr); //convert arg into number
var newStr = myNum.toString(); //convert to String
typeof myNum;
typeof newStr;