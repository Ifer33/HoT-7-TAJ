DMessage("AV_SpecGlitter2Module1: start");
main();
DMessage("AV_SpecGlitter2Module1: end");
function main()
{
    if (isStroking())
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
    SMessage("%stopstroking%", -1, 3);
    stopStroking();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    SMessage("You probably think that your %Balls% are going to burst", -1, 3);
    setVar("AV_GlitterControl", getVar("AV_GlitterControl", 0) + 2);
    SMessage("that they can\'t handle that much of cum, trying so desperately to get out.", -1, 3);
    //--Command:SetLink(AV_SpecGlitterLinkEnd)
	setVar("linktorun", "Custom" + java.io.File.separator + "Link" + java.io.File.separator + "AV_SpecGlitterLinkEnd.js");
    SMessage("Don\'t worry. I think they can handle much more. ;)", -1, 3);
    SMessage("You\'re not here to spray your load all over the place.", -1, 3);
    SMessage("You\'re here to " + random("learn to control yourself", "get lost in your own desire", "feel nothing else than pure frustration"), -1, 3);
    SMessage("I don\'t think you even know what that means, just yet.", -1, 3);
    //CMessage("%StartStroking%");
	setStrokingNoTaunt(null,-1,3);
    SMessage("Think about what you would do, just to keep me happy.", -1, 3);
    SMessage("And you really should want to keep me happy.", -1, 3);
    SMessage("That\'s your only hope of ever getting to come.", -1, 3);
    SMessage(random("Would you degrade yourself ", "Would you be so desperate ") + "and let me penetrate your ass, just for the hope of some relief?", -1, 3);
    SMessage("Now %Edge%", -1, 3);
	startEdging(null,-1,3);
	SMessage("%stopstrokingedge%", -1, 3);
	SMessage("%lettheedgefade%", -1, 3);
    SMessage("Now %Slave%. You\'ve been good so far.", -1, 3);
    SMessage("Lets not ruin it for you.", -1, 3);
    SMessage("Until I let you stop, you are going to edge for me.", -1,3, -1, 3);
    SMessage("Over and over, only short rest in between.", -1, 3);
    SMessage("If you want to make me really happy, hold each edge for as long as you can!", -1, 3);
    SMessage("Start now... Edge", -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    SMessage("The next few minutes", -1, 3);
    SMessage("I want to see as many Edges as you can do.", -1, 3);
    SMessage("Over and over, baby.", -1, 3);
    sleep(10);
    SMessage("Let\'s make your cock cry tears of joy and frustration.", -1, 3);
    SMessage("Edge over and over", -1, 3);
    SMessage("again and again,", -1, 3);
    SMessage("until I let you stop.", -1,3);
    sleep(10);
    SMessage("Hold each edge, if you dare!", -1, 3);
    SMessage("Keep Edging!", -1, 3);
    sleep(10);
    SMessage("Again and again, baby!", -1, 3);
    SMessage("Feel the frustration.", -1, 3);
    SMessage("Keep going!", -1, 3);
    sleep(10);
    SMessage("No stopping this torture yet!", -1, 3);
    SMessage("I love watching you do this to yourself for my amusement!", -1, 3);
    SMessage("Over and over, baby!", -1, 3);
    sleep(10);
    SMessage(random("That's enough.", "You were such a good boy for me, Enough.", "Well done, baby, Stop.", "I've seen enough"),-1,3 );
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    SMessage("Now, let\'s get on to something else..", -1, 3);
    return;
}