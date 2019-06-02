DMessage("Short11: start");
main();
DMessage("Short11: end");
function main()
{
    CMessage("I like to hear this");
    CMessage("Completely willing to submit.");
    CMessage("I haven\'t even asked you to do anything yet, you just desperately want to hand over your will.");
    let answer0 = getInput("So, does that sound right?", 6);
    if (answer0.isTimeout())
    {
        a324gerz();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%GoodBoy%");
        increaseAnger(-3)
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%IDisagree%");
        increaseAnger(3)
        a4lmer4();
        return;
    }
    a324gerz();
}
function a324gerz()
{
    CMessage("You\'d probably be useful, in person.");
    if(getVar("av_fetish_rough", false) || getVar("AV_Beta", false))
    {
        CMessage("Obedient, mentally castrated, almost completely lacking in self-interest.");
    }
    a4lmer4();
}
function a4lmer4()
{
    let answer0 = getInput("Would you like that? Would you agree to be made more.. conditioning?  By me?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    return;
}