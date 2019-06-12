DMessage("pvIn_WantOrgasmControl: start");
main();
DMessage("pvIn_WantOrgasmControl: end");
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
    CMessage("I would love it if you\'d let me control when you masturbate");
    delVar("pvWantCoCo");
    CMessage("Not only during our sessions but in between as well");
    delVar("pthevCompleteControlNO");
    CMessage("And I would <i>love it if you only cum if I say you can");
    CMessage("So %SubName%...");
    CMessage("Do you promise to only masturbate when I say you can masturbate?");
    let answer0 = getInput("And to only cum if I say you can cum?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("I think this arrangement of ours just got interesting %Grin%");
        setVar("pthevCompleteControlYES", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Too bad %EmoteSad%");
        the_answer_is_no();
        return;
    }
    CMessage("One thing though, %SubName%");
    CMessage("This only works when you are completely honest with me");
    CMessage("I mean, I can\'t come over and check if you\'re being a good boy every day...");
    CMessage("And and I don\'t what to have to ask you if you\'ve been good every single time");
    CMessage("So that means you should tell me whenever you\'ve masturbated or had an orgasm without my permission");
    CMessage("Even if it happened outside of our sessions together");
    let answer1 = getInput("Is that understood?");
    while (!(answer1.isLike("yes") || answer1.isLike("okay") || answer1.isLike("alright") || answer1.isLike("agreed") || answer1.isLike("understood") || answer1.isLike("understand") || answer1.isLike("clear") || answer1.isLike("don't want") || answer1.isLike("do not want") || answer1.isLike("not going to") || answer1.isLike("not gonna") || answer1.isLike("won't") || answer1.isLike("will not")))
    {
		if (answer1.isLike("no"))
		{
			answer1 = getInput("%pthevCoCo1%");
			//--Command:LoopAnswer
		}
		else{
			answer1 = getInput("%YesOrNo%");
		}
    }
    if (answer1.isLike("yes", "okay", "alright", "agreed", "understood", "understand", "clear"))
    {
        CMessage("Great %Smile%");
    }
    else  if (answer1.isLike("don't want", "do not want", "not going to", "not gonna", "won't", "will not"))
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