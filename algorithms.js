//Seek and Destroy

function destroyer(arr) {
	var i,
		arrOfArgs = [];

	for(i = 1; i < arguments.length; i += 1) {
		arrOfArgs.push(arguments[i]);
	}

	return arr.filter(function (elem) {
		return !arrOfArgs.includes(elem);
	});
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));


//Where do I belong

function getIndexToIns(arr, num) {
	arr.push(num);
	return arr.sort(function (a, b) {
		return a - b;
	}).indexOf(num);
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 20, 10], 19));
console.log(getIndexToIns([2, 5, 10], 15));


//Sum All Numbers in a Range

function sumAll(arr) {
	var i,
		sum = 0;
	arr = arr.sort(function (a, b) {
		return a - b;
	});

	for (i = arr[0]; i <= arr[1]; i += 1) {
		sum += i;
	}

	return sum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));