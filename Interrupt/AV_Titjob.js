DMessage("AV_Titjob: start");
main();
DMessage("AV_Titjob: end");
function main()
{
    if (isStrokingAll())
    {
        Sub_Stroking();
        return;
    }
    else
    {
        Sub_Not_Stroking();
        return;
    }
    Sub_Stroking();
}
function Sub_Stroking()
{
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    CMessage("Let me test that.");
    SMessage("%DomName% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "SeSp" + java.io.File.separator + "titjob01.mp3");
    CMessage("%StartStrokingNS%");
    sleep(15);
    sleep(15);
    sleep(15);
    sleep(10);
    sleep(15);
    sleep(15);
    sleep(15);
    sleep(10);
    sleep(15);
    sleep(15);
    sleep(15);
    sleep(10);
    sleep(15);
	stopAudio();
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    SMessage("%DomName% turned off the mic");
    sleep(10);
    CMessage("%ThatsEnough%");
    return;
}