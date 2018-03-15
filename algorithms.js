// Reverse a String

function reverseString(str) {
	str = str.split("").reverse().join("");
	return str;
}

reverseString("hello");

reverseString("Howdy");

reverseString("Greetings from Earth");


//Reverse a String (reverse method as function)

function reverseString(str) {
	function myReverse(arr) {
		var i,
			newArr = new Array();
		for(i = 0; i < arr.length; i++) {
			newArr[(arr.length-1)-i] = arr[i];
		}
		return newArr;
	}
	str = myReverse(str.split("")).join("");
	return str;
}

reverseString("hello");

reverseString("Howdy");

reverseString("Greetings from Earth");


//Factorialize a Number

function factorialize(num) {
	var res;

	if(num <= 0) {
		return 1;
	}
	else {
		res = num * factorialize(num-1);
		return res;
	}
}

factorialize(5);

factorialize(10);

factorialize(20);

factorialize(0);