// callbacks and functions
//



const myFunc = (callbackFunc) => {
	let value = 50; 
	callbackFunc(value);
};

myFunc(function(value){
	console.log(value)
});


// At this point the instructor admits this is too much work for the use case, but there are other times this will be easier



// This part was pretty useful......would have been more useful when we were writing for loops over arrays >:(
//


let namesArray = ['Ryan', 'Skye', 'Damien', 'Danny', 'Little Bean']

namesArray.forEach(function(person){
	console.log(person);
});


