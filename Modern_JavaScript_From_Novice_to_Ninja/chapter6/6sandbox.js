//const content = document.querySelector('p');

//const title = document.querySelector('h1');

//function changeTitle(){
//    title.style.textAlign = "center"
//    let setSpan = "<span>" + title.innerText + "</span>";
//    title.innerHTML = setSpan;
//    let span = document.querySelector('span');
//    span.style.backgroundColor = "black";
//}

//changeTitle();

//console.log(content.classList);

//content.classList.add('fucked');


//console.log(content.classList);

//content.classList.remove('error');

//console.log(content.classList);

///////////////////////////
// Challenge start here //
/////////////////////////

// My solution
const challenge = document.querySelectorAll('p');

console.log(challenge);

for(let i = 0; i < challenge.length;i++){
    let split = challenge[i].innerText.split(" ");
    split.forEach(word =>{
        if (word == "success"){
            challenge[i].classList.add('success');
        }
        if (word == 'error'){
            challenge[i].classList.add('error');
        }

    })
}

// I didn't download the CSS stylesheet, so to verify the classes were added I added this block of code
for(let i = 0; i < challenge.length;i++){
    console.log(challenge[i].innerText + ". Class = " + challenge[i].classList);
}


// Instructor solution


const paras = document.querySelectorAll('p');

paras.forEach(p => {
    if (p.textContent.includes('error')){   // textContent was not discussed until this point. The difference is innerText only shows what is
        p.classList.add('error');           // visible, textContent shows text that isn't displayed
    }
    if (p.textContent.includes('success')){   // Actually, he used innerText here, but only to show that it would work in this case
        p.classList.add('success');           // I also forgot about the includes method, so I split into an array and looped over
    }                                         // the array. The instructor method is better, it requires less processing
});


////////////////////////////////////////////////////////
// challenge ends, instruction starts here /////////////
////////////////////////////////////////////////////////


const title = document.querySelector('.title');


title.classList.toggle('test');    // toggle method adds class if not present, removes if present
