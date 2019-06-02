main();
//call api customTask(task = "AV_StrokeNumberGliter3", delay = 0, sender = -1, rounds = 3)
//see helperFunctions.js
//direct call will send only one line
function main(){
	DMessage("AV_StrokeNumberGliter3_First Task: Beginning");
	let answers = [ 
    [null,"Give me 10 %Crazy% fast strokes",null],
    [null,"Give me 20 %Crazy% fast strokes",null],
    [null,"Give me 30 %Crazy% fast strokes",null],
    [null,"Give me 40 %Crazy% fast strokes",null],
    [null,"Give me 10 strokes",null],
    [null,"Give me 20 strokes",null],
    [null,"Give me 30 strokes",null],
    [null,"Give me 40 strokes",null],
    [null,"Give me 50 strokes",null],
    [null,"Give me 60 strokes",null],
    [null,"I want 10 strokes",null],
    [null,"I want 20 strokes",null],
    [null,"I want 30 strokes",null],
    [null,"I want 40 strokes",null],
    [null,"I want 50 strokes",null],
    [null,"I want 60 strokes",null] ];

	setVar("sendDelay",-1);
	setVar("sendSender",4);
	execRndLine(answers);
	
	DMessage("AV_StrokeNumberGliter3_First Task: End");
	return;
}