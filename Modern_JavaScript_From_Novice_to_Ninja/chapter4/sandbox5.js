const name = 'ryan';

// funcitons


const greet = () => 'hello';

let resultOne = greet();
console.log(resultOne);




// methods
//
// In my boredom I am going to try somethig stupid
//


let resultTwo = resultOne.toUpperCase();

console.log(resultTwo);

// It worked so now it will stay
//

// the actual lesson comes back here
//

let resultThree = name.toUpperCase();

console.log(resultThree);


// more stupid testing shit
//


//let resultFour = name.capitalize(); nope, not a method
//
// let resultFour = name.toCapital(); also not a method
// finally googled it......what a stupid thing to have to do to get a capital first letter. 
let resultFour = name.charAt(0).toUpperCase() + name.substr(1);

console.log(resultFour);
