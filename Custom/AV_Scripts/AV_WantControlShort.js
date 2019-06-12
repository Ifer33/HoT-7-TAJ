DMessage("AV_WantControlShort: start");
main();
DMessage("AV_WantControlShort: end");
function main()
{
    if (isStrokingAll())
    {
        Sub_Stroking();
        return;
    }
    else
    {
        Sub_Not_Stroking();
        return;
    }
    Sub_Stroking();
}
function Sub_Stroking()
{
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    CMessage("One thing though, %SubName%");
    setVar("pthevCompleteControlYES", true);
    CMessage("This only works when you are completely honest with me");
    delVar("pthevCompleteControlNO");
    CMessage("I mean, I can\'t come over and check if you\'re being a good boy every day...");
    CMessage("And and I don\'t what to have to ask you if you\'ve been good every single time");
    CMessage("So that means you should tell me whenever you\'ve masturbated or had an orgasm without my permission");
    CMessage("Even if it happened outside of our sessions together");
    let answer0 = getInput("Is that understood?");
    while (!(answer0.isLike("yes") || answer0.isLike("okay") || answer0.isLike("alright") || answer0.isLike("agreed") || answer0.isLike("understood") || answer0.isLike("understand") || answer0.isLike("clear") || answer0.isLike("don't want") || answer0.isLike("do not want") || answer0.isLike("not going to") || answer0.isLike("not gonna") || answer0.isLike("won't") || answer0.isLike("will not")))
    {
		if (answer0.isLike("no"))
		{
			answer0 = getInput("%pthevCoCo1%");
		}
		else{
			answer0 = getInput("%YesOrNo%");
		}
    }
    if (answer0.isLike("yes", "okay", "alright", "agreed", "understood", "understand", "clear"))
    {
        CMessage("Great %Smile%");
    }
    else if (answer0.isLike("don't want","do not want","not going to","not gonna","won't","will not"))
    {
        CMessage("Too bad %EmoteSad%");
        delVar("pthevCompleteControlYES");
        the_answer_is_no();
        return;
    }
    CMessage("That settles it then...");
    CMessage("You\'re going to regret this, %SubName% %Grin%");
    increaseAnger(-3)
    return;
    the_answer_is_no();
}
function the_answer_is_no()
{
    CMessage("I thought you said you wanted that, %PetName%");
    increaseAnger(3)
    setVar("pthevCompleteControlNO", true);
    CMessage("But I guess you chickened out... typical");
    CMessage("It\'s okay though, I don\'t want to force you to do anything you don\'t want to do");
    return;
}