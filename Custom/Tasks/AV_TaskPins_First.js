main();
//call api customTask(task = "AV_Task_Pins", delay = 0, sender = -1, rounds = 3)
//see helperFunctions.js
//direct call will send only one line
function main(){
	DMessage("AV_Task_Pins_First Task: Beginning");
	let answers = [ 
    [null,"Put 1 clothespin on your balls just for fun",null],
    [null,"Put 1 clothespins on your %Balls%",null],
    [null,"Put 1 clothespins on your nipple",null],
    [null,"Put 1 clothespins anywhere you can",null],
    [null,"Place 1 clothespins on your %Balls%",null],
    [null,"Put 1 clothespins on your %Balls%",null] ];
	
	execRndLine(answers);
	
	DMessage("AV_Task_Pins_First Task: End");
	return;
}