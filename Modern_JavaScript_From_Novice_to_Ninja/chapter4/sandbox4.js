// Arrow functions (I may have missed one of the lesson files)



const calcArea = function(radius){
	return 3.14 * radius ** 2;
};

const calcAreaArrow = (radius) => {
	return 3.14 * radius ** 2;
};

const area = calcArea(5);

const areaArrow = calcAreaArrow(5);

console.log(area, areaArrow);

const calcAreaArrowSimplified1 = radius => {return 3.14 * radius ** 2;} // without parens only works with a single param

const areaArrowSimplified1 = calcAreaArrowSimplified1(5);

console.log(area, areaArrow, areaArrowSimplified1);

const calcAreaArrowSimplified2 = radius => 3.14 * radius ** 2; // works if only a return statement

const areaArrowSimplified2 = calcAreaArrowSimplified2(5);

console.log(area, areaArrow, areaArrowSimplified1, areaArrowSimplified2);


const greet = () => 'hello world';

console.log(greet());

const bill = (products, tax) => {let total = 0; for(let i = 0; i < products.length; i++){total += products[i] + products[i] * tax;}return total;}

console.log(bill([1,2], .07));





