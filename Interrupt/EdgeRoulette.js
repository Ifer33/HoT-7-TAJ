DMessage("EdgeRoulette: Beginn");
main();
DMessage("EdgeRoulette: end");
function main()
{
    CMessage("%EmoteThought%");
    if(getVar("EdgeRoulette", false))
    {
        EdgeRoulette();
        return;
    }
    if(getVar("ERSWin", false))
    {
        ERSWin();
        return;
    }
    if(getVar("ERWon", false))
    {
        ERWon();
        return;
    }
    if(getVar("ERWon2", false))
    {
        ERWon2();
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
    CMessage("%EmoteSmile% If you come %Name%, you <i>have</i> to ruin it");
	setVar("EdgeRoulette",true);
    CMessage("And then you <i>have</i> to <i>immediately</i> tell me that you're coming");
	setVar("ERS",true);
    edge("%Edge%");
    ER();
}
function ER()
{
    CMessage("%StartStroking%");
    CMessage("%0_ERTaunts%");
    edge("%Edge%");
    if (randomInteger(1, 100) <= 90)
    {
        ER();
        return;
    }
    CMessage("%EmoteFace% %LetTheEdgeFade%");
    CMessage("%EmoteFace% I give up %Name%, you win");
    setVar("ERSWin", true);
    delVar("ERS");
    CMessage("%EmoteFace% You\'ve earned your orgasm %GeneralTime% %Name%");
    CMessage("The real question though, is do you want me to let you come <i>right now</i> Or...");
	let answer1 = getInput("Or do you want to <i>play</i> with me a little <i>longer</i> %Name%?");
	while(!(answer1.isLike("now", "right now", "come") || answer1.isLike("wait", "you", "with you", "play", "longer") )){
		CMessage("It wasn\'t a yes or no question");
		answer1 = getInput("%Name%, do you want to come <i>now</i> or <i>play</i> with me a little <i>longer</i>");
	}
	if (answer1.isLike("now", "right now", "come"))
    {
        CMessage("%EmoteAww% All right");
        ERSWin();
        return;
    }
    else if (answer1.isLike("wait", "you", "with you", "play", "longer"))
    {
        CMessage("%EmoteRandomTF% %How% I love you, %SubName%");
    }
    CMessage("%EmoteRandomTF% I\'m going to give you the best orgasm you\'ve ever had %GeneralTime% %Name%");
    CMessage("%EmoteHer% But for now, I\'m going to %MakeSure% you don\'t regret staying with me a %Little% longer %GeneralTime%");
    return;
    EdgeRoulette();
}
function EdgeRoulette()
{
    CMessage("%EmoteThought%");
    if(getVar("ERSWin", false))
    {
        ERSWin();
        return;
    }
    if(getVar("ERWon", false))
    {
        ERWon();
        return;
    }
    if(getVar("ERWon2", false))
    {
        ERWon2();
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
    CMessage("%EmoteSmile% If you come %Name%, you <i>have</i> to ruin it");
    CMessage("And then you <i>have</i> to <i>immediately</i> tell me that you're coming");
	setVar("ERS");
    edge("%Edge%");
    a2ER();
}
function a2ER()
{
    CMessage("%StartStroking%");
    CMessage("%0_ERTaunts%");
    CMessage("%Edge%");
    startEdging();
    if (randomInteger(1, 100) <= 95)
    {
        a2ER();
        return;
    }
    CMessage("%EmoteFace% %LetTheEdgeFade%");
    CMessage("%EmoteFace% I give up %Name%, you win");
    setVar("ERSWin", true);
    delVar("ERS");
    CMessage("%EmoteFace% You\'ve earned your orgasm %GeneralTime% %Name%");
    CMessage("The real question though, is do you want me to let you come <i>right now</i> Or...");
	let answer1 = getInput("Or do you want to <i>play</i> with me a little <i>longer</i> %Name%?");
	while(!(answer1.isLike("now", "right now", "come") || answer1.isLike("wait", "you", "with you", "play", "longer") )){
		CMessage("It wasn\'t a yes or no question");
		answer1 = getInput("%Name%, do you want to come <i>now</i> or <i>play</i> with me a little <i>longer</i>");
	}
	if (answer1.isLike("now", "right now", "come"))
    {
        CMessage("%EmoteAww% All right");
        ERSWin();
        return;
    }
    else if (answer1.isLike("wait", "you", "with you", "play", "longer"))
    {
        CMessage("%EmoteRandomTF% %How% I love you, %SubName%");
    }
    CMessage("%EmoteRandomTF% I\'m going to give you the best orgasm you\'ve ever had %GeneralTime% %Name%");
    CMessage("%EmoteHer% But for now, I\'m going to %MakeSure% you don\'t regret staying with me a %Little% longer %GeneralTime%");
    return;
    ERSWin2();
}
function ERSWin2()
{
    CMessage("I want you to start %Stroking% %Yourself% again %Name%");
    run("Interrupt" + java.io.File.separator + "ERWins.js");
    return;
    ERSWin();
}
function ERSWin()
{
    CMessage("But since you just beat me at this game, I guess that wouldn\'t be very fair to me %EmoteRandom%");
    CMessage("I still owe you a few orgasms and I was looking forward to <i>making</i> you have them %Smile%");
    CMessage("That and I would much rather play Edge Roulette after I\'ve denied you for a few days %Smile%");
    CMessage("%EmoteRandom% That\'s what makes it fun");
    CMessage("For now, just keep your %Hands% off of %Yourself%");
    CMessage("I know <i>better</i> ways to %Tease% you %Smile%");
    return;
    ERWon();
}
function ERWon()
{
    CMessage("But I guess I still owe you two orgasms for winning me last time");
    CMessage("I guess it wouldn\'t be fair if I beat you now and took that all away");
    CMessage("Besides, I would much rather play Edge Roulette with you after I\'ve denied you for a couple of days %Smile%");
    CMessage("%EmoteRandom% That\'s what makes it fun");
    CMessage("For now, just keep your %Hands% off of %Yourself%");
    CMessage("I know <i>better</i> ways to %Tease% you %Smile%");
    return;
    ERWon2();
}
function ERWon2()
{
    CMessage("%Smile% Actually, I just let you come not to long ago");
    CMessage("<i>And</i> I still owe you an orgasm from the last time you beat me at Edge Roulette %Smile%");
    CMessage("So for now, just keep your %Hands% off of %Yourself%");
    CMessage("I know <i>better</i> ways to %Tease% you %Smile%");
    return;
    ERLoss();
}
function ERLoss()
{
    CMessage("But seeing as I just beat you at Edge Roulette");
    CMessage("I don\'t know why I\'m really considering giving you another chance to beat me %Smile%");
    CMessage("You already know what I\'m going to do to you now anyway %Smile%");
    CMessage("But since I\'m feeling so %Mean%, I think I\'ll just take %That% %Cock% away from you instead %Smile%");
    CMessage("Just keep your %Hands% off of %Yourself%");
    CMessage("I know <i>better</i> ways to %Tease% you %Smile%");
    CMessage("%EmoteRandomTF% Like denying you for a few days while you think about that orgasm that I'm <i>going</i> to ruin");
    return;
    ERLoss2();
}
function ERLoss2()
{
    CMessage("%EmoteRandom% Then again, if I play Edge Roulette with you right now");
    CMessage("One way or another, you still get to come and I do believe that I still owe you a denial %Smile%");
    CMessage("So, just keep your %Hands% off of %Yourself%");
    CMessage("I\'ll find another way to %Tease% you %Name% %Smile%");
    return;
}