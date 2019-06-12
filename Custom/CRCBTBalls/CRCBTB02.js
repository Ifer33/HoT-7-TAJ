DMessage("CRCBTB02: begin")
main();
DMessage("CRCBTB02: end")
function main()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage("Your %Balls% are " + random("enjoying themselves a bit too much ", "having too much fun ", "not looking blue enough ") + "I\'m going to make you hurt them for a bit now");
    setDate("RespToCBTBalls");
    if(!getVar("AV_SubKnees", false))
    {
        CMessage("%KneelForMe%");
    }
    CMessage("I could say this hurts me as much as it hurts you... but it wouldn\'t be true");
    CMessage("This is about you hurting for me, because I can make you hurt");
    CMessage("Because inflicting pain is what makes my control over you <i>real</i>");
    CMessage("When I make you %JerkOff% I\'m basically giving you what you want, I\'m giving you pleasure");
    CMessage("So let\'s make this real by making it hurt %Grin%");
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    CMessage("I bet that felt pretty real, didn\'t it %Laugh%");
    if(getVar("AV_SubKnees", false))
    {
        CMessage("%SitDown%");
    }
    return;
}