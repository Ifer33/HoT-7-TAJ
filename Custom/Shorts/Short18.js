DMessage("Short18: start");
main();
DMessage("Short18: end");
function main()
{
    CMessage("Is that what you wanted?");
    let answer0 = getInput("Me paying a lot attention to you?", 5);
    if (answer0.isTimeout())
    {
        a3dfgdpo();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Everything is going your way right?");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Liar...");
    }
    a3dfgdpo();
}
function a3dfgdpo()
{
    let answer0 = getInput("I bet you are really happy right " + "aren\'t you?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        ark_Having_FunResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        regretMeetingYouResponse();
    }
    return;
}