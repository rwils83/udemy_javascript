let age = 25;
let year = 2019;

console.log(age, year);


let new_age = 30;

let new_year = new_age - age + year;

console.log(new_age, new_year);

const points = 100;

console.log(points);


var score = 75;

console.log(score);



let email = "mario@thenetninja.co.uk"

let result = email.lastIndexOf('n');


let result2 = email.slice(4, 10);

let result3 = email.substr(4, 10);

console.log(result, result2, result3);

let result4 = email.replace('n', '4');

console.log(result4);

//numbers
//

let radius = 10;

const pi = 3.14;


// math operators + = * / ^^ %
//

result = radius % 3;

console.log(result);



// template string


const title = "Best reads 2019";
const author = "Mario";
const likes = 30;


// concantenation way

let result6 = "The blog called " + title + " by " + author + " has " + likes + " likes.";

console.log(result6);

// string template way


let result7 = `The blog called ${title} by ${author} has ${likes} likes.`;

console.log(result7);



//html templates

let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span> This blog has ${likes} likes. </span>
`;

console.log(html);

//arrays


let ninjas = ['shaun', 'ryu', 'chun-li'];
let ages = [25, 30, 35];

console.log(ninjas.length);

console.log(ninjas.join(',')); // joins array elements by argument. Will print shaun, ryu, chun-li instead of ['shaun', 'ryu', 'chun-li']

console.log(ninjas.indexOf('chun-li')); //gives index number of argument

console.log(ninjas.concat(ages)); //joins two arrays

console.log(ninjas.push('ken'), ninjas); // adds element to array at the end

// destructive method = changes original values

console.log(ninjas.pop());

console.log(ninjas);

//null and undefined


let age2;

console.log(age2);

let age3 = null;

console.log(age3, age3 + 3);

let age4 = 25;

console.log(age == '25');// will return true because fuck javascript and its loose comparison

console.log(age === '25'); // will return false because again, fuck javascript. Strict comparison is not default. Loose comparison = type conversion strict comparison = no type conversion


