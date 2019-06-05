DMessage("LinksRandom24: start");
main();
DMessage("LinksRandom24: end");
function main()
{
    if(getVar("AV_Link24_NotFirstTime", false))
    {
        AV_Link24_NotFirstTime();
        return;
    }
    setVar("AV_Link24", 0);
    setVar("AV_Link24_NotFirstTime", true);
    AV_Link24_NotFirstTime();
}
function AV_Link24_NotFirstTime()
{
    if (getVar("AV_Link24", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link24", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link24", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link24", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link24", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link24", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link24", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link24", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link24", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link24", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link24", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link24", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link24", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link24", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link24", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link24", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link24", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link24", getVar("AV_Link24", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link24", getVar("AV_Link24", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link24", getVar("AV_Link24", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link24", getVar("AV_Link24", 0) + 1000);
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
    setVar("AV_Link24", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    let answer0 = getInput("You think that you can resist me?",5);
    if (answer0.isLike("no", "nope", "nah", "not"))
    {
        iCantHelpMyselfResponse();
    }
    CMessage("You mind might be fighting me but your %Cock% knows exactly what it needs.");
    //--Command:YesMode(Goto,CallFromLink24)
    //CMessage("It\'s time to accept that fact that you\'re a submissive beta male.");
    //CMessage("You need feminine discipline and control.");
    //CMessage("You can struggle all you want but I\'ve got control of that cock");
    //CMessage("you\'ll going to learn your place");
    //--Command:YesMode(Normal)
	answer0 = getInput("It\'s time to accept that fact that you\'re a submissive beta male.",3);
    if (answer0.isLike("yes"))
    {
        CallFromLink24()
		return;
    }
	answer0 = getInput("You need feminine discipline and control.",3);
    if (answer0.isLike("yes"))
    {
        CallFromLink24()
		return;
    }
	answer0 = getInput("You can struggle all you want but I\'ve got control of that cock",3);
    if (answer0.isLike("yes"))
    {
        CallFromLink24()
		return;
    }
	answer0 = getInput("you\'ll going to learn your place",3);
    if (answer0.isLike("yes"))
    {
        CallFromLink24()
		return;
    }
    setStrokingNoTaunt();
    return;
    CallFromLink24();
}
function CallFromLink24()
{
    let answer0 = getInput("So, do you think you are a beta?");
    while (!(answer0.isLike("No") || answer0.isLike("Yes")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("No"))
    {
        CMessage("Oh really?");
        setVar("pvAlpha", true);
        am_an_alpha();
        return;
    }
    else if (answer0.isLike("Yes"))
    {
        CMessage("I thought so %Smile%");
        setVar("pvBeta", true);
        setVar("AV_Beta", true);
    }
    CMessage("At least it makes some things in life simple, right?");
    //--Command:YesMode(Normal)
    CMessage("I mean, you don\'t have to think about wether you could get a girl like me");
    CMessage("That doesn\'t mean you can\'t dream and drool over hot girls");
    CMessage("And just because you're not a <i>real</i> man doesn't mean you can't please a woman");
    CMessage("You just have to make a little bit more of an effort %Smile%");
    setStrokingNoTaunt();
    return;
    am_an_alpha();
}
function am_an_alpha()
{
    CMessage("Well, I\'d be happy to bring you down a peg %Laugh%");
    CMessage("Even if it\'s just for a few precious moments");
    //--Command:YesMode(Normal)
    CMessage("It can be good for Alpha males like yourself to know their place");
    CMessage("I mean, you're still a <i>guy</i>, which puts you below me by default %Smile%");
    setStrokingNoTaunt();
    return;
    
    Link2();
}
function Link2()
{
    CMessage("I am an expert at getting boys to do what I want them to.");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("I know just how to get submissive little slugs like you wrapped around my finger, and willing to do absolutely anything for my attention.");
    }
    if(!getVar("av_fetish_rough", false))
    {
        CMessage("I know just how to get submissives like you wrapped around my finger, and willing to do absolutely anything for my attention.");
    }
    CMessage("It\'s very simple, all I have to do is show you what you\'ll never have.");
    CMessage("Don\'t believe it\'s that easy?");
    setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    let answer0 = getInput("By now you\'ve probably realized that you are helplessly enslaved and totally under my control.",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        youControlMeResponse();
    }
    CMessage("The time has come for me to take your training to the next level");
    CMessage("you must understand what it is that I require of my slaves.");
    let answer1 = getInput("I expect no less than complete and total obedience.",5);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        wantToServeResponse();
    }
    CMessage("As I tease you I will explain to you exactly what I expect of you.");
    setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    let answer0 = getInput("Have you learned to cum on command for me yet?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("Each time you cum for me you become more enslaved, more submissive and so much easier to manipulate.");
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Be sure to catch it and swallow every drop for me like a good slave.");
    }
    setStrokingNoTaunt();
    return;
}