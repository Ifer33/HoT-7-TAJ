DMessage("Short16: start");
main();
DMessage("Short16: end");
function main()
{
    CMessage("Is that your favourite word slave?");
    CMessage("No? should I repeat it?");
    CMessage("No No No? ");
    let answer0 = getInput("Does it turn you on?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo15();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("You are really submissive, %SubName%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("I wonder why... %Lol%");
    }
    AV_Timeo15();
}
function AV_Timeo15()
{
    return;
}