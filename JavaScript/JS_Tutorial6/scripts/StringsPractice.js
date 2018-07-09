//Test in DOM, String practice manipulations by Mozilla JS Tutorials

//STRING LENGTH
var browser = "chrome";
alert(browser.length);

//RETRIEVE Nth INDEX IN STRING (OR ARRAY)
alert(browser[0]) //first index
alert(browser[browser.length-1]); //last index

//RETRIEVE SUBSTRING INDEX
alert(browser.indexOf("rom")); //find index for given substring
alert(browser.indexOf("Cookies")); //-1 because it doesn't exist

if(browser.indexOf("rom") !== -1) {
	//substring exists
	alert("Substring does exist!");
}

alert(browser.slice(0,2)); //returns "ch" where 0 inclusive to n-1th index
alert(browser.slice(2)); //returns "rome"

//CHANGE CASE (UPPER vs LOWER)
var someData = "I aM NoT duMB!";
alert(someData.toLowerCase());
alert(someData.toUpperCase());