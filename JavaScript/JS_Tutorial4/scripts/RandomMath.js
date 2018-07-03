//Test in DOM

var myInteger = 4;
var myFloat = 7.5;
myInteger;
myFloat;

typeof myInteger; //should be the same type "Number"
typeof myFloat; //should be the same type "Number"

if((typeof myInteger) === (typeof myFloat)) {
	alert("Same types!");	
}
else {
	alert("These vars are not the same type..");
}


//operators
alert("5 + 7 = " + (5+7));
alert("5 - 7 = " + (5-7));
alert("5 * 7 = " + (5*7));
alert("5 / 7 = " + (5/7));
alert("5 % 7 = " + (5%7));


//var operations
var num1 = 10;
var num2 = 50;
9*num1;
alert(num2/num1);

5+10*3;
num2 % 9 * num1;
num2 + num1 / 8 + 2;


//precedence: PEMDAS still applies
num2 = 10;
num1 = 50;
(num2+num1) / (8/2);


//increment and decrement
var myInc = 10;
myInc++;

var myDec = 11;
myDec--;