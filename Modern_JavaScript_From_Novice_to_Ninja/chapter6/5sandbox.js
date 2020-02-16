const title = document.querySelector('h1');


console.log(title.style);

title.style.margin = "10px";
console.log(title.innerText);
const setSpan = "<span>" + title.innerText + "</span>";
title.innerHTML = setSpan;
title.style.textAlign = "center";
const setBackground = document.querySelector('span');
setBackground.style.backgroundColor = "black";
console.log(title.style);
