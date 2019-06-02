main();
function main()
{
	DMessage("pvCr_CollarOff CallReturn: Start");
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage(random("Take off ", "Remove ") + "your collar, %Name%");
    CMessage(random("Put it away for now", "Put it to the side", "You can put it away for now"));
    let answer0 = getInput("Ready?");
    while (!(answer0.isLike("yes") || answer0.isLike("ready") || answer0.isLike("done") || answer0.isLike("finished") || answer0.isLike("did")))
    {
        answer0 = getInput("Let me know when you are...");
    }
    if (answer0.isLike("yes", "ready", "done", "finished", "did"))
    {
        CMessage(random("Good", "Alright then", "Good boy", "Okay", "Then we can continue"));
        delVar("pvCollared");
    }
	DMessage("pvCr_CollarOff CallReturn: End");
    return;
}