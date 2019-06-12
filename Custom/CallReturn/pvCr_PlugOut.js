main();
function main()
{
	DMessage("pvCr_PlugOut CallReturn: Start");
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage(random("Go ahead take your buttplug out", "Take that plug out of your ass", "Take out your buttplug now"));
    CMessage(random("Your ass must be all stretched out", "Give that stretched hole a rest", "So your ass can finally relax a little"));
    let answer0 = getInput("Are you ready?");
    while (!(answer0.isLike("yes") || answer0.isLike("ready") || answer0.isLike("done") || answer0.isLike("did") || answer0.isLike("finished") ))
    {
		if(answer0.isLike("no") ){
			answer0 = getInput("Let me know when you are...");
		}else {
			answer0 = getInput("%YesOrNo%");
		}
    }
    if (answer0.isLike("yes", "ready", "done", "did", "finished"))
    {
        CMessage("Good boy");
        delVar("pthevPlugged");
    }
	DMessage("pvCr_PlugOut CallReturn: End");
    return;
}