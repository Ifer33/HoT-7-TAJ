DMessage("AV_PainInter: start");
main();
DMessage("AV_PainInter: end");
function main()
{
    //--Command:ApathyLevel4
	if(checkOldApathyLevel(4) ){
		if (randomInteger(1, 100) <= 30)
		{
			End2();
			return;
		}
	}
    //--Command:ApathyLevel5
	if(checkOldApathyLevel(5) ){
		if (randomInteger(1, 100) <= 80)
		{
			End2();
			return;
		}
	}
    let answer0 = getInput(random("What is the problem ", "What is ", "What ", "Say ", "you can talk to me ", "yes ", "what happened ") + "%SubName%?");
    while (!(answer0.isLike("pain") || answer0.isLike("hurt") || answer0.isLike("killing") || answer0.isLike("rough") || answer0.isLike("pause") || answer0.isLike("break") || answer0.isLike("rest")))
    {
        answer0 = getInput("what %SubName%?");
    }
    if (answer0.isLike("pain", "hurt", "killing", "rough"))
    {
        CMessage("hmm");
        CheckMood();
        return;
    }
    else if (answer0.isLike("pause", "break", "rest"))
    {
        CheckPause();
        return;
    }
    CheckPause();
}
function CheckPause()
{
    if (getMood() > 30 && getMood() < 70)
    {
        if (randomInteger(1, 100) <= 30)
        {
            End2();
            return;
        }
    }
    if (getMood() >= 70)
    {
        CMessage(random("I don\'t give a fuck if you can handle this or not ", "Begging just makes me want to torture you even more ", "I dont care ") + "you will " + random("%Take%", "continue"));
        End();
        return;
    }
    if (getMood() <= 30)
    {
        CMessage("%Okay%");
    }
    CMessage(random("I\'ll try to keep your limits in mind a little better ", "I think ") + "I can let you rest for a while");
    CMessage("enjoy");
    sleep(randomInt(100, 200));
    CMessage("%ThatsEnough%");
    return;
    CheckMood();
}
function CheckMood()
{
    if (getMood() > 30 && getMood() < 70)
    {
        if (randomInteger(1, 100) <= 60)
        {
            SomeEdges();
            return;
        }
    }
    if (getMood() >= 70)
    {
        CMessage(random("I don\'t give a fuck if you can handle this or not", "Begging just makes me want to torture you even more"));
        End2();
        return;
    }
    CMessage(random("I'm really being mean to that %Cock% of yours %GeneralTime%, ", "aren't I?, Ok %PetName%, ")+ random("You ", "We ")+ "can stop ...for "+random("a while", "now"));
    setTempVar("StopAllowed", true);
    return;
    SomeEdges();
}
function SomeEdges()
{
    let answer0 = getInput(random("Maybe ", "Do you think ") + random("a few ", "some ") + "edges will " + random("help you to %Take% the pain", "make it easy"));
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
        EdgesRND();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Hmm");
    }
    CMessage(random("I'm really being mean to that %Cock% of yours %GeneralTime%, ", "aren't I?, Ok %PetName%, ")+ random("You ", "We ")+ "can stop ...for "+random("a while", "now"));
    setTempVar("StopAllowed", true);
    return;
    EdgesRND();
}
function EdgesRND()
{
    DoEdges(4, 7, 0);
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
}