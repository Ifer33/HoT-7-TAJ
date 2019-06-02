DMessage("AV_RuinHorny2: start");
main();
DMessage("AV_RuinHorny2: end");
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
    CMessage("%stopstroking%", 0);
    stopStroking();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    CMessage("This is it %SubName%...");
    CMessage("No, not your ruined orgasm %Lol%");
    setVar("AV_RuinHorny", getVar("AV_RuinHorny", 0) + 10);
    CMessage("Something <i>much</i> worse");
    CMessage("This is the calm before the storm");
    CMessage("That one moment where everything is just still");
    CMessage("Serene");
    CMessage("But there\'s this tension in the air all around your");
    CMessage("Deafening you with the silence as you start to realize");
    CMessage("That something destructive is closing in on you");
    CMessage("And it's <i>far</i> too late to escape %Grin%");
    CMessage("%Edge%");
	startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    CMessage("Every time you get close like that");
    CMessage("Only to stop inches short");
    CMessage("Your %Cock% gets a little bit closer to understanding the truth");
    CMessage("It\'s about to suffer worse than it can possibly imagine %Grin%");
    CMessage("%Edge%");
	startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    CMessage("Of course, it\'s not just your %Cock% that\'s %Gonna% suffer");
    CMessage("Those %Balls% are in for a world of hurt as well");
    CMessage("I think we should give them a little taste of what\'s coming %Grin%");
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    CMessage("While you\'re still reeling from that");
    CMessage("Let's make sure that ache doesn't go <i>anywhere</i> %Grin%");
	//@ShowBlogImage
	showTeaseImage();
    CMessage("I want every single one of these pictures to hit your %Balls% like a ton of bricks");
    getTeasePicture();
    CMessage("I want them to make the ache grow even more");
    getTeasePicture();
    CMessage("I want them to make it unbearable");
    getTeasePicture();
    CMessage("Until those %Balls% are so incredibly sensitive");
    getTeasePicture();
    CMessage("That forcing you to ruin an orgasm could actually put them out of commission %Grin%");
    return;
}