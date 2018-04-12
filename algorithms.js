//Sorted Union

function uniteUnique(arr) {
	var arrOfArgs = Array.prototype.slice.call(arguments).reduce(function (a, b) {
			return a.concat(b);
		}),
		uniqueArr = [];

	return arrOfArgs.filter(function (elem) {
		if (uniqueArr.includes(elem)) {
			return false;
		}
		else {
			uniqueArr.push(elem);
			return elem;
		}
	});
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));


//Binary Agents

function binaryAgent(str) {
	var arrOfUnicodeNumbs = str.split(" ").map(function (elem) {
		return parseInt(elem, 2);
	});

	return arrOfUnicodeNumbs.map(function (elem) {
		return String.fromCharCode(elem);
	}).join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));


//Diff Two Arrays

function diffArray(arr1, arr2) {
	var newArr = arr1.concat(arr2);
	return newArr.filter(function (elem) {
		return !arr1.includes(elem) || !arr2.includes(elem);
	});
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));