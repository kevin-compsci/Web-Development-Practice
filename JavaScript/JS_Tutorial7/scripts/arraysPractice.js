//Test in DOM, Array practice

var shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
alert(shopping);

//arrays can hold a variety of values
var random = ["TREE", 748, 'c', [0,1], "Test"];

//ACCESSING AND MODIFYING ARRAY ITEMS
alert(shopping[0]); //returns "bread"

shopping[0] = "Buns";
alert(shopping); // "bread" is now "Buns" in the array

//2D arrays possible
//random[2][2]; etc.

//FINDING LENGTH OF ARRAY
alert(shopping.length); //returns 5

var sequence = [0,1,2,3,4,5,6,7];
for(int i : sequence) {
	alert(sequence[i]);
}


//CONVERTING B/W STRINGS AND ARRAYS
var myData = "Manchester,London,Liverpool";

var myArray = myData.split(",");
alert(myArray); //split by ","


alert(myArray.length);
alert(myArray[0]); //returns "Manchester"
alert(myArray[myArray.length-1]) //returns last element


var dogNames = ["Rocket","Flash","Bella","Slugger"];
alert(dogNames.toString());


//INSERTION & DELETION
myArray.push("California"); //appended to the end
alert(myArray);
myArray.push("Texas", "Oregon"); //appended to the end
alert(myArray);
alert(myArray.length);

myArray.pop(); //remove last item
alert(myArray);

myArray.unshift("Edinburgh"); //push to the front
alert(myArray);

var removedItem = myArray.shift(); //pop off the front
alert(myArray);
alert(removedItem);

