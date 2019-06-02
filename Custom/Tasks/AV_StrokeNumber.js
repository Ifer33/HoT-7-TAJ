main();
//call api customTask(task = "AV_StrokeNumber", delay = 0, sender = -1, rounds = 3)
//see helperFunctions.js
//direct call will send only one line
function main(){
	DMessage("AV_StrokeNumber Task: Beginning");
	let answers = [ 
    [null,"Give me 10 %Crazy% fast strokes",null],
    [null,"Give me 20 %Crazy% fast strokes",null],
    [null,"Give me 30 %Crazy% fast strokes",null],
    [null,"Give me 10 %Crazy% fast strokes",null],
    [null,"Give me 20 %Crazy% fast strokes",null],
    ["checkOldApathyLevel(4)","Give me " + (java.lang.Math.round(randomInt(40, 50) / 10.0) * 10) + "%Crazy% fast strokes",null],
    ["checkOldApathyLevel(5)","Give me " + (java.lang.Math.round(randomInt(40, 60) / 10.0) * 10) + "%Crazy% fast strokes",null],
    ["checkOldApathyLevel(4)","Give me " + (java.lang.Math.round(randomInt(30, 40) / 10.0) * 10) + "%Crazy% fast strokes",null],
    ["checkOldApathyLevel(5)","Give me " + (java.lang.Math.round(randomInt(40, 50) / 10.0) * 10) + "%Crazy% fast strokes",null],
    ["checkOldDommeLevel(4)","Give me " + (java.lang.Math.round(randomInt(30, 40) / 10.0) * 10) + "%Crazy% fast strokes",null],
    ["checkOldDommeLevel(5)","Give me " + (java.lang.Math.round(randomInt(40, 50) / 10.0) * 10) + "%Crazy% fast strokes",null],
    [null,"Give me 10 strokes",null],
    [null,"Give me 20 strokes",null],
    [null,"Give me 30 strokes",null],
    [null,"Give me 40 strokes",null],
    [null,"Give me 50 strokes",null],
    [null,"I want 10 strokes",null],
    [null,"I want 20 strokes",null],
    [null,"I want 30 strokes",null],
    [null,"I want 40 strokes",null],
    [null,"I want 50 strokes",null],
    ["checkOldApathyLevel(4)","I want 60 strokes",null],
    ["checkOldApathyLevel(5)","I want 60 strokes",null],
    [null,"%GNMTaskSpankingIntro% 10 strokes",null],
    [null,"%GNMTaskSpankingIntro% 20 strokes",null],
    [null,"%GNMTaskSpankingIntro% 30 strokes",null],
    [null,"%GNMTaskSpankingIntro% 40 strokes",null] ];

	execRndLine(answers);
	
	DMessage("AV_StrokeNumberGliter1 Task: End");
	return;
}