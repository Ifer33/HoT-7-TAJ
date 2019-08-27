DMessage("AV_RuinHorny1: start");
main();
DMessage("AV_RuinHorny1: end");
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
	CMessage("I bet you haven't stopped thinking about that ruined orgasm for a second %Grin%")
    setVar("AV_RuinHorny", getVar("AV_RuinHorny", 0) + 1);
    CMessage("That\'s okay, I\'ll just give you something else to focus on for a minute");
    CMessage("Like this picture for instance %Grin%");
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    lockImages();
    CMessage("I know you used to stroke yourself to pictures like this all the time");
    CMessage("I mean, you still do it for me of course %Lol%");
    CMessage("But looking at images like this was different by yourself");
    CMessage("It\'s not just about how sexy it is");
    CMessage("Or how much it turns you on, no");
    CMessage("It\'s about how it sparks your imagination");
    CMessage("Gives that %Cock% of yours a fleeting glimpse of what\'s sexually possible");
    CMessage("The pleasure that\'s out there for it to feel");
    CMessage("But sometimes, just like this picture");
    unlockImages();
    CMessage("All that pleasure gets snatched away from you forever");
    CMessage("Just when it was starting to feel good %Grin%");
    return;
}