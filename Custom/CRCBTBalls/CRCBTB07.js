DMessage("CRCBTB07: begin")
main();
DMessage("CRCBTB07: end")
function main()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage("Is this a good time for some ballbusting?");
    CMessage("Hmmm of course it is... it's <i>always</i> a good time for ballbusting %Lol%");
    CMessage("Ready or not... here it comes!");
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    CMessage("Good boy %Smile%");
    return;
}