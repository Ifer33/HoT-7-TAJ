DMessage("Short31: start");
main();
DMessage("Short31: end");
function main()
{
    CMessage("What if I am truly evil though slave, have you thought about that?");
    setTempVar("AV_Short31", true);
    CMessage("So what if I really am as ‘evil' as you wanted me to be… and more? ");
    let answer0 = getInput("Could you handle that slave?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        can_Handle_zResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        can_Handle_notResponse();
    }
    return;
}