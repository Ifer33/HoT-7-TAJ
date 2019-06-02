main();
//call api cbt(cockOrBalls = "both"("ball","cock"), delay = 0, sender = -1, rounds = 3)
//see helperFunctions.js
//direct call will send only one line
function main(){
	DMessage("CBTBalls_First Task: Beginning");
	let answers = [ [null,"Give yourself 10 good ball smacks %Grin%",null],
    [null,"Swat those balls 5 times in a row",null],
    [null,"Swat those balls a few times",null],
    [null,"Give yourself one good punch in the balls %Grin%",null],
    [null,"15 smacks on each ball",null],
    [null,"Give me 5 good hard back and forth smacks to each ball",null],
    [null,"Give me 10 ball smacks",null],
    [null,"Just smack each ball one time, but make it good %Grin%",null],
    [null,"Smack your balls a few times and make it count",null],
    [null,"Grab your balls in your hand and flick each one hard with your finger a few times",null],
    [null,"Smack those balls 5 times","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank5.mp3\")"],
    [null,"Smack those balls 10 times",null],
    [null,"Give your balls a few good smacks",null],
    [null,"Smack your balls 10 times","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank10.mp3\")"] ];
	
	execRndLine(answers);
	
	DMessage("CBTBalls_First Task: End");
	return;
}