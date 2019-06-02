DMessage("pvCr_NotWantChastityOn: start");
main();
DMessage("pvCr_NotWantChastityOn: end");
function main()
{
    CMessage(random("What good is ", "why own ", "why have ") + "a chastity " + random("device ", "belt ", "cage ") + "if you don\'t " + random("put it on ", "wear it ", "use it ") + "%EmoteFlustered%");
    let answer0 = getInput("You want to make me happy, don\'t you?");
    increaseAnger(3);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Then quit moaning, %Name%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You\'ve certainly succeeded in not making me happy, %Name%");
        increaseAnger(3);
        final_no();
        return;
    }
    let answer1 = getInput("And put on your chastity cage, okay?");
    while (!(answer0.isLike("don't want to") || answer0.isLike("do not want to") || answer0.isLike("don't want that") || answer0.isLike("do not want that") || answer0.isLike("don't make me") || answer0.isLike("do not make me") || answer1.isLike("no") || answer1.isLike("yes") || answer1.isLike("okay") || answer1.isLike("wish") || answer1.isLike("say")))
    {
        answer1 = getInput("Are you going to put it on?");
    }
    if (answer0.isLike("don't want to", "do not want to", "don't want that", "do not want that", "don't make me", "do not make me"))
    {
        CMessage("I suppose I can\'t force you");
        final_no();
        return;
    }
    else if (answer1.isLike("no"))
    {
        CMessage("I suppose I can\'t force you");
        increaseAnger(3);
        final_no();
        return;
    }
    else if (answer1.isLike("yes", "okay", "wish", "say"))
    {
        CMessage("Good");
    }
    CMessage("Do as I say and lock up that %Cock%");
    let answer2 = getInput("Let me know when you\'re ready to continue");
    while (!(answer2.isLike("ready") || answer2.isLike("done") || answer2.isLike("finished") ))
    {
        if (answer2.isLike("no"))
		{
			answer2 = getInput("Let me know when you\'re ready");
		}else if (answer0.isLike("yes", "okay"))
		{
			answer2 = getInput("I\'m waiting...");
		}else {
			answer2 = getInput("Let me know when you\'re ready");
		}
    }
    if (answer2.isLike("ready", "done", "finished"))
    {
        CMessage(random("Good", "Alright", "Okay"));
        //--Command:ChastityOn
		setVar("chastityOn", true);
    }
    CMessage("Don't you feel much better when you " + random("do a I say","stop questioning my commands","simply obey me") + "?");
	run("Interrupt" + separator + "pvIn_General.js");
    return;
    final_no();
}
function final_no()
{
    if(getVar("pvEndscriptActive", false))
    {
        pvEndscriptActive();
        return;
    }
    run("Interrupt" + separator + "pvInt_Punishment.js");
    return;
    pvEndscriptActive();
}
function pvEndscriptActive()
{
    setTempVar("pvPunishmentEndTease", true);
    run("Interrupt" + separator + "pvInt_Punishment.js");
    return;
}