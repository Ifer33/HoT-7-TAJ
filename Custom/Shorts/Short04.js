DMessage("Short04: start");
main();
DMessage("Short04: end");
function main()
{
    if (isStroking())
    {
        CMessage("%StrokeSlower%");
        slowStroke();
    }
    CMessage("I bet you\'re sooooo frustrated and desperate.");
    CMessage("Tell me how bad you want to cum.");
    let answer0 = getInput("Go on, beg for it. I want to hear you plead and beg for relief.", 7);
    if (answer0.isTimeout())
    {
        AV_h5cf4w();
        return;
    }
    if (answer0.isLike("beg", "please"))
    {
        CMessage("%GoodBoy%");
        ChTime();
        return;
    }
    else if (answer0.isLike("mercy", "cum", "need", "want"))
    {
        CMessage("That\'s disappointing. You don\'t sound nearly desperate enough.");
    }
    else
    {
        CMessage("That\'s too bad. Guess you\'ll just have to go without.");
    }
    AV_h5cf4w();
}
function AV_h5cf4w()
{
    CMessage("You\'re not quite frustrated enough are you?");
    CMessage("Maybe I\'ll give you another opportunity to beg for it later");
    CMessage("Until then, you have my pleasure to attend to, don\'t you?");
    CMessage("After all, what the fuck else do I keep you around for?");
    return;
    ChTime();
}
function ChTime()
{
    if (getMood() >= 70)
    {
        if (randomInteger(1, 100) <= 70)
        {
            CBT2();
            return;
        }
    }
    if (getMood() <= 30)
    {
        if (randomInteger(1, 100) <= 50)
        {
            Time();
            return;
        }
    }
	//--UNINTERPRETED LINE:@Flag(AV_DommeMistress) @Variable[%SessionCBTBalls%]<[4] @NullResponse @Goto(CBT)
	if(getVar("AV_DommeMistress",false) && getVar("SessionCBTBalls",0)<4 ){
		CBT2();
	}
    //--UNINTERPRETED LINE:@NotFlag(AV_DommeMistress) @Variable[%SessionCBTBalls%]<[2] @NullResponse @Goto(CBT)
	if(!getVar("AV_DommeMistress",false) && getVar("SessionCBTBalls",0)<2 ){
		CBT2();
	}
    CMessage("Maybe this is one you should be ashamed of.");
    return;
    CBT2();
}
function CBT2()
{
    CMessage("Maybe we didn\'t hurt your %Balls% enough to cool you down...");
    CMessage("Let\'s fix that");
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    cbt("ball");
    CMessage("%ThatsEnough%");
    return;
    Time();
}
function Time()
{
    CMessage("As much as I like watching your horny little mind break, I also want to take care of you");
    CMessage("After all, I want to keep you as my private toy for a very long time %Smile%");
    let answer0 = getInput("So, do you want a Short Session %GeneralTime%?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Alright then, %Name%");
		//@RemoveTeaseTime(12 Minutes)
        Fim();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Then I guess I\'m going to have to make you suffer and ache and leak after all");
    }
    CMessage("But maybe you want suffer for more time...");
    let answer1 = getInput("It\'s that right, %PetName%?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("Alright then, %Name%");
        //--Command:AddTeaseTime(12 Minutes)
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Ok then");
    }
    Fim();
}
function Fim()
{
    return;
}