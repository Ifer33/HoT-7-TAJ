DMessage("AV_EdgeInter: start");
main();
DMessage("AV_EdgeInter: end");
function main()
{
    if(getVar("av_intera_019", false))
    {
        CMessage(random("You were really gooning out %PetName%", "gooning got you?"));
    }
    let answer0 = getInput(random("What is the problem ", "What is ", "What ", "Say ", "you can talk to me ", "yes ", "what happened ") + "%SubName%?");
    while (!(answer0.isLike("cum") || answer0.isLike("cumming") || answer0.isLike("much") || answer0.isLike("intense") || answer0.isLike("hard") || answer0.isLike("cant") || answer0.isLike("can't") || answer0.isLike("pause") || answer0.isLike("break") || answer0.isLike("rest") || answer0.isLike("hurt")))
    {
        answer0 = getInput("what %SubName%?");
    }
    if (answer0.isLike("cum", "cumming"))
    {
        CMessage("oh...");
        CheckCum();
        return;
    }
    else if (answer0.isLike("much", "intense", "hard", "cant", "can't"))
    {
        CheckMood();
        return;
    }
    else if (answer0.isLike("pause", "break", "rest", "hurt"))
    {
        CheckPause();
        return;
    }
    CheckCum();
}
function CheckCum()
{
    CMessage("Did you cum or you are about to cum?");
    let answer0 = getInput("To be clear, did you came?",null,0);
	while (!(answer0.isLike("yes") || answer0.isLike("no") ))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Oh noo...");
        run("Interrupt"+seperator+"OpiateNPC.js");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%Good%");
        CheckMood();
        return;
    }
    CheckPause();
}
function CheckPause()
{
    if (getApathyMoodIndex() > 25 && getApathyMoodIndex() < 75)
    {
        if (randomInteger(1, 100) <= 25)
        {
            End2();
            return;
        }
    }
    if (getApathyMoodIndex() >= 75)
    {
        CMessage(random("I don\'t give a fuck if you can %Take% this or not ", "%Begging% just makes me want to %Torture% you even more ", "I dont care ") + "you will " + random("%Take%", "continue"));
        End();
        return;
    }
    if (getApathyMoodIndex() <= 25)
    {
        CMessage("%Okay%");
    }
    CMessage(random("I\'ll try to keep your limits in mind a little better ", "I think ") + "I can let you rest for a while");
    if(getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 60)
        {
            Position();
            return;
        }
    }
    if(!getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 40)
        {
            Position();
            return;
        }
    }
    CMessage("enjoy");
    sleep(randomInt(100, 200));
    CMessage("%ThatsEnough%");
    return;
    CheckMood();
}
function CheckMood()
{
    if (getApathyMoodIndex() > 25 && getApathyMoodIndex() < 75)
    {
        if (randomInteger(1, 100) <= 30)
        {
            SomeCBT();
            return;
        }
    }
    //--Command:ApathyLevel1
	if(checkOldAphatyLevel(1)){
		CMessage(random("I\'m really being %Mean% to that %Cock% of yours %GeneralTime%, aren\'t I? ", "Ok %PetName% ", "Does your whole body want to cum? ") + random("You ", "We ") + "can stop...for " + random("a while", "now"));
		setTempVar("StopAllowed", true);
		End();
		return;
	} else if(checkOldAphatyLevel(2)){
		//--Command:ApathyLevel2
		CMessage(random("I\'m really being %Mean% to that %Cock% of yours %GeneralTime%, aren\'t I? ", "Ok %PetName% ", "Does your whole body want to cum? ") + random("You ", "We ") + "can stop...for " + random("a while", "now"));
		setTempVar("StopAllowed", true);
		End();
		return;
	} else if(checkOldAphatyLevel(3)){
		//--Command:ApathyLevel3
		if (randomInteger(1, 100) <= 40)
		{
			SomeCBT();
			return;
		}
		//--Command:ApathyLevel3
		CMessage(random("I\'m really being %Mean% to that %Cock% of yours %GeneralTime%, aren\'t I? ", "Ok %PetName% ", "Does your whole body want to cum? ") + random("You ", "We ") + "can stop...for " + random("a while", "now"));
		setTempVar("StopAllowed", true);
		End();
		return;
	} else if(checkOldAphatyLevel(4)){
		//--Command:ApathyLevel4
		CMessage(random("I don\'t give a fuck if you can %Take% this or not", "%Begging% just makes me want to %Torture% you even more"));
		if (randomInteger(1, 100) <= 40)
		{
			End();
			return;
		}
	} else if(checkOldAphatyLevel(5)){
		//--Command:ApathyLevel5
		CMessage(random("I don\'t give a fuck if you can %Take% this or not", "%Begging% just makes me want to %Torture% you even more"));
		if (randomInteger(1, 100) <= 40)
		{
			End();
			return;
		}
	}
	SomeCBT();
}
function SomeCBT()
{
    let answer0 = getInput(random("Maybe ", "Do you think ") + random("a few ", "some ") + "pain will " + random("help you to take it", "make it easy", "help you to keep that cum inside"));
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
        CBTRND();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Hmm");
    }
	if(checkOldAphatyLevel(5)){
		//--Command:ApathyLevel5
		CMessage("In " + random("that ", "this ") + "case, good luck %Lol%");
		End();
		return;
	}
    CMessage(random("I\'m really being %Mean% to that %Cock% of yours %GeneralTime%, aren\'t I? ", "Ok %PetName% ") + random("You ", "We ") + "can stop...for " + random("a while", "now"));
    setTempVar("StopAllowed", true);
    return;
    CBTRND();
}
function CBTRND()
{
    cbt("ball");
    if (getApathyMoodIndex() >= 75)
    {
        cbt();
    }
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        cbt("ball");
    }
    CMessage(random("%ThatsEnough%", "Now we can continue", "we can continue"));
    return;
    End();
}
function End()
{
    return;
    End2();
}
function End2()
{
    CMessage(random("It wouldn't be a tease if you didn't suffer", "stop complaining", "I'm going to tease you to fucking tears")+" %SubName%");
    return;
    Position();
}
function Position()
{
    CMessage("But I want you to stay in this position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "all" + java.io.File.separator + "*.jpg");
    lockImages();
    CMessage("enjoy");
    sleep(randomInt(100, 200));
    CMessage("%ThatsEnough%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    unlockImages();
    CMessage("%SitDown%");
    return;
}