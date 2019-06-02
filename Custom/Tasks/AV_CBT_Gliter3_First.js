main();
//call api customTask(task = "AV_CBT_Gliter3", delay = 0, sender = -1, rounds = 3)
//see helperFunctions.js
//direct call will send only one line
function main(){
	DMessage("AV_CBT_Gliter3_First Task: Beginning");
	let answers = [ 
    [null,"Smack your balls a few times",null],
    [null,"Let\'s give those balls 5  Smacks %EmoteHappy%",null],
    [null,"Give yourself 10 good cock  Smacks %Grin%",null],
    [null,"Slap that %Cock% 5 times in a row",null],
    [null,"Swat that %Cock% with your palm a few times",null],
    [null,"Give yourself one good  Smack on the head of your cock %Grin%",null],
    [null,"I want 15 cock slaps",null],
    [null,"Give me 5 good slaps on the head of your cock, make it sting",null],
    [null,"Give me 10 cock slaps",null],
    [null,"Smack your cock one time as hard as you can %Grin%",null],
    [null,"Smack your cock a few times and make it count",null] ];

	setVar("sendDelay",-1);
	setVar("sendSender",4);
	execRndLine(answers);
	
	DMessage("AV_CBT_Gliter3_First Task: End");
	return;
}