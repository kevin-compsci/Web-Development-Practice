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