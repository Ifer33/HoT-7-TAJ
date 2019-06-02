DMessage("CRCBTB01: begin")
main();
DMessage("CRCBTB01: end")
function main()
{
    CMessage("Hmmm...");
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage("I feel like busting your %Balls% for a bit right now");
    CMessage("You know, it\'s a funny thing... how sensitive they are and how easily hurt");
    CMessage("I think it\'s nature\'s way of telling us females that we\'re meant to be in charge");
    CMessage("A ready-made tool to keep unruly males in line %Smile%");
    CMessage("So I guess I should use that tool as it was meant to be used...");
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    CMessage("And it\'s a lot of fun too... %Lol%");
    return;
}