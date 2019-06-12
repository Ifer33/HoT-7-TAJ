DMessage("LinksRandom 10: start");
main();
DMessage("LinksRandom 10: end");
function main()
{
	DMessage("LinksRamdom10: Beginning");
    if(getVar("AV_Link10_NotFirstTime", false))
    {
        AV_Link10_NotFirstTime();
        return;
    }
    setVar("AV_Link10", 0);
    setVar("AV_Link10_NotFirstTime", true);
    AV_Link10_NotFirstTime();
	DMessage("LinksRamdom10: End");
	return;
}
function AV_Link10_NotFirstTime()
{
    if (getVar("AV_Link10", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link10", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link10", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link10", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link10", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link10", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link10", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link10", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link10", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link10", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link10", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link10", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link10", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link10", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link10", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link10", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link10", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link10", getVar("AV_Link10", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link10", getVar("AV_Link10", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link10", getVar("AV_Link10", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link10", getVar("AV_Link10", 0) + 1000);
    Link4();
    return;
    Part1_1();
}
function Part1_1()
{
    switch(random("Mod1", "Mod2", "Mod3", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_2();
}
function Part1_2()
{
    switch(random("Mod2", "Mod3", "Mod4"))
    {
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_3();
}
function Part1_3()
{
    switch(random("Mod1", "Mod3", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_4();
}
function Part1_4()
{
    switch(random("Mod1", "Mod2", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_5();
}
function Part1_5()
{
    switch(random("Mod1", "Mod2", "Mod3"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
    }
    Part1_6();
}
function Part1_6()
{
    switch(random("Mod3", "Mod4"))
    {
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_7();
}
function Part1_7()
{
    switch(random("Mod2", "Mod4"))
    {
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_8();
}
function Part1_8()
{
    Mod4();
    return;
    Part1_9();
}
function Part1_9()
{
    switch(random("Mod1", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_10();
}
function Part1_10()
{
    switch(random("Mod2", "Mod3"))
    {
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
    }
    Part1_11();
}
function Part1_11()
{
    Mod3();
    return;
    Part1_12();
}
function Part1_12()
{
    Fim();
    return;
    Part1_13();
}
function Part1_13()
{
    switch(random("Mod1", "Mod3"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
    }
    Part1_14();
}
function Part1_14()
{
    Mod1();
    return;
    Part1_15();
}
function Part1_15()
{
    switch(random("Mod1", "Mod2"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
    }
    Part1_16();
}
function Part1_16()
{
    Mod2();
    return;
    Fim();
}
function Fim()
{
    setVar("AV_Link10", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    //setStrokingNoTaunt();
    return;
}
function Link1()
{
    CMessage("Well, it just occurred to me");
    setTempVar("AVp001", true);
    CMessage("that you probably don\'t know how girls touch themselves.");
    CMessage("Which is something you should definitely know.");
    CMessage("Because...that way when you\'re...with someone");
    CMessage("you\'ll have a better idea of what you\'re doing.");
    CMessage("Actually...the thing is, porn probably isn\'t a good way to learn.");
    delVar("AVp001");
    CMessage("It\'s much better to do it in person.");
    //CMessage("%StartStroking%");		//not needed?
    //setStrokingNoTaunt();
    return;
}
function Link2()
{
    CMessage("Ooooooohh, you have a little precum dripping already.");
    if(getVar("av_fetish_cei", false))
    {
        let answer0 = getInput("How about a little lick?",5);
        if (answer0.isLike("yes", "yea", "yep"))
        {
            aV_YesGoodResponse();
        }
        else if (answer0.isLike("no", "nope", "nah", "not"))
        {
            aV_NoBadResponse();
        }
    }
    CMessage("I just started. You must be enjoying this then.");
    CMessage("Your %Balls% are all nice and smooth.");
    CMessage("I know it hurts a little bit but once you get used to it");
    CMessage("you\'ll learn to love it.");
    CMessage("You\'re ridiculously hard right now.");
    //setStrokingNoTaunt();
    return;
}
function Link3()
{
    let answer0 = getInput("There we go, calmed yourself a bit?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        //run("Responses" + java.io.File.separator + "AV_YesNeutral.js");
		aV_YesNeutralResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("Because we\'re gonna do something real fun now");
    CMessage("Can you feel " + random("just how hot you make me?", "the effect I have on you...?"));
    CMessage("This is what you do to me...");
    //setStrokingNoTaunt();
    return;
}
function Link4()
{
    CMessage("I know everything you like now.");
    CMessage("Your kinks. Your desires.");
    CMessage("Oh I can create such a pleasurable experience for you");
    CMessage("and you will give off so much energy.");
    CMessage("I knew you were the one.");
    CMessage("I just...knew it.");
    //setStrokingNoTaunt();
    return;
}