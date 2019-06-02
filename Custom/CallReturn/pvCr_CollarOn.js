main();
function main()
{
	DMessage("pvCr_CollarOn CallReturn: Start");
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage(random("Go get ", "Take out ", "Go fetch ") + "your collar");
    sleep(8);
    CMessage(random("Put it on ", "Put it around your neck ") + "like a good " + random("puppy", "pet", "little doggy", "slave"));
    CMessage(random("I want you ", "You need ") + "to feel " + random("properly owned", "very submissive", "completely under my control"));
    let answer0 = getInput("Is it on?");
    while (!(answer0.isLike("yes") || answer0.isLike("ready") || answer0.isLike("done") || answer0.isLike("did") || answer0.isLike("finished") ))
    {
		if (answer0.isLike("no"))
		{
			answer0 = getInput("Let me know when you\'re ready");
		}else {
			answer0 = getInput("Just tell me when you\'re ready");
		}
    }
    if (answer0.isLike("yes", "ready", "done", "did", "finished"))
    {
        CMessage(random("Good ", "Alright then ", "Good boy ", "Okay ", "Then we can continue ", "Lovely ") + "%Smile%");
        setTempVar("pvCollared", true);
    }
	DMessage("pvCr_CollarOn CallReturn: End");
    return;
}