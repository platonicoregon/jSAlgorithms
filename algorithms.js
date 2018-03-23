// Return Largest Numbers in Arrays

function largestOfFour(arr) {
	var i,
		j,
		largestNum = -Infinity,
		arrOfLargestNums = [];

	for(i = 0; i < arr.length; largestNum = -Infinity, i += 1) {
		for(j = 0; j < arr[i].length; j += 1) {
			if(arr[i][j] > largestNum) {
				largestNum = arr[i][j];
			}
		}
		arrOfLargestNums.push(largestNum);
	}
	return arrOfLargestNums;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));


//Confirm the Ending

function confirmEnding(str, target) {
	return target === str.substring(str.length - target.length);
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "same"));
console.log(confirmEnding("Open sesame", "pen"));
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));


//Function counting itself in code

function countingItself() {
	var count = 0;
	return function() {
		console.log(count += 1);
	};
}

var func = countingItself();

func();
func();
func();
func();


//Fibonacci numbers

function fibonacciNumbs() {
	var i,
		firstFibNum = 0,
		secondFibNum = 1,
		nextFibNum,
		arrOfFibNumbs = [],
		iterationCounter = 0;
	for(i = 1; i <= 10; i += 1) {
		arrOfFibNumbs.push(firstFibNum);
		nextFibNum = secondFibNum + firstFibNum;
		firstFibNum = secondFibNum;
		secondFibNum = nextFibNum;
		iterationCounter += 1;
	}
	console.log("Проведено " + iterationCounter + " итераций");
	return arrOfFibNumbs;
}

console.log(fibonacciNumbs());