main();
function main()
{
	DMessage("pvCr_TieMyBalls CallReturn: Start");
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage(random("Go ahead and ", "You should ", "I want you to ", "Why don\'t you ", "You\'re going to ") + "tie up those %Balls% " + random("for me ", "right now ", "now ") + "%Name%");
    CMessage(random("So go get a ", "Now get out that ", "That is why you have that ") + "shoelace");
    CMessage("Make it tight, but not too tight");
    sleep(10);
    let answer0 = getInput("Ready?");
    while (!(answer0.isLike("yes") || answer0.isLike("ready") || answer0.isLike("done") ))
    {
		if (answer0.isLike("no")){
			answer0 = getInput("I\'ll wait, let me know when you\'re done");
		}else {
			answer0 = getInput("Are you ready?");
		}
    }
    if (answer0.isLike("yes", "ready", "done"))
    {
        CMessage("Good");
    }
    setTempVar("pvBallsTied", true);
    setTempVar("AV_BallTied", true);
	DMessage("pvCr_TieMyBalls CallReturn: End");
    return;
}