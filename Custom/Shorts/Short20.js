DMessage("Short20: start");
main();
DMessage("Short20: end");
function main()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage("Well..... I\'m very disappointed.");
    let answer0 = getInput("What is the problem, %SubName%?");
    if (answer0.isLike("hurts", "anymore", "take", "take", "much"))
    {
        DecideHurt();
        return;
    }
    else if (answer0.isLike("break"))
    {
        DecideBreak();
        return;
    }
    else if (answer0.isLike("mean", "cruel"))
    {
        DecideCruel();
        return;
    }
    else if (answer0.isLike("aching", "aches", "suffering", "suffer"))
    {
        DecideSuffer();
        return;
    }
    else
    {
        Break();
        return;
    }
    DecideCruel();
}
function DecideCruel()
{
    if (getMood() > 30 && getMood() < 70)
    {
        if (randomInteger(1, 100) <= 50)
        {
            Break();
            return;
        }
    }
    if (getMood() >= 70)
    {
        if (randomInteger(1, 100) <= 10)
        {
            Break();
            return;
        }
    }
    if (getMood() <= 30)
    {
        if (randomInteger(1, 100) <= 75)
        {
            Break();
            return;
        }
    }
    CMessage(random("It only gets worse from here", "I thought being cruel to your %Cock% was the entire reason I\'m here", "Your %Cock% belongs to me, so I get to be as mean as I want"));
    Inter();
    return;
    return;
    DecideHurt();
}
function DecideHurt()
{
    if (getMood() > 30 && getMood() < 70)
    {
        if (randomInteger(1, 100) <= 50)
        {
            Break();
            return;
        }
    }
    if (getMood() >= 70)
    {
        if (randomInteger(1, 100) <= 10)
        {
            Break();
            return;
        }
    }
    if (getMood() <= 30)
    {
        if (randomInteger(1, 100) <= 75)
        {
            Break();
            return;
        }
    }
    CMessage(random("Seeing your pain turns me on so much ", "Good ", "I want it to hurt ", "You\'ll have to learn to endure more than this ") + "%PetName%");
    Inter();
    return;
    return;
    DecideBreak();
}
function DecideBreak()
{
    if (getMood() > 30 && getMood() < 70)
    {
        if (randomInteger(1, 100) <= 50)
        {
            Break();
            return;
        }
    }
    if (getMood() >= 70)
    {
        if (randomInteger(1, 100) <= 10)
        {
            Break();
            return;
        }
    }
    if (getMood() <= 30)
    {
        if (randomInteger(1, 100) <= 75)
        {
            Break();
            return;
        }
    }
    CMessage("No, I don\'t think you " + random("deserve ", "earned ") + "a " + random("breake", "pause"));
    Inter();
    return;
    return;
    DecideSuffer();
}
function DecideSuffer()
{
    if (getMood() >= 70)
    {
        CMessage(random("You think this is suffering? Don\'t make me laugh ", "Keep that up and I\'ll show that %Cock% real suffering ") + "%EmoteRandom%");
		Fim();
        return;
    }
    CMessage("I want that %Cock% to suffer a little for me, but...");
    if (getMood() <= 30)
    {
        if (randomInteger(1, 100) <= 75)
        {
            Break();
            return;
        }
    }
    if (getMood() > 30 && getMood() < 70)
    {
        if (randomInteger(1, 100) <= 50)
        {
            Break();
            return;
        }
    }
    CMessage("I like the thought of you suffering for me %PetName%.");
    Inter();
    return;
    return;
    Break();
}
function Break()
{
    CMessage("OK, I think " + random("you can have ", "I will give you ") + "a " + random("pause", "break"));
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_BreakStroking.js");
    return;
    Inter();
}
function Inter()
{
    if (randomInteger(1, 100) <= 50)
    {
        Fim();
        return;
    }
    CMessage("I expect you to know the rules by now and obey them");
    let answer0 = getInput("Will you " + random("obey me ", "submit ") + "now?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
        Fim();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("I\'m not kidding around %SubName%");
        Restict();
        return;
    }
    Restict();
}
function Restict()
{
    CMessage("%Okay% %SubName%, your last chance...");
	if(!getVar("hasChastity",false) ){
		NoChast();
		return;
	}else{
		CMessage("Now you\'re going to somehow make my %Cock% go soft and limp");
		CMessage("I don\'t care how you do it");
		run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_ChastityOn.js");
		return;
	}
    NoChast();
}
function NoChast()
{
    CMessage("So nice to have an orgasm once in a while, isn\'t it?");
    CMessage("But let\'s not make it a habit, %Name%");
    CMessage("In fact, consider yourself denied for the foreseeable future");
    CMessage("How about 2 weeks?");
    //--Command:RestrictOrgasm(2 Weeks)
    CMessage("This should make you obey me next time");
    return;
    Fim();
}
function Fim()
{
    return;
}