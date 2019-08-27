DMessage("AV_Memory: start");
main();
DMessage("AV_Memory: end");
function main()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    delVar("AV_MemoryMain");
    if(!getVar("AV_MEM_Happy", false))
    {
        nbvy6633();
        return;
    }
    CMessage("You want to make me happy, huh?");
    CMessage("There\'s only two things I want from you.");
    delVar("AV_MEM_Happy");
    CMessage("Your obedience.");
    if(getVar("AV_MEM_Humil", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("And your humiliation.");
    }
    if(!getVar("AV_MEM_Humil", false) && !getVar("av_fetish_humiliating", false))
    {
        CMessage("And your %Cock% aching...");
    }
    nbvy6633();
}
function nbvy6633()
{
    if(!getVar("AV_MEM_Drip", false))
    {
        eiu0reg();
        return;
    }
    if(getVar("AV_MEM_Drip", false))
    {
        let answer0 = getInput("Is your %Cock% still dripping, %SubName%?");
		while (!(!answer0.isTimeout() || answer0.isLike("yes") || answer0.isLike("no") ))
		{
			if (answer0.isTimeout())
			{
				break;
			}
			answer0 = getInput("%YesOrNo%");
		}
		if (answer0.isLike("yes"))
		{
			CMessage("%Good%");
		}
		else if (answer0.isLike("no"))
		{
			CMessage("Aww...too bad...");
			delVar("AV_MEM_Drip");
			eiu0reg();
			return;
		}
	}
    CMessage("Let\'s make it drip more...");
    delVar("AV_MEM_Drip");
    if(getVar("AV_DommeMistress", false))
    {
        DoEdges(3, 4, 0);
    }
    if(!getVar("AV_DommeMistress", false))
    {
        DoEdges(2, 3, 0);
    }
	if(getVar("av_fetish_cei", false))
	{
		av_fetish_cei();
		return;
	}
    eiu0reg();
    return;
    av_fetish_cei();
}
function av_fetish_cei()
{
    CMessage("You\'re going to eat it, every single fucking drop!");
    CMessage("From this day forward you\'re going to be swallowing lots of precum every day");
    CMessage("so you may as well start now.");
    delVar("AV_MEM_Drip");
    CMessage("Lift your hand up to your mouth.");
    CMessage("That\'s it. Now roll your tongue out and start lapping it up.");
    CMessage(random("Good job %PetName%, clean up that precum", "Savour every delicious drop of it"));
    CMessage("Keep licking until your hand is completely clean.");
    CMessage(random("That\'s a good little bitch", "It tastes so good, so nice on your tongue."));
    CMessage("Don\'t worry, from now on you\'re going to be tasting a whole hell of a lot of it.");
    eiu0reg();
    return;
    eiu0reg();
}
function eiu0reg()
{
    if(getVar("AV_MEM_Humil", false))
    {
        CMessage("So %SubName%, you " + random("crave ", "want ") + "to be humiliated by your " + random("Domme", "Mistress", "Goddess"));
    }
    if(getVar("AV_MEM_Humil", false))
    {
        run("Custom" + java.io.File.separator + "Memory" + java.io.File.separator + "Humiliated.js");
    }
    if(getVar("AV_MEM_Humil", false))
    {
        SkipLine01();
        return;
    }
    if(getVar("AV_MEM_Used", false))
    {
        CMessage("So %SubName%, you " + random("crave ", "want ") + "to be used by your " + random("Domme", "Mistress", "Goddess"));
    }
    SkipLine01();
}
function SkipLine01()
{
    if(getVar("AV_MEM_Used", false))
    {
        run("Custom" + java.io.File.separator + "Memory" + java.io.File.separator + "Used.js");
    }
    if(getVar("AV_MEM_Used", false))
    {
        SkipLine02();
        return;
    }
    if(getVar("AV_MEM_HurtMe", false))
    {
        CMessage("So %SubName%, you " + random("crave ", "want ") + "to be hurted by your " + random("Domme", "Mistress", "Goddess"));
    }
    SkipLine02();
}
function SkipLine02()
{
    if(getVar("AV_MEM_HurtMe", false))
    {
        run("Custom" + java.io.File.separator + "Memory" + java.io.File.separator + "Hurtme.js");
    }
    if(getVar("AV_MEM_Horny", false))
    {
        let answer0 = getInput("so, tell me %SubName%, are you still that horny?");
		while (!(!answer0.isTimeout() || answer0.isLike("yes", "yea", "yep") || answer0.isLike("no", "nope", "nah", "not") ))
		{
			if (answer0.isTimeout())
			{
				break;
			}
			answer0 = getInput("%YesOrNo%");
		}
        if (answer0.isLike("yes", "yea", "yep"))
        {
            aV_YesNeutralResponse();
        }
        else if (answer0.isLike("no", "nope", "nah", "not"))
        {
            aV_NoNeutralResponse();
            delVar("AV_MEM_Horny");
        }
    }
    if(getVar("AV_MEM_Serve", false))
    {
        CMessage("You said you " + random("crave ", "want ") + "to serve me %SubName%, we can arrange that...");
    }
    if(getVar("AV_MEM_Serve", false))
    {
        run("Custom" + java.io.File.separator + "Memory" + java.io.File.separator + "Serve.js");
    }
    switch(random("Ran01", "Ran02", "Ran03"))
    {
        case "Ran01":
        Ran01();
        return;
        break;
        case "Ran02":
        Ran02();
        return;
        break;
        case "Ran03":
        Ran03();
        return;
        break;
    }
    Ran01();
}
function Ran01()
{
    if(getVar("AV_MEM_LikeTeased", false))
    {
        switch(random("MemTeased1", "MemTeased2"))
        {
            case "MemTeased1":
            MemTeased1();
            return;
            break;
            case "MemTeased2":
            MemTeased2();
            return;
            break;
        }
    }
    if(getVar("AV_MEM_BallHurt", false))
    {
        MemBallHurt();
        return;
    }
    if(getVar("AV_MEM_LikeControl", false))
    {
        switch(random("MemLikeControl1", "MemLikeControl2"))
        {
            case "MemLikeControl1":
            MemLikeControl1();
            return;
            break;
            case "MemLikeControl2":
            MemLikeControl2();
            return;
            break;
        }
    }
    Ran02();
}
function Ran02()
{
    if(getVar("AV_MEM_BallHurt", false))
    {
        MemBallHurt();
        return;
    }
    if(getVar("AV_MEM_LikeControl", false))
    {
        switch(random("MemLikeControl1", "MemLikeControl2"))
        {
            case "MemLikeControl1":
            MemLikeControl1();
            return;
            break;
            case "MemLikeControl2":
            MemLikeControl2();
            return;
            break;
        }
    }
    if(getVar("AV_MEM_LikeTeased", false))
    {
        switch(random("MemTeased1", "MemTeased2"))
        {
            case "MemTeased1":
            MemTeased1();
            return;
            break;
            case "MemTeased2":
            MemTeased2();
            return;
            break;
        }
    }
    Ran03();
}
function Ran03()
{
    if(getVar("AV_MEM_LikeControl", false))
    {
        switch(random("MemLikeControl1", "MemLikeControl2"))
        {
            case "MemLikeControl1":
            MemLikeControl1();
            return;
            break;
            case "MemLikeControl2":
            MemLikeControl2();
            return;
            break;
        }
    }
    if(getVar("AV_MEM_LikeTeased", false))
    {
        switch(random("MemTeased1", "MemTeased2"))
        {
            case "MemTeased1":
            MemTeased1();
            return;
            break;
            case "MemTeased2":
            MemTeased2();
            return;
            break;
        }
    }
    if(getVar("AV_MEM_BallHurt", false))
    {
        MemBallHurt();
        return;
    }
    MemTeased1();
}
function MemTeased1()
{
    CMessage("Honestly %Name%, when you say you " + random("love ", "like to ") + "be teased");
    delVar("AV_MEM_LikeTeased");
    CMessage("just makes me want to keep you locked up " + random("a long time", "forever"));
    return;
    MemTeased2();
}
function MemTeased2()
{
    CMessage("Since you " + random("love ", "like to ") + "be teased");
    delVar("AV_MEM_LikeTeased");
    CMessage("I think about just keeping you in the cage all the time, until you go crazy.");
    CMessage("Can you imagine how horny you\'d get? Even worse than now!");
    CMessage("I\'d have to find other ways to empty those %Balls% occasionally.");
    return;
    MemBallHurt();
}
function MemBallHurt()
{
    CMessage("...your %Balls% are hurting?");
    delVar("AV_MEM_BallHurt");
    switch(random("Ball01", "Ball02"))
    {
        case "Ball01":
        Ball01();
        return;
        break;
        case "Ball02":
        Ball02();
        return;
        break;
    }
    Ball01();
}
function Ball01()
{
    CMessage("It\'s just, I love you being this horny.");
    CMessage("Your balls all full of cum turns me on so much.");
    CMessage("I adore how much you want me, how you desire me.");
    return;
    Ball02();
}
function Ball02()
{
    CMessage("Don\'t you love being " + random("denied", "so horny for me"));
    let answer0 = getInput("Do you really want to lose that for just a few seconds of pleasure?");
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesBadResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoGoodResponse();
    }
    return;
    
    MemLikeControl1();
}
function MemLikeControl1()
{
    CMessage("The male behavior is just so much guided by his " + random("desires", "hormones"));
    delVar("AV_MEM_LikeControl");
    CMessage("that\'s why the key of the chastity devices is the true remote control of the male brain");
    CMessage("and the symbol of the Female " + random("superiority ", "power ", "reign ") + "over it at the same time");
    return;
    MemLikeControl2();
}
function MemLikeControl2()
{
    CMessage("The devotion, the "+random("service", "obedience")+" of the true slave");
	delVar("AV_MEM_LikeControl");
    CMessage("is not based on expecting something " + random("back", "in return"));
    return;
    return;
}