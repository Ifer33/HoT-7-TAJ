let separator = java.io.File.separator;
run("chatutils.js");
setUpChat2();
DMessage("main: Beginning");
run("mediautils.js");
DMessage("Setting up media");
setUpMedia();
run("personalityutils.js");
DMessage("Setting up personality");
setUpVars();
run("TAIUtils.js");
setUpTAIUtils();
run("helperFunctions.js");
setVar("dommelevel",7);
setVar("hasChastity",true);
setVar("ballTorture",true);
setVar("cockTorture",true);
setVar("cbtBallLevel",3);
setVar("cbtCockLevel",3);
setVar("edgingmode", "Normal");
delVar("edginggoto");

Modulo3();

function Modulo3()
{
    CMessage("You are here to listen to what I say");
    CMessage("I will tell you what to do and you will obey");
    CMessage("I love to see you getting aroused");
    CMessage(random("I love it when you do as I say", "I love watching you Obey"));
    CMessage("%StartStroking%");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "NoAllowed()")
    CMessage("Keep going at the same speed");
    CMessage("No edging before I allow it of course");
    sleep(randomInt(10, 20));
    CMessage("Stroke faster love");
    sleep(randomInt(10, 20));
    CMessage("Don\'t edge");
    sleep(randomInt(10, 20));
    CMessage("%Stroke%, %PetName%.");
    CMessage("You like my commands don\'t you?");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("You like when I degrade you.");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("What a pervert you are...");
    }
    if(getVar("av_fetish_pegging", false) && getVar("AV_LikeAnal", false))
    {
        CMessage("%Stroking% and wanting me to fuck your ass with a strap-on");
    }
    CMessage("I love it.");
    let answer0 = getInput("Now what do you say?", 5);
    if (answer0.isTimeout())
    {
        AV_Jump233();
        return;
    }
    if (answer0.isLike("thanks", "you"))
    {
        CMessage("That\'s right, %PetName%");
        increaseAnger(-3)
    }
    else
    {
        CMessage("Nope");
    }
    AV_Jump233();
}
function AV_Jump233()
{
    CMessage("Mmmm... you are a kinky one.");
    CMessage("You are almost ready to cum?");
    setVar("edgingmode", "Normal");
    CMessage("I think it\'s time to do some edges");
    DoEdges(2, 4, 0);
    CMessage("Good boy");
    return;
    NoAllowed();
}
function NoAllowed()
{
    CMessage("%stopstroking%", 0);
    setVar("edgingmode", "Normal");
    CMessage("I told you to not edge %SubName%");
    CMessage("I think you need to be punished");
    //getpunished
	return;
}