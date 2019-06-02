DMessage("AV_StarQ1: start");
main();
DMessage("AV_StarQ1: end");
function main()
{
    let answer0 = getInput("When I say: Hello. You say?",6);
    if (answer0.isTimeout())
    {
        CMessage("Good thinking. But when I speak directly to you, you better respond!");
    }
    else if (answer0.isLike("Mistress"))
    {
        CMessage("correct");
        StartQ01Right();
        return;
    }
    CMessage("No no no. You must always use my title when speaking!");
	cbt();
    EndQuestionsAV();
    return;
    StartQ01Right();
}
function StartQ01Right()
{
    CMessage("%Stroke% " + (java.lang.Math.round(randomInt(10, 50) / 10.0) * 10) + "times");
    sleep(20);
    EndQuestionsAV();
}
function EndQuestionsAV()
{
    CMessage("This kind of verbal discipline turns me on so much.");
    return;
}