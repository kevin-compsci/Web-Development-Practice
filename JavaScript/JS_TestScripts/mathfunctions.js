//add 2 values together
function add(num1, num2) {
	return num1+num2;
}

//subtract 2 values
function subtract(num1, num2) {
	return num1-num2;
}

//multiply 2 values
function multiply(num1, num2) {
	return num1*num2;
}

//divide 2 values. Note: does not consider divide by 0
//TODO: assert divide by 0? raise exception?
function divide(num1, num2) {
	return num1/num2;
}

//squares the given value
function square(num1) {
	return num1*num1;
}

//cubes the given value
function cubed(num1) {
	return num1*num1*num1;
}

//returns bigger value
function greaterThan(num1, num2) {
	if(num1 > num2) {
		return num1;
	}
	return num2;
}

//returns smaller value
function lessThan(num1, num2) {
	if(num1 > num2) {
		return num2;
	}
	return num1;
}