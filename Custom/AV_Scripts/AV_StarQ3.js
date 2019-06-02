DMessage("AV_StarQ3: start");
main();
DMessage("AV_StarQ3: end");
function main()
{
    let answer0 = getInput("If I say: You\'ve been a bad boy. You say?",6);
    if (answer0.isLike("yes"))
    {
        CMessage("Saying yes or no in response to a statement like that would imply (dis)agreement.");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("It is not your place to gauge whether or not you\'ve been bad.");
    }
    else if (answer0.isTimeout())
    {
        CMessage("This one was directed to you. Therefore you must reply.");
    }
    else if (answer0.isLike("sorry", "sorry", "sorry", "apologize"))
    {
        CMessage("That\'s correct. It\'s not your place to agree or disagree.");
        StartQ03Right();
        return;
    }
    CMessage("Simple accept the judgement and apologize.");
    cbt();
    EndQuestionsAV();
    return;
    StartQ03Right();
}
function StartQ03Right()
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