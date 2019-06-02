main();
//call api customTask(task = "Strokes", delay = 0, sender = -1, rounds = 3)
//see helperFunctions.js
//direct call will send only one line
function main(){
	DMessage("Strokes_First Task: Beginning");
	let answers = [ 
    [null,"Give me 10 slow strokes",null],
    [null,"I want 10 slow strokes",null],
    [null,"10 slow strokes, right now",null],
    [null,"10 slow strokes, do it %PetName%",null],
    [null,"Stroke that %Cock% 10 times, slowly",null],
    [null,"Give me 10 slow but firm strokes, %Name%",null],
    [null,"Give me 15 slow strokes",null],
    [null,"I want 15 slow strokes",null],
    [null,"%PetName% - give me 15 slow strokes, right now",null],
    [null,"15 slow strokes, do it %PetName%",null],
    [null,"Stroke that %Cock% 15 times, slowly",null],
    [null,"Give me 15 slow but firm strokes, %Name%",null],
    [null,"Give me 20 fast strokes",null],
    [null,"I want 20 fast strokes",null],
    [null,"20 fast strokes, right now",null],
    [null,"20 fast strokes, do it %PetName%",null],
    [null,"Stroke that %Cock% 10 times, slowly",null],
    [null,"Give me 20 fast and firm strokes, %Name%",null],
    [null,"Give me 25 really fast strokes",null],
    [null,"I want 25 really fast strokes",null],
    [null,"25 really fast strokes, right now",null],
    [null,"25 really fast strokes, do it %PetName%",null],
    [null,"Stroke that %Cock% 25 times, really fucking fast",null],
    [null,"Give me 10 slow but firm strokes, %Name%",null] ];

    delVar("pvCustomTaskStrA");
	execRndLine(answers);
	
	DMessage("Strokes_First Task: End");
	return;
}