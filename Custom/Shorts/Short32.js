DMessage("Short32: start");
main();
DMessage("Short32: end");
function main()
{
    CMessage("The best way to make this as good as I can");
    setTempVar("AV_Short32", true);
    let answer0 = getInput("is to make it as unbearable as possible isn\'t it?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    let answer1 = getInput("Because we both know that\'s exactly what you crave. Isn\'t it?",5);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    return;
}