const paras = document.querySelector('p');

console.log(paras.innerText);

paras.innerText = 'This shit better work';


const parasAll = document.querySelectorAll('p');

parasAll.forEach(para => {
    para.innerText += ' this is the new text';
    console.log(para.innerText);
});


// const contents = document.querySelector('.content'); // why the hell is this giving a null????

// const content = document.getElementsByClassName('content'); // but this gives what I want....Fucking computers smh

// console.log(contents);

// console.log(content.innerHTML);



const content = document.querySelector('.content');

console.log(content.innerHTML);

content.innerHTML = "<h2> THIS IS SOME NEW SHIT </h2>";

console.log(content.innerHTML);


const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person =>{
    content.innerHTML +=  `<p>${person} is now added`;
});
