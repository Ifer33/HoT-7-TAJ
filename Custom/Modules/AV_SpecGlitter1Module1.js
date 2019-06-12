DMessage("AV_SpecGlitter1Module1: start");
main();
DMessage("AV_SpecGlitter1Module1: end");
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
    SMessage("%stopstroking%", -1, 2);
    stopStrokingAll();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    SMessage("I am so glad %DomName% let me take control of you", -1, 2);
    setVar("AV_GlitterControl", getVar("AV_GlitterControl", 0) + 1);
    SMessage("i spent all day thinking about you", -1, 2);
    SMessage("ready to stroke now?", -1, 2);
    SMessage("I will give you something different", -1, 2);
    SMessage("%Stroke% " + randomInt(10, 20) + " slowly", -1, 2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    sleep(15);
    SMessage("Give me " + randomInt(5, 8) + " quick strokes", -1, 2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    sleep(10);
    SMessage("%Stroke% " + randomInt(10, 20) + " slowly", -1, 2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    sleep(15);
    SMessage("Give me " + randomInt(5, 8) + " quick strokes", -1, 2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    sleep(10);
    SMessage("aww you look so cute struggling like that", -1, 2);
    SMessage("Now %Edge%", -1, 2);
	startEdging(null,-1,2);
	SMessage("%stopstrokingedge%", -1, 2);
	SMessage("%lettheedgefade%", -1, 2);
    SMessage("I\'ve been nice to you so far.", -1, 2);
    SMessage("I haven\'t made you do anything too scary or painful.", -1, 2);
    SMessage("Only a bit of sexual torment and teasing.", -1, 2);
    SMessage("It\'s time you repay me.", -1, 2);
	setTempVar("linktorun", "Custom" + java.io.File.separator + "Link" + java.io.File.separator + "AV_SpecGlitterLinkEnd.js");
    //--Command:SetLink(AV_SpecGlitterLinkEnd)
    var amountEdges = 4;
    DoEdges(amountEdges, amountEdges, 0, -1, 2);
	SMessage("%LetTheEdgeFade%", -1, 2);
    SMessage("Now slave, are your balls getting a bit too full?", -1, 2);
    SMessage("Would you like some release? %Lol%", -1, 2);
    return;
}