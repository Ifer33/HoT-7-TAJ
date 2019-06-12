DMessage("AV_SpecGlitter3Module1: start");
main();
DMessage("AV_SpecGlitter3Module1: end");
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
    SMessage("%stopstroking%", -1, 4);
    stopStrokingAll();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    if(getVar("AV_Pins", false))
    {
        SMessage("Remove all the clothespins", -1, 4);
        sleep(10);
    }
    if(!getVar("AV_PinDone", false))
    {
        SMessage("Go fetch a ruler and some clothespins. At least 10 of them.", -1, 4);
        sleep(20);
    }
    SMessage("Now I\'ll make one thing clear here.", -1, 4);
    //--Command:SetLink(AV_SpecGlitterLinkEnd)
	setTempVar("linktorun", "Custom" + java.io.File.separator + "Link" + java.io.File.separator + "AV_SpecGlitterLinkEnd.js");
    SMessage("You\'re gonna be my pet. You are my bitch.", -1, 4);
    setVar("AV_GlitterControl", getVar("AV_GlitterControl", 0) + 3);
    SMessage("Before I introduce you to my rules, %KneelForMe%", -1, 4);
    SMessage("and dont you dare touch that dick of yours.", -1, 4);
    SMessage("It is my dick from now on.", -1, 4);
    SMessage("Alright enough lets start shall we?", -1, 4);
    SMessage("spank your ass twice. HARDER!", -1, 4);
    sleep(10);
    SMessage("%StartStroking%", -1, 4);
    SMessage("Faster", -1, 4);
    SMessage("And %Edge%", -1, 4);
	startEdging(null,-1,4);
	SMessage("%stopstrokingedge%", -1, 4);
	SMessage("%lettheedgefade%", -1, 4);
    SMessage("Now the clothespins, one on each nipple, and one on each ball.", -1, 4);
    sleep(20);
    SMessage("Are the %Balls% hurting yet?", -1, 4);
    SMessage("oooh.", -1, 4);
    SMessage("Shut up and slap your ass hard. HARDER!", -1, 4);
    SMessage("I want to see a red ass there!", -1, 4);
    SMessage("Now slap your balls twice and tell me how beautiful I am.", -1, 4);
    SMessage("Now storke hard.", -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    SMessage("As hard as you can.", -1, 4);
    SMessage("Get right to the edge and hold it there pet!", -1, 4);
    holdEdge(-1,4);
    SMessage("Im so fucking wet.", -1, 4);
    SMessage("You are such a good pet.", -1, 4);
    SMessage("Remove all the pins and sit down.", -1, 4);
    return;
}