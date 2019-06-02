DMessage("Short33: start");
main();
DMessage("Short33: end");
function main()
{
    let answer0 = getInput("You\'re getting close aren\'t you slave, you can\'t help yourself can you?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        i_Can_Take_MoreResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        iCantHelpMyselfResponse();
    }
    let answer1 = getInput("The thought of me destroying your balls makes you fucking horny too doesn\'t it slave?", 5);
    if (answer1.isTimeout())
    {
        AV_Timeo241();
        return;
    }
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesorNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("%Good%");
        changeApathyLevel(2);
    }
    else if (answer1.isLike("no"))
    {
        CMessage("%LetMeThinkAboutIt%");
		changeApathyLevel(-2);
    }
    AV_Timeo241();
}
function AV_Timeo241()
{
    CMessage("You want to cum so bad don\'t you");
    setTempVar("AV_Short33", true);
    CMessage("Well come on, show me how bad you want it");
    return;
}