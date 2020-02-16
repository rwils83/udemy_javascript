const link = document.querySelector('a');

const error = document.querySelector('p');


console.log(link.getAttribute('href'));

link.setAttribute('href', 'www.fucker.com');

link.innerText = 'Fucker';

console.log(link.getAttribute('href'));


const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));

mssg.setAttribute('class', 'shithead');

console.log(mssg.getAttribute('class'));

console.log(mssg.getAttribute('style'));
mssg.setAttribute('style', 'great');

console.log(mssg.getAttribute('style'));
