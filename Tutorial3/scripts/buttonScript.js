var button = document.querySelector('button');

button.onclick = function() {
	var name = prompt('What is your name?');
	alert('Hello ' + name + '!');
}

var t1 = 'Bob';
t1 = false;

if(t1 === false) {
	alert('t1 is ' + t1);
}
else {
	alert('t1 is ' + t1);
}

//number
var age = 18;

//Strings
var helloWorld = 'Hello World';

//boolean
var myFalse = false;
var myTrue = true;

//Arrays
var myStrArray = ['Bob', 'Henry', 'Lucy'];
var myNumArray = [10,15,40];

if(myStrArray[0] === 'Bob') {
	alert('Array at 0 has ' + myStrArray[0]);
}