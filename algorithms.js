//Repeat a string repeat a string

function repeatStringNumTimes(str, num) {
	var i,
		newStr = "";
	for (i = 0; i < num; i += 1) {
		newStr += str;
	}
	return newStr;
}

console.log(repeatStringNumTimes("*", 3));
console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 4));
console.log(repeatStringNumTimes("abc", 1));
console.log(repeatStringNumTimes("*", 8));
console.log(repeatStringNumTimes("abc", -2));


//Truncate a string

function truncateString(str, num) {
	var ending = "...";
	switch(true) {
		case str.length > num && num <= 3: str = str.slice(0, num) + ending; break;
		case str.length > num: str = str.slice(0, num - 3) + ending; break;
	}
	return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));


//Create Ul of Array elements

function addArrElemInUl(arr) {
	var ul = document.createElement("ul"),
		li = [],
		i;
	for(i = 0; i < arr.length; i += 1) {
		li[i] = ul.appendChild(document.createElement("li"));
		li[i].innerText = arr[i];
	}
	document.body.appendChild(ul);
}

addArrElemInUl([8, 7, 6, 5, 4, 3, 2, 1]);


//Cloning input

var input = document.body.appendChild(document.createElement("input")),
	button = document.body.appendChild(document.createElement("button"));

button.innerText = "<---Clone this input";

button.onclick = function() {
	var inputClone = input.cloneNode(true);
	document.body.appendChild(inputClone);
}


//Checking Array for Negative Elements

function isThereNegativeElem(arr) {
	return arr.some(function(element){
		return element < 0;
	});
}

console.log(isThereNegativeElem([12, 4, 9, 7, 8]));
console.log(isThereNegativeElem([97, 7, -3, -12, 56]));
console.log(isThereNegativeElem([1, 2, 3, 4, 5, 6, 7]));
console.log(isThereNegativeElem([-45, 56, -12, 78]));
console.log(isThereNegativeElem([30, 45, 89, 7, -3]));
