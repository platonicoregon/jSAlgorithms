//Chunky Monkey

function chunkArrayInGroups(arr, size) {
	var i,
		newArr = [];

	for (i = 0; i < arr.length / size; i += 1) {
		newArr.push(arr.slice(i * size, (i + 1) * size));
	}

	return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));


//Slasher Flick

function slasher(arr, howMany) {
	return arr.slice(howMany);
}

console.log(slasher([1, 2, 3], 2));
console.log(slasher([1, 2, 3], 0));
console.log(slasher([1, 2, 3], 9));
console.log(slasher([1, 2, 3], 4));
console.log(slasher(["burgers", "fries", "shake"], 1));
console.log(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5));


//Add "li" to "ul" and "!" to "li"

var ul = document.body.appendChild(document.createElement("ul")),
	button = document.body.appendChild(document.createElement("button")),
	li = [],
	i;

button.innerText = "Добавить пункт";

for(i = 0; i < 5; i += 1) {
	li[i] = ul.appendChild(document.createElement("li"));
	li[i].innerText = "Пункт";
}

button.onclick = function() {
	li[i] = ul.appendChild(document.createElement("li"));
	li[i].innerText = "Пункт";
	i += 1;
};

ul.addEventListener("click", function(e) {
	if(e.target.tagName === "LI"){
		e.target.innerText += "!";
	}
});


//Checking array for two same elements in a row

function isThereTwoSameInARow(arr) {
	return arr.some(function (elem, index, array) {return elem === array[index + 1];}) === true ? "Yes" : "No";
}

console.log(isThereTwoSameInARow([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(isThereTwoSameInARow([16, 24, 100, 100, 10]));
console.log(isThereTwoSameInARow([3, 6, 9, 7, 4 ,1]));
console.log(isThereTwoSameInARow([7, 5, 1, 1, 9]));
console.log(isThereTwoSameInARow([12, 6, 9, 7, 45]));


//Counting sum of digits

function getDigitsSum(digit) {
	var sum = 0,
		i,
		arrOfDigits = digit.toString().split("");

	for(i = 0; i < arrOfDigits.length; i += 1) {
		sum += +arrOfDigits[i];
	}

	return sum;
}

console.log(getDigitsSum(6427));
console.log(getDigitsSum(1234));
console.log(getDigitsSum(5213));
console.log(getDigitsSum(7412));
console.log(getDigitsSum(65));