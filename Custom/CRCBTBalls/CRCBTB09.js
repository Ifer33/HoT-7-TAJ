DMessage("CRCBTB09: begin")
main();
DMessage("CRCBTB09: end")
function main()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage("Grab those poor pathetic %Balls% and squeeze them");
    CMessage("This is so much fun, isn't it? Don't stop squeezing!");
    CMessage("Don\'t squeeze too hard though... I\'m going to make you smack them around too in a few seconds");
    CMessage("If you bruise them too much they won\'t be able to take it");
    CMessage("Let go of my balls");
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    CMessage("I own those %Balls% and don\'t ever forget that, %Name%");
    return;
}