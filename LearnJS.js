
alternate = true;
console.log(alternate + " " + typeof(alternate));

let numbers =[3,4,5];
numbers.push(8);

console.log(numbers[0] + numbers[2]);
console.log(numbers.length);

numbers.pop();

console.log(numbers);


/*console.log(carId);
var carId = 200;*/

//let is prefered as it helps identify use of a variable before its declared.


//REST PARAMETERS

/*function sendOrders(...orderIds){
	orderIds.forEach(id => console.log(id));
}

sendOrders(2,3,4,5,6,7,8);

//rest parameters can be mixed with normal parameters. 

function sendOrders(date, ...orderIds){
	orderIds.forEach(id => console.log(id));
}

sendOrders('Wednesday', 2,3,4,5,6,7,8);*/




//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%




//DESTRUCTURING ARRAYS

/*let productIds = ['01','02','03'];
let [shorts, shirts, jackets] = productIds;

console.log(shorts, shirts, jackets);*/



//adding rest parameters

/*let prodIds = ['01','02','03'];
let [shorts, ...otherItems] = prodIds;
console.log(shorts, otherItems);*/

//skipping values in an array using commas.

/*
let productIds = [12, 13, 14, 15, 17];
let pdct1, pdct2, pdct3, theRest;
[,pdct2, ...theRest] = productIds;

console.log(pdct1, pdct2, theRest);
*/





//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%




//DESTRUCTURING OBJECTS


/*let product = { id: 01, type: 'pants'};
let id, type;
({id, type} = product);
console.log(id, type);*/

//SPREAD SYNTAX (this is the opposite of rest parameters) 


//example1
/*function startProducts (pdct1, pdct2, pdct3){
	console.log(pdct1, pdct2, pdct3);
}

let pdctIds = [20, 21, 22];
startProducts(...pdctIds);*/



//example2
/*const startProducts = (pdct1, pdct2, pdct3) => {
	console.log(pdct1, pdct2, pdct3);
} 

let productCodes = 'dan';
startProducts(...productCodes);*/



//example3
/*const startProducts = (pdct1, pdct2, pdct3, ...others) => {
	console.log(others);
}

let pdctIds = [29, 30, 31, 32, 33, 34, 35];
startProducts(...pdctIds);*/




//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%




//TYPEOF 

//example1

/*console.log(Number.parseInt('292ADS5'));

console.log(typeof(Number.parseInt('2343')));

console.log(Number.parseFloat('32.432'));*/




//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//CONTROLLING LOOPS

//example1

/*let i = 0;
for(; i<12; i++){
	if(i==9){
		break;
	}
	console.log(i);
}*/



//example2

/*for(i=0; i<12; i++){
	if(i==4){
		continue;
	}
	console.log(i);
}*/



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//OPERATORS

//EQUALITY OPERATORS

//example1

/*let name1 = '1';
let name2 = 1;

if(name1 == name2){
	console.log(name1, name2);
}
else{
	console.log('names dont match');
}*/

//example2

//use of triple equal signs... this is stricter than the double equal sign... the values and the types of the variables all have to be the same.

/*let name1 = '1';
let name2 = 1;

if(name1 === name2){
	console.log(name1, name2);
}
else{
	console.log('names dont match');
}*/




//example3

/*name1 = 'Agwa';
console.log(name1.toUpperCase());

name1 = 'PETER';
console.log(name1.toLowerCase());*/ 



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



//FUNCTION SCOPE


//example 1

/*const startCar = (carId) => {
	let message = 'Starting...';
	console.log(message);
}
startCar();
*/


//example 2

/*const addProduct = (productId) => {
	let productName = 'Shoes';
	console.log(productName);

	const renameProduct = () => {
		console.log(productName);
	}
	renameProduct();
}

addProduct();*/

//IIFE's (Immediately Invoked Function Expression)

//example 3

/*let app = (func() {
	let name = 'Jesse';
	console.log('Name...');
	return {};

}) ();

console.log(app);*/


/*var now = new Date();
console.log(now);
*/



//example 4

let app1 = (function(){
	const cow = 'Fresian';
	console.log('Fresian');
	return{cow};
}
) ();

console.log(app1);