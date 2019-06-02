DMessage("AV_StarQ2: start");
main();
DMessage("AV_StarQ2: end");
function main()
{
    let answer0 = getInput("If I say: I have some fun things planned. You say?",6);
    if (answer0.isTimeout())
    {
        CMessage("That\'s right.");
        StartQ02Right();
        return;
    }
    CMessage("What I said was not a queue for you to reply");
	cbt();
    EndQuestionsAV();
    return;
    StartQ02Right();
}
function StartQ02Right()
{
    CMessage("%Stroke% " + (java.lang.Math.round(randomInt(10, 50) / 10.0) * 10) + "times");
    sleep(20);
    EndQuestionsAV();
	return;
}
function EndQuestionsAV()
{
    CMessage("This kind of verbal discipline turns me on so much.");
    return;
}