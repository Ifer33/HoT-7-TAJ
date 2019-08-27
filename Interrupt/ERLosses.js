DMessage("ERLosses: start");
main();
DMessage("ERLosses: end");
function main()
{
    if(getVar("ERLost", false))
    {
        ERLost();
        return;
    }
    if(getVar("ERLoss", false))
    {
        ERLoss();
        return;
    }
    if(getVar("ERLoss2", false))
    {
        ERLoss2();
        return;
    }
    ERLost();
}
function ERLost()
{
    CMessage("I told you %Smile%");
    CMessage("I was going to %Torture% you %Smile%");
    CMessage("You\'re going to really wish you had held out %NameGM%");
    CMessage("%EmoteRandom% Because now you're <i>really</i> mine");
    CMessage("Your next orgasm, I\'m going to ruin it too");
    CMessage("And the one after that");
    CMessage("%EmoteRandom% I\'m going to deny you");
    CMessage("%EmoteRandom% There\'s no telling when I\'ll finally let you come");
    CMessage("I never said <i>how long</i> I was going to deny you for %Smile%");
    CMessage("I just said that I was going to deny you");
    CMessage("You had better hope that I actually let you ruin your next orgasm %GeneralTime%");
    CMessage("%EmoteRandom% Maybe I feel like putting you into \"No Stroke Prison\"");
    CMessage("%EmoteRandom% Maybe I feel like %Making% you sit and squirm for awhile");
    if (randomInteger(1, 100) <= 30)
    {
        Chastity();
        return;
    }
    CMessage("%EmoteFace% I'm not feeling quite that mean... <i>I think</i>");
    CMessage("Maybe I\'ll change my mind later %Smile%");
    return;
    Chastity();
}
function Chastity()
{
    CMessage("%EmoteHer% Actually, that sounds exactly like what I want to do");
    CMessage("I want you to know that there won\'t be any relief");
    CMessage("Don't %Touch% %That% %Cock% <i>at all</i> %NameGM%");
    CMessage("You lost %Smile%");
    CMessage("I'm claiming <i>all</i> the spoils %GeneralTime%");
    return;
    ERLoss();
}
function ERLoss()
{
    CMessage("%EmoteMoan%");
    CMessage("%SubName%");
    CMessage("Normally it would be time for me to let you know if I was going to let you come %GeneralTime%");
    //--Command:ChastityOff
	chastityOff();
    CMessage("But, you already know what I\'m going to do to you");
    CMessage("I still want you to edge for me though %EmoteRandom%");
    Edge();
}
function Edge()
{
    if (randomInteger(1, 100) <= 50)
    {
        Edge2();
        return;
    }
    edge("%Edge%");
    Edge2();
}
function Edge2()
{
    edge("%Edge%");
    if (randomInteger(1, 100) <= 30)
    {
        Edge();
        return;
    }
    CMessage("%EmoteRandomTF%");
    EdgeToRuin();
    return;
    EdgeToRuin();
}
function EdgeToRuin()
{
    CMessage("Edge for me one last time %Name%");
    edgeToRuin();
    CMessage("<b>Just, take your hands away</b>");
	//@SetFlag(OpiateLOR)
	setVar("OpiateLOR",true);
    CMessage("%Smile%");
    CMessage("And I want you to give it a full 2 minutes before you clean up");
    CMessage("A whole 2 minutes to let it all %Ache% away");
    CMessage("A whole 2 minutes to let it all settle in");
    CMessage("I hope it\'s so frustrating that you can barely %Take% it");
    CMessage("%Surrender% to me %Name%, just keep your hands away");
    CMessage("%Surrender%, %Ache%, %Smile%");
    CMessage("I hope it %Aches% <i>so much</i>");
    CMessage("I want you to wait, I want you to stay <i>so</i> aroused for me");
    CMessage("I want you to be constantly thinking about me");
    CMessage("I want you to be %Squirming% for me until I play with you again");
    CMessage("And I want you to be thinking about all the things I am going to do to you when I see you again");
    CMessage("And most of all, I want you wondering about next time");
    CMessage("Will I deny you? Will I ruin you? Will i finally let you come?");
    CMessage("How long will it be before I let you come again?");
    CMessage("Only one way to find out %Name%");
    CMessage("Wait, %Ache%, %Surrender%");
    CMessage("And I don\'t want you %Stroking% %Yourself% at all until then, %SubName%");
    CMessage("And I know it\'s hard %Name%");
    CMessage("I know %PetName%, I know...");
    CMessage("But I want you to %Surrender% to me");
    CMessage("I want you to be good for me");
    let answer0 = getInput("Can you do that?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good %PetName%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%SubName%, I really hope you reconsider");
    }
    EndScript();
}
function EndScript()
{
    CMessage("If I find out that you got off without my permission, I <b>WONT</b> be happy");
    CMessage("So remember, no stroking %Name%");
    CMessage("No stroking, no edging, no coming");
    CMessage("Not until I say");
    CMessage("And you know I always hate saying goodbye");
    CMessage("But, until next time %Name%");
    CMessage("I look forward to hearing from you %Smile%");
    endSession();
    return;
    ERLoss2();
}
function ERLoss2()
{
    CMessage("%EmoteMoan%");
    //--Command:ChastityOff
	chastityOff();
    CMessage("%SubName%");
    CMessage("Normally it would be time for me to let you know if I was going to let you come %GeneralTime%");
    CMessage("But, you already know what I\'m going to do to you");
    CMessage("I still want you to edge for me though %EmoteRandom%");
    Edge3();
}
function Edge3()
{
    if (randomInteger(1, 100) <= 50)
    {
        Edge4();
        return;
    }
    edge("%Edge%");
    Edge4();
}
function Edge4()
{
    edge("%Edge%");
    if (randomInteger(1, 100) <= 30)
    {
        Edge3();
        return;
    }
    CMessage("%EmoteRandomTF%");
    EdgeToRuin5();
    return;
    EdgeToRuin5();
}
function EdgeToRuin5()
{
    CMessage("Edge for me one last time %Name%");
    edgeToRuin();
	CMessage("<b>Just, take your hands away</b>");
	//@SetFlag(OpiateLOR)
	setVar("OpiateLOR",true);
    //--UNINTERPRETED LINE:<b>Just, take your hands away</b> @SetFlag(OpiateLOR)
    CMessage("%Smile%");
    CMessage("And I want you to give it a full 2 minutes before you clean up");
    CMessage("A whole 2 minutes to let it all %Ache% away");
    CMessage("A whole 2 minutes to let it all settle in");
    CMessage("I hope it\'s so frustrating that you can barely %Take% it");
    CMessage("%Surrender% to me %Name%, just keep your hands away");
    CMessage("%Surrender%, %Ache%, %Smile%");
    CMessage("I hope it %Aches% <i>so much</i>");
    CMessage("I want you to wait, I want you to stay <i>so</i> aroused for me");
    CMessage("I want you to be constantly thinking about me");
    CMessage("I want you to be %Squirming% for me until I play with you again");
    CMessage("And I want you to be thinking about all the things I am going to do to you when I see you again");
    CMessage("And most of all, I want you wondering about next time");
    CMessage("Will I deny you? Will I ruin you? Will i finally let you come?");
    CMessage("How long will it be before I let you come again?");
    CMessage("Only one way to find out %Name%");
    CMessage("Wait, %Ache%, %Surrender%");
    CMessage("And I don\'t want you %Stroking% %Yourself% at all until then, %SubName%");
    CMessage("And I know it\'s hard %Name%");
    CMessage("I know %PetName%, I know...");
    CMessage("But I want you to %Surrender% to me");
    CMessage("I want you to be good for me");
    let answer0 = getInput("Can you do that?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good %PetName%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%SubName%, I really hope you reconsider");
    }
    EndScript2();
}
function EndScript2()
{
    CMessage("If I find out that you got off without my permission, I <b>WONT</b> be happy");
    CMessage("So remember, no stroking %Name%");
    CMessage("No stroking, no edging, no coming");
    CMessage("Not until I say");
    CMessage("And you know I always hate saying goodbye");
    CMessage("But, until next time %Name%");
    CMessage("I look forward to hearing from you %Smile%");
    endSession();
    return;
}