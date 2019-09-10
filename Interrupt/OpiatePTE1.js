DMessage("OpiatePTE1: Beginn");
main();
DMessage("OpiatePTE1: end");
function main()
{
    CMessage("%EmoteHer% You want to edge %Name%?");
    if (randomInteger(1, 100) <= 30)
    {
        PTE2();
        return;
    }
    if(getVar("EREx", false))
    {
        EREx();
        return;
    }
    run("Interrupt" + java.io.File.separator + "NoEREx.js");
	return;
    PTE2();
}
function PTE2()
{
    run("Interrupt" + java.io.File.separator + "OpiatePTE2.js");
	return;
    EREx();
}
function EREx()
{
    if (randomInteger(1, 100) <= 50)
    {
        a1();
        return;
    }
    CMessage("%EmoteHer% Too bad");
    CMessage("Keep stroking, no edging");
    return;
    a1();
}
function a1()
{
    edge("%Edge%");
    a2();
}
function a2()
{
    CMessage("%EmoteHer%");
    if (randomInteger(1, 100) <= 50)
    {
        Contx();
        return;
    }
    let answer0 = getInput("Still want to edge %Name%?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Smile%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%Smile% It wasn\'t actually a question %Name%");
    }
    edge("%Edge%");
    if (randomInteger(1, 100) <= 40)
    {
        Contx();
        return;
    }
    a3();
}
function a3()
{
    CMessage("%EmoteHer%");
    let answer0 = getInput("Do you want another %Name%?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%EmoteFace%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%Smile% %Shh%");
    }
    edge("%Edge%");
    if (randomInteger(1, 100) <= 30)
    {
        Contx();
        return;
    }
    a41();
}
function a41()
{
    CMessage("%EmoteHer%");
    if (randomInteger(1, 100) <= 50)
    {
        Contx();
        return;
    }
    CMessage("You should be careful %Name%");
    CMessage("You never know when I might feel like playing edge roulette with you");
    CMessage("%EmoteHer% Maybe we\'re playing it now");
    if(getVar("OpiateNPS", false))
    {
        OpiateNPS();
        return;
    }
    if(getVar("OpiateNPR", false))
    {
        OpiateNPR();
        return;
    }
    if(getVar("OpiateNPC", false))
    {
        OpiateNPC();
        return;
    }
    a42();
}
function a42()
{
    holdEdge();
    if (randomInteger(1, 100) <= 50)
    {
        Contx();
        return;
    }
    CMessage("I\'ll let you in on a little secret");
    CMessage("You\'ve been pretty good lately, so I won\'t make you play roulette with me");
    a5();
}
function a5()
{
    CMessage("%EmoteFace% Just keep it in mind though %Name%");
    CMessage("I know exactly how to make you %Ache% <i>too</i> much");
	if (randomInteger(1, 100) <= 50)
    {
        Contx();
        return;
    }
    holdEdge();
    Contx();
}
function Contx()
{
    CMessage("That\'s enough edging for now");
    CMessage("I\'ll let you edge yourself into oblivion later %EmoteSmile%");
    CMessage("I just feel like %Torturing% you some more for now %EmoteLaugh%");
    return;
    EdgeRoulette();
}
function EdgeRoulette()
{
    run("Interrupt" + java.io.File.separator + "EdgeRoulette.js");
	return;
    OpiateNPS();
}
function OpiateNPS()
{
    CMessage("You were stroking without my permission after all");
    a42();
    return;
    OpiateNPR();
}
function OpiateNPR()
{
    CMessage("After all, you did ruin an orgasm");
    CMessage("You still came <i>without</i> permission");
    ERNPRno();
}
function ERNPRno()
{
    CMessage("%EmoteFace% %Name%");
    CMessage("I think since you ruined that last orgasm you had for me");
    CMessage("I'll spare you, <i>this</i> time %EmoteSmile%");
	a5();
	return;
    OpiateNPC();
}
function OpiateNPC()
{
    CMessage("Besides, you probably deserve roulette");
    CMessage("%EmoteThought% Maybe you deserve even worse");
    if (randomInteger(1, 100) <= 10)
    {
        NPCTerm();
        return;
    }
    CMessage("Fortunately for you");
    CMessage("I\'m having too much fun playing with you right now");
    CMessage("Otherwise I would just deny you... <i>right now</i>");
    ERNPCno();
}
function ERNPCno()
{
    CMessage("%EmoteSmile% I\'m feeling generous tonight though");
    CMessage("So even though you came without my permission last time");
    CMessage("I think I'll spare you both <i>for now</i> %EmoteHer%");
	a5();
	return;
    NPCTerm();
}
function NPCTerm()
{
    CMessage("%EmoteThought% Maybe you deserve even worse");
    //dont exist run("Interrupt" + java.io.File.separator + "NPCTerm.js");
    return;
}