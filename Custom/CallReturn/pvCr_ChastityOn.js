main();
function main()
{
	DMessage("pvCR_chastityOn: start");
    CMessage(random("Put on your chastity device ", "Put that cock in its cage ") + "%Name%");
    //--Command:CustomMode(%pvDontWantTo%,Goto,not want)
    CMessage(random("I want it locked away", "I don\'t want you to play with it anymore"));
    let answer0 = getInput("Let me know when you\'re ready to continue");
    while (!(answer0.isLike("ready") || answer0.isLike("done") || answer0.isLike("finished") || answer0.isLike("don't want to") || answer0.isLike("do not want to") || answer0.isLike("don't want that") || answer0.isLike("do not want that") || answer0.isLike("don't make me") || answer0.isLike("do not make me")))
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
        CMessage(random("Good", "Alright", "Okay"));
    }
    else if (answer0.isLike("don't want to", "do not want to", "don't want that", "do not want that", "don't make me", "do not make me"))
    {
        not_want();
        return;
    }
    CMessage("%pvMuchBetterInChastity%");
	setVar("chastityOn", true);
    //--Command:ChastityOn
    //--Command:CustomMode(%pvDontWantTo%,Normal)
	DMessage("pvCR_chastityOn: end");
    return;
    not_want();
}
function not_want()
{
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_NotWantChastityOn.js");
	DMessage("pvCR_chastityOn: end");
    return;
}