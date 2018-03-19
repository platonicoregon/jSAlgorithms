// Find the Longest Word in a String

function findLongestWord(str) {
	var i,
		arrOfStr = str.split(" ");
	for(i = 0, str = arrOfStr[0]; i < arrOfStr.length; i += 1) {
		if(str.length < arrOfStr[i].length) {
			str = arrOfStr[i];
		}
	}
	return str.length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("May the force be with you"));
console.log(findLongestWord("Google do a barrel roll"));
console.log(findLongestWord("What is the average airspeed velocity of an unladen swallow"));
console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"));


//Title Case a Sentence

function titleCase(str) {
	var i,
		j,
		arrOfStr = str.split(" ");
	for(i = 0; i < arrOfStr.length; arrOfStr[i] = arrOfStr[i].join(""), i += 1) {
		arrOfStr[i] = arrOfStr[i].split("");
		arrOfStr[i][0] = arrOfStr[i][0].toUpperCase();
		for(j = 1; j < arrOfStr[i].length; arrOfStr[i][j] = arrOfStr[i][j].toLowerCase(), j += 1) {}
	}
	return arrOfStr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));


//Arithmetic mean of Array of numbers

function arithmeticMean(arr) {
	var result = 0,
		i;
	for(i = 0; i < arr.length; result += arr[i], i += 1) {}
	return result / arr.length;
}

console.log(arithmeticMean([12, 15, 20, 25, 59, 79]));


//Square root of positive numbers in Array

function sqrOfPositivNum(arr) {
	var i;
	for(i = 0; i < arr.length; arr[i] = Math.sqrt(arr[i]), i += 1) {
		if(arr[i] < 0) {
			arr.splice(i, 1);
		}
	}
	return arr;
}

console.log(sqrOfPositivNum([-9, 9, 12, 14, -100, 100, 90, 16, -4, 8, 36, 81]));