// Task 1. function convert
function convert(){
	let arr = [];
	for (let i=0; i<arguments.length; i++){
		arr.push(typeof arguments[i] === 'number' ? String(arguments[i]) : Number(arguments[i]));
	}
	return arr;
}

// Task 2. ExecuteforEach
function executeforEach(arr, func){
	for (let i=0; i<arr.length; i++){
		func(arr[i]);
	}
}

// Task 3. MapArray
function mapArray(arr, func){
	let transformationArr = [];
	executeforEach(arr, item => transformationArr.push(func(+item)));
	return transformationArr;
}

// Task 4. FilterArray
function filterArray(arr, func){
	let filterArr = [];
	executeforEach(arr, item => {
		if (func(item)){
			filterArr.push(item);
		}
	});
	return filterArr;
}

// Task 5. FlipOver
function flipOver(string){
	let newString = '';
	for (let i=string.length-1; i>= 0; i--){
		newString += string[i];
	}
	return newString;
}

// Task 6. MakeListFromRange
function makeListFromRange(arr){
	let newArr = [];
	for (let i =arr[0]; i<=arr[1]; i++){
		newArr.push(i);
	}
	return newArr;
}

// Task 7. ArrayOfKeys
function getArrayOfKeys(arr, key){
	let newArr = [];
	executeforEach(arr, item => newArr.push(item[key]));
	return newArr;
}

// Task 8. Substitute
const numRestriction = 30;
function substitute(arr){
	let newArr =[];
	executeforEach(arr, item => newArr.push(item < numRestriction ? '*' : item));
	return newArr;
}

// Task 9. PastDay
function getPastDay(date, days){
	let newDate = new Date(date);
	newDate.setDate(date.getDate() - days);
	return newDate;
}

// Task 10. FormatDate
function formatDate(date){
	const Minimal_Value_Time = 10;
	let hours = date.getHours() < Minimal_Value_Time ? '0' + date.getHours() : date.getHours();
	let minutes = date.getMinutes() < Minimal_Value_Time ? '0' + date.getMinutes() : date.getMinutes();
	return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${hours}:${minutes}`;
}
