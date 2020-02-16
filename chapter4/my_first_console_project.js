// Getting bored with the basic functions in the class, going to try to do a thing to curb the boredom
// This project will use a for loop, while loop, a function, and an empty array
// The function will add 1 to the index number
// I will use the for loop to run the function and add 'Entry number x is at index y of myArray' to the array
// I wlll use a while loop to console.log each element to a new line

let myArray = [];
function addArrayElement(my_var){
	return my_var + 1;}

for(let i = 0; i < 20; i++){
	let entryNumber = addArrayElement(i);
	myArray.push(`Entry number ${entryNumber} is at index ${i} of myArray`);}
let i = 0;
while(i < myArray.length){
	console.log(myArray[i]);
	i++;
}



