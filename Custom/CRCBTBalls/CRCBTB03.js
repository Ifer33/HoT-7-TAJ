DMessage("CRCBTB03: begin")
main();
DMessage("CRCBTB03: end")
function main()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage("You know what? I\'m going to make you hurt those poor %Balls% right now... %Grin%");
    CMessage("Not because you\'re a bad boy");
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("Although you have been a very bad boy %GeneralTime%");
    }
    CMessage("But because I enjoy it");
    CMessage("Because I love seeing you wince in pain as you smack those poor %Balls%");
    CMessage("I wish I could do it myself, but to be honest I think you should be glad I can\'t");
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    CMessage("If I were there I would step on those %Balls% and squish them like rip plums %Laugh%");
    return;
}