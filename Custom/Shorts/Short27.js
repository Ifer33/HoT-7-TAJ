DMessage("Short27: start");
main();
DMessage("Short27: end");
function main()
{
    CMessage("Don\'t forget, this was your idea");
    CMessage("I know I\'ve made it hard for you");
    setTempVar("AV_Short27", true);
    let answer0 = getInput("and that\'s what you wanted too, isn\'t it?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo385();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%IKnow%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Well, you can give up %Lol%");
    }
    AV_Timeo385();
}
function AV_Timeo385()
{
    CMessage("You didn\'t want me to make it easy for you");
    let answer0 = getInput("you wanted every orgasm to be completely excruciating didn\'t you?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo386();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
        increaseRuinChance(8);
        setVar("AV_RuinChance", getVar("AV_RuinChance", 0) + 1);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%LetMeThinkAboutIt%");
    }
    AV_Timeo386();
}
function AV_Timeo386()
{
    CMessage("And yet you still can\'t quite believe that I won\'t show you compassion");
    CMessage("that I won\'t show you mercy at the last second.");
    return;
}