// contorl logic seciton
//
// For loops
//


for(let i = 0; i < 5; i++){
	console.log(i);}

console.log('Loop finished');

const namesArray = ['Ryan', 'Skye', 'Danny', 'Damien']

for(let name = 0; name < namesArray.length;name++){
	console.log(namesArray[name]);}

console.log('name loop finished')


// While loops
//

let i = 0;
while(i < 5){
	console.log(i);
	i++;
}

console.log('While loop finished');

i = 0;
while(i < namesArray.length){
	console.log(namesArray[i]);
	i++;
}

console.log('Name while loop finished');

// do while
//
do{
	console.log(i);
	i++;
} while(i<5);
console.log('test');


//if statements

const password = 'p@ss';

if(password.length >= 12 && password.includes('@')){
	console.log('Good Password');}
else if (password.lenth >= 8 || password.includes('@')){
	console.log('Short but strongish');}
else {
	console.log('Try Harder-- Offensive Security always');}

