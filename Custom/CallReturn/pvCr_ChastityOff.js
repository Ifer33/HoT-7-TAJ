main();
function main()
{
	DMessage("pvCR_chastityOff: start");
    CMessage(random("Take off the cage ", "Take your chastity device off ", "Remove the chastity cage ") + "%Name%");
    //--Command:ChastityOff
	setVar("chastityOn", false);
    let answer0 = getInput("Let me know when you\'re ready to continue");
    while (!(answer0.isLike("ready") || answer0.isLike("done") || answer0.isLike("finished") || answer0.isLike("yes") || answer0.isLike("okay") ))
    {
		if (answer0.isLike("no"))
		{
			answer0 = getInput("Let me know when you\'re ready");
		}else if (answer0.isLike("yes", "okay"))
		{
			answer0 = getInput("I\'m waiting...");
		}else {
			answer0 = getInput("Let me know when you\'re ready");
		}
    }
    if (answer0.isLike("ready", "done", "finished"))
    {
        CMessage("Good");
    }
    
    CMessage("You " + random("are probably ", "must be ") + random("very happy ", "glad ", "relieved ") + "to " + random("be free ", "have that thing out ", "be unrestricted ") + random("once more ", "again ") + "%Smile%");
	DMessage("pvCR_chastityOff: end");
    return;
}