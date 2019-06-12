DMessage("CRCBTB08: begin")
main();
DMessage("CRCBTB08: end")
function main()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage("I don\'t know if you\'ve noticed, but...");
    CMessage("Those %Balls% of yours... look at them... feel them...");
    CMessage("I think...");
    CMessage("I think they need to be smacked around right now %Grin%");
    CMessage("Oh yes, they\'re practically begging for it!");
    CMessage("If I can sense it then you must feel it too... so...");
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    CMessage("Mmm they feel better already don\'t they? %Laugh%");
    return;
}