main();
function main()
{
	DMessage("pvCr_NotWantPlug: Start");
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage("I don\'t like it when you say \'no\' to me, %Name%");
    increaseAnger(4)	//should be more??
    let answer0 = getInput("Are you going to wear your butt plug for me, yes or no?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good");
        said_yes();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("If that\'s how it\'s going to be...");
    }
    CMessage("Put away your butt plug");
    //--Command:InterruptsOn	//not needed in TAJ??
	run("Interrupt" + java.io.File.separator + "pvInt_Punishment.js");
	DMessage("pvCr_NotWantPlug: End");
    return;
    said_yes();
}
function said_yes()
{
    CMessage("Then do as I say, %Name%");
    let answer0 = getInput("Let me know when you\'re ready");
    while (!(answer0.isLike("done") || answer0.isLike("did") || answer0.isLike("ready") || answer0.isLike("finished") || answer0.isLike("yes")))
    {
        answer0 = getInput("Just say \'ready\' when you are, %SubName% %EmoteFlustered%");
    }
    if (answer0.isLike("done", "did", "ready", "finished", "yes"))
    {
        CMessage(random("Good ", "Alright ", "There you go ", "That\'s much better ") + "%Smile%");
        setTempVar("pthevPlugged", true);
    }
    CMessage(random("That plug fills you up nicely ", "I don\'t know why I don\'t do this more often ", "Plugged like a good slut ") + "%Grin%");
	run("Interrupt" + java.io.File.separator + "pvIn_General.js");
	DMessage("pvCr_NotWantPlug: End");
    return;
}