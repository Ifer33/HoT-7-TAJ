DMessage("AV_StarQ4: start");
main();
DMessage("AV_StarQ4: end");
function main()
{
    let answer0 = getInput("If you\'ve just received punishment, you say?");
    if (answer0.isLike("thank you", "thanks", "thanking you", "thankful for", "thx", "grateful for"))
    {
        CMessage("That\'s correct. After punishment you should thank me for letting you redeem yourself.");
        StartQ04Right();
        return;
    }
    else if (answer0.isLike("sorry", "apologize"))
    {
        CMessage("If you\'ve successfully received punishment, then you have nothing to say sorry for.");
    }
    else
    {
        CMessage("Punishment is meant to teach you something, reflect that in your answer.");
    }
    cbt();
    EndQuestionsAV();
    return;
    StartQ04Right();
}
function StartQ04Right()
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