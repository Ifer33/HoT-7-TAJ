DMessage("AV_CEI: start");
main();
DMessage("AV_CEI: end");
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
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "SeSp" + java.io.File.separator + "cei01.mp3");
    sleep(15);
    sleep(15);
    sleep(15);
    sleep(15);
    sleep(10);
    sleep(15);
    sleep(15);
    sleep(15);
	sleep(10);
    CMessage("%stopstroking%", 0);
	stopAudio();
	stopStrokingAll();
    CMessage("** %DomName% turned off the mic **");
    sleep(10);
    CMessage("%ThatsEnough%");
    return;
}