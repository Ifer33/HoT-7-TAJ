main();
function main()
{
	DMessage("pvCr_UnTieMyBalls CallReturn: Start");
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage(random("You can ", "Go ahead and ", "You should ", "Why don\'t you ") + "untie those %Balls% now");
    delVar("pvBallsTied");
    let answer0 = getInput(random("Let me know ", "Tell me ") + "when you\'re ready to continue");
    while (!(answer0.isLike("ready") || answer0.isLike("done") || answer0.isLike("finished") || answer0.isLike("continue") || answer0.isLike("yes")))
    {
        answer0 = getInput("Let me know when you\'re ready, I\'ll wait");
    }
    if (answer0.isLike("ready", "done", "finished", "continue", "yes"))
    {
        CMessage("Okay, %Name%");
    }
    CMessage(random("Better ", "Feels good ", "Good to be free ") + "right? %Smile%");
	DMessage("pvCr_UnTieMyBalls CallReturn: End");
    return;
}