DMessage("pvCr_WantAnal: start");
main();
DMessage("pvCr_WantAnal: end");
function main()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    delVar("pvWA");
    if(getVar("pthevAnal", false))
    {
        pthevAnal();
        return;
    }
    if(getVar("pthevNoAnal", false))
    {
        pthevNoAnal();
        return;
    }
    CMessage("Oh really?");
    CMessage("This should be interesting...");
    run("Interrupt" + java.io.File.separator + "pvIn_WantAnal");
    return;
    pthevAnal();
}
function pthevAnal()
{
    CMessage("So you " + random("would like ", "want ") + "me to " + random("fuck ", "violate ") + "your ass, hm?");
    if(getVar("pthevButtPlug", false))
    {
        if (randomInteger(1, 100) <= 33)
        {
            go_to_plug();
            return;
        }
    }
    if(getVar("pthevDildo", false))
    {
        if (randomInteger(1, 100) <= 33)
        {
            go_to_dildo();
            return;
        }
    }
    if(getVar("pthevButtPlug", false) )
    {
        not_now()
        return;
    }
    if(getVar("pthevDildo", false) )
    {
        not_now()
        return;
    }
    let answer0 = getInput("Do you have a dildo or a butt plug?");
    while (!(answer0.isLike("no") || answer0.isLike("plug") || answer0.isLike("dildo") || answer0.isLike("both")))
    {
		if (answer0.isLike("yes"))
		{
			answer0 = getInput("Which one?");
		}
		else{
			answer0 = getInput("Do you have a dildo or a butt plug?");
		}
    }
	if (answer0.isLike("no"))
    {
        CMessage("Oh well...");
    }
    else if (answer0.isLike("plug"))
    {
        CMessage("That\'s great, %SubName%");
        setVar("pthevButtPlug", true);
        go_to_plug();
        return;
    }
    else if (answer0.isLike("dildo"))
    {
        CMessage("That\'s great, %SubName%");
        setVar("pthevDildo", true);
        go_to_dildo();
        return;
    }
    else if (answer0.isLike("both"))
    {
        CMessage("That\'s great, %SubName%");
        setVar("pthevButtPlug", true);
        setVar("pthevDildo", true);
        switch(random("go_to_dildo", "go_to_plug"))
        {
            case "go_to_dildo":
            go_to_dildo();
            return;
            break;
            case "go_to_plug":
            go_to_plug();
            return;
            break;
        }
    }
    CMessage("Never mind then");
    return;
    go_to_plug();
}
function go_to_plug()
{
    CMessage(random("Go get your butt plug", "Take out your butt plug", "Get your butt plug for me"));
    //--Command:CustomMode(%pvDontWantTo%,Goto,not want)
    CMessage(random("Lube it up as much as you need to", "Make it nice and slippery", "Lube up good if you need it", "Use as much lube as you need"));
    CMessage(random("Put it in your ass", "Shove that plug up your ass", "Push that plug into your tight butt"));
    CMessage(random("Your ass belongs to me ", "I can use your ass however I want ", "Your ass is mine to use ", "I own your ass ") + "%Grin%");
    let answer0 = getInput("Let me know when you\'re ready");
    while (!(answer0.isLike("done") || answer0.isLike("did") || answer0.isLike("ready") || answer0.isLike("finished") || answer0.isLike("in") || answer0.isLike("don't want to") || answer0.isLike("do not want to") || answer0.isLike("on't want that") || answer0.isLike("do not want that") || answer0.isLike("don't make me") || answer0.isLike("do not make me")))
    {
        answer0 = getInput("Just say \'ready\' when you are, %SubName% %EmoteFlustered%");
    }
    if (answer0.isLike("done", "did", "ready", "finished", "in"))
    {
        CMessage(random("Good ", "Alright ", "There you go ", "That\'s much better ") + "%Smile%");
        setTempVar("pthevPlugged", true);
    }
    else if (answer0.isLike("don't want to","do not want to","don't want that","do not want that","don't make me","do not make me"))
    {
        CMessage("What are you talking about");
        not_want();
        return;
    }
    CMessage(random("That plug fills you up nicely", "I don\'t know why I don\'t do this more often", "Plugged like a good slut"));
    //--Command:CustomMode(%pvDontWantTo%,Normal)
    return;
    not_want();
}
function not_want()
{
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_NotWantPlug.js");
    return;
    go_to_dildo();
}
function go_to_dildo()
{
    run("Interrupt" + java.io.File.separator + "pvIn_WantAnalDildo");
    return;
    pthevNoAnal();
}
function pthevNoAnal()
{
    CMessage("Really? I thought you weren\'t into that");
    let answer0 = getInput("Let\'s get this straight, you are asking me to do anal play with you?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Oohhh %EmoteHappy%");
        delVar("pthevNoAnal");
        setVar("pthevAnal", true);
        setVar("AV_LikeAnal", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Hm...");
        misunderstood();
        return;
    }
    CMessage("This should be interesting...");
    run("Interrupt" + java.io.File.separator + "pvIn_WantAnal");
    return;
    no_way();
}
function no_way()
{
    CMessage("Not gonna happen, %Name%");
    return;
    misunderstood();
}
function misunderstood()
{
    CMessage("Never mind then...");
    return;
    not_now();
}
function not_now()
{
    CMessage("Not now, %Name%");
    return;
}