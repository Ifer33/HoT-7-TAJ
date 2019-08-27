DMessage("AV_Feet: start");
main();
DMessage("AV_Feet: end");
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
    CMessage("%PetName%");
    if (randomInteger(1, 100) <= 50)
    {
        part2();
        return;
    }
    CMessage("Better get your tongue to work and clean this mess off my shoes.");
    showTaggedImage(4, ["FEET"]);
    //--Command:TagBodyFeet
    CMessage("I expect them to be spotless.");
    return;
    part2();
}
function part2()
{
    CMessage("%StartStroking%");
    CMessage("** %DomName% turned on the mic **");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "SeSp" + java.io.File.separator + "foot02.mp3");
    sleep(15);
    sleep(13);
    sleep(15);
    sleep(15);
	sleep(10);
    CMessage("** %DomName% turned off the mic **");
    CMessage("%stopstroking%", 0);
	stopAudio();
	stopStrokingAll();
    return;
}