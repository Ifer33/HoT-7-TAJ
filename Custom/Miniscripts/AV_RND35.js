DMessage("AV_RND35: start");
main();
DMessage("AV_RND35: end");
function main()
{
    let answer0 = getInput("Are you getting close to " + random("cumming", "orgasm", "the edge"), 10);
    if (answer0.isTimeout())
    {
        did_the_cat();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Then slow down a little bit");
        slowStroking(2);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Good %Smile%");
    }
    CMessage("I don\'t want you to edge just yet");
    setTempVar("AV_0RND35", true);
    return;
    did_the_cat();
}
function did_the_cat()
{
    CMessage("Has the cat got your tongue, %PetName%?");
    setTempVar("AV_0RND35", true);
    CMessage("I guess you\'re too busy stroking to be chatting, hm? %Giggles%");
    return;
    
}