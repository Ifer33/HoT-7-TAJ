main();
//call api customTask(task = "AV_GamesPoints", delay = 0, sender = -1, rounds = 3)
//see helperFunctions.js
//direct call will send only one line
function main(){
	DMessage("AV_GamesPoints Task: Beginning");
	let answers = [ 
    [null,"Slap your %Balls% - left, right, slap","setVar(\"AV_Points\", getVar(\"AV_Points\", 0) + 3"],
    [null,"Pull and twist your %Balls%, hard","setVar(\"AV_Points\", getVar(\"AV_Points\", 0) + 4"],
    [null,"See how far you can pull your %Balls%, and twist","setVar(\"AV_Points\", getVar(\"AV_Points\", 0) + 3"],
    [null,"Twist your cock, you must stay hard","setVar(\"AV_Points\", getVar(\"AV_Points\", 0) + 1"],
    [null,"Rub lightly your finger on the tip of your cock","setVar(\"AV_Points\", getVar(\"AV_Points\", 0) + 1"],
    [null,"Slap your cock from left and right. Slap " + "Slap","setVar(\"AV_Points\", getVar(\"AV_Points\", 0) + 2"],
    [null,"Squeeze your nipples - hard","setVar(\"AV_Points\", getVar(\"AV_Points\", 0) + 4"],
    [null,"Scratch the sides of its head with your nails","setVar(\"AV_Points\", getVar(\"AV_Points\", 0) + 1"],
    [null,"Scratch your nipples with your nails","setVar(\"AV_Points\", getVar(\"AV_Points\", 0) + 1"],
    [null,"Pinch and pull on your nipples " + "It should be painful.","setVar(\"AV_Points\", getVar(\"AV_Points\", 0) + 5"] ];
	
	execRndLine(answers);
	
	DMessage("AV_GamesPoints Task: End");
	return;
}