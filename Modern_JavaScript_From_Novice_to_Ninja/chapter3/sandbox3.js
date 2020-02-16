const scores = [20, 30, 100, 40, 50, 100];

for(let i = 0; i < scores.length; i++){
	if(scores[i] === 20){continue;}
	if(scores[i] === 100){break;}

	console.log(scores[i]);}

console.log('The loop has broken');
// continue means go back to the top of the loop, break gets you out of the loop

