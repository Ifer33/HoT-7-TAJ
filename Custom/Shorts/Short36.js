DMessage("Short36: start");
main();
DMessage("Short36: end");
function main()
{
    CMessage("But when they\'re said by the right person in just the right tone...");
    setTempVar("AV_Short36", true);
    CMessage("They can " + random("signal that you belong to someone", "be a mark of ownership"));
    CMessage("So I think you really want to " + random("feel powerless and submissive ", "belong to an assertive, dominant woman ") + "...");
    let answer0 = getInput("to be owned and protected by me. Am I right?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        youOwnMeResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    return;
}