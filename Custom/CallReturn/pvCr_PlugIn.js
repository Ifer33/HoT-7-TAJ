main();
function main()
{
	DMessage("pvCr_PlugIn: Start");
    CMessage(random("Go get your butt plug", "Prepare your butt plug", "Get your butt plug for me"));
    //--Command:CustomMode(%pvDontWantTo%,Goto,not want)
	//customMode("Goto", "%pvDontWantTo%", "not_want()");
		CMessage(random("Lube it up as much as you need to", "Make it nice and slippery", "Lube up good if you need it", "Use as much lube as you need"));
		CMessage(random("Put it in your ass", "Shove that plug up your ass", "Push that plug into your tight butt"));
		CMessage(random("Your ass belongs to me ", "I can use your ass however I want ", "Your ass is mine to use ", "I own your ass ") + "%Grin%");
		let answer0 = getInput("Let me know when you\'re ready");
		while (!(answer0.isLike("done") || answer0.isLike("yes") || answer0.isLike("did") || answer0.isLike("ready") || answer0.isLike("finished") || answer0.isLike("it's in") || answer0.isLike("don't want to") || answer0.isLike("do not want to") || answer0.isLike("don't want that") || answer0.isLike("do not want that") || answer0.isLike("don't make me") || answer0.isLike("do not make me")))
		{
			answer0 = getInput("Just say \'ready\' when you are, %SubName% %EmoteFlustered%");
		}
		if (answer0.isLike("done", "did", "ready", "finished", "in", "yes"))
		{
			CMessage(random("Good ", "Alright ", "There you go ", "That\'s much better ") + "%Smile%");
			setTempVar("pthevPlugged", true);
		}
		else if (answer0.isLike("don't want to", "do not want to", "don't want that", "do not want that", "don't make me", "do not make me"))
		{
			CMessage("What are you talking about");
			not_want();
			return;
		}
		CMessage(random("That plug fills you up nicely", "I don\'t know why I don\'t do this more often", "Plugged like a good slut"));++
	//customMode("Normal");
    //--Command:CustomMode(%pvDontWantTo%,Normal)
	DMessage("pvCr_PlugIn: End");
    return;
    not_want();
}
function not_want()
{
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_NotWantPlug.js");
	DMessage("pvCr_PlugIn: End");
    return;
}