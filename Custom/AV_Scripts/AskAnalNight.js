main();
function main()
{
	DMessage("AskAnalNight: Beginning");
    if(getVar("av_NoAskAnal", false))
    {
        End();
        return;
    }
    CMessage("There is something that I want %GeneralTime% %SubName%");
    CMessage(random("Something that have turn me on for very long time", "That\'s something that\'s really dirty and really %Crazy%"));
    CMessage("So the question is...");
    let answer0 = getInput("Do you have the balls to %Submit% your %Ass% to me... <i>completly<> %GeneralTime%?")
    if (answer0.isLike("yes", "yeah", "course", "sure"))
    {
        CMessage("%HolyShit%!");
        Ass_Talk();
        return;
    }
    else if (answer0.isLike("no", "nope", "not sure"))
    {
        CMessage("%Okay%, " + random("that\'s fine %PetName%", "the choice is yours and only yours %PetName%"));
    }
    setTempVar("av_NoAskAnal", true);
	DMessage("AskAnalNight: End");
    return;
}
function Ass_Talk()
{
    CMessage("So you choose to %Submit% %SubName%.");
    CMessage("And it is really %Hot%!");
    CMessage("But to completly give me that %Ass%, you need to know that, the thing that I want...");
    CMessage("Is to make your %Asshole% my personnal %Pussy% to fuck!");
    CMessage("Yes %PetName%, I\'ll make you fuck your %Ass% a lot %GeneralTime%");
    let answer0 = getInput("Do you have a dildo or buttplug, or both?");
    while (!(answer0.isLike("no") || answer0.isLike("neither") || answer0.isLike("dildo") || answer0.isLike("buttplug") || answer0.isLike("both")))
    {
		if (answer0.isLike("yes"))
		{
			answer0 = getInput("which one?");
		}else{
			answer0 = getInput("That\'s very interesting, but do you own a dildo or buttplug?");
		}
    }
    if (answer0.isLike("no", "neither"))
    {
        CMessage("That\'s too bad");
        nothingavailable();
        return;
    }
    else if (answer0.isLike("dildo"))
    {
        CMessage("Awesome!");
        setVar("pthevDildo", true);
    }
    else if (answer0.isLike("buttplug"))
    {
        CMessage("Great!");
        setVar("pthevButtPlug", true);
    }
    else if (answer0.isLike("both"))
    {
        CMessage("I was hoping you\'d say that!");
        setVar("pthevDildo", true);
        setVar("pthevButtPlug", true);
    }
    let answer1 = getInput("Go get it, let me know when you\'re ready. You might want to use a condom with that too");
    while (!(answer1.isLike("yes") || answer1.isLike("back") || answer1.isLike("returned") || answer1.isLike("here") || answer1.isLike("got it") || answer1.isLike("ready") || answer1.isLike("don't have") || answer1.isLike("haven't got") || answer1.isLike("couldn't find") || answer1.isLike("haven't found") || answer1.isLike("changed my mind") || answer1.isLike("don't want") || answer1.isLike("don't make me") ))
    {
		if (answer1.isLike("no","not"))
		{
			answer1 = getInput("Go get your dildo-shaped something %PetName%!");
		} 
		else if (answer1.isLike("don't like","dont like"))
		{
			answer1 = getInput("You don\'t have to like it, you\'re doing it for me remember %EmoteHappy%");
		}
		else if (answer1.isLike("wait", "sec", "second", "moment", "hold on", "not ready"))
		{
			answer1 = getInput("I\'ll wait");
		}
		else{
			answer1 = getInput("Are you ready?");
		}
    }
    if (answer1.isLike("yes", "back", "returned", "here", "got it", "ready"))
    {
        CMessage("This is going to be interesting %Grin%");
    }
    else if (answer1.isLike("don't have","haven't got","couldn't find","haven't found"))
    {
        CMessage("Oh well, maybe next time %EmoteSad%");
        nothingavailable();
        return;
    }
    else if (answer1.isLike("changed my mind","don't want","don't make me"))
    {
        CMessage("Alright then... %EmoteSad%");
        End();
        return;
    }
    //CMessage("This is going to be interesting %Grin%");
    setTempVar("av_doanalnight", true);
    CMessage("Leave it ready, we are going to use it a lot later %EmoteHappy%");
    return;
}
function nothingavailable()
{
    CMessage("Make sure to find something you can use");
    setTempVar("av_NoAskAnal", true);
    CMessage("Like a candle or the handle of a hairbrush");
    CMessage("Or a firm and appropriately shaped piece of fruit %Laugh%");
    CMessage("Keep it ready so we can play next time");
    End();
}
function End()
{
    return;
}