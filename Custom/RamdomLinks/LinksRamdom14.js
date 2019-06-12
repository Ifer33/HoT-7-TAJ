DMessage("LinksRandom14: start");
main();
DMessage("LinksRandom14: end");
function main()
{
    if(getVar("AV_Link14_NotFirstTime", false))
    {
        AV_Link14_NotFirstTime();
        return;
    }
    setVar("AV_Link14", 0);
    setVar("AV_Link14_NotFirstTime", true);
    AV_Link14_NotFirstTime();
}
function AV_Link14_NotFirstTime()
{
    if (getVar("AV_Link14", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link14", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link14", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link14", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link14", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link14", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link14", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link14", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link14", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link14", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link14", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link14", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link14", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link14", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link14", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link14", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link14", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link14", getVar("AV_Link14", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link14", getVar("AV_Link14", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link14", getVar("AV_Link14", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link14", getVar("AV_Link14", 0) + 1000);
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
    setVar("AV_Link14", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    //setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    CMessage("Cumming is followed by misery, a sense of loss, regret.");
    CMessage("I want you to stroke, but not cum.");
    CMessage("I want you to edge hard, but not release.");
    CMessage("I want you to be terrified of orgasming");
    CMessage("in case that next edge is never quite as good as it could have been if you just left yourself...");
    CMessage("blue balled, teased and denied.");
    //setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("You\'re starting to realize that there truly is no release for you.");
    CMessage("Not physically, and not mentally.");
    CMessage("You\'re trapped in this cycle, and how do I keep you here?");
    if(getVar("pthevCompleteControlYES", false))
    {
        CMessage("By controlling your orgasms, of course.");
    }
    CMessage("You\'re so enamored and captivated by me because every time you pump that cock for me");
    CMessage("you flood your system with endorphins, dopamine, happy hormones.");
    if(!getVar("pthevCompleteControlYES", false))
    {
        AV_NotControl();
        return;
    }
    BackHer();
	return;
}
function BackHer()
{
    CMessage("It\'s not cumming that you enjoy");
    CMessage("it\'s that blissful edge right before you do.");
    CMessage("It\'s that cresting that you lust after.");
    //setStrokingNoTaunt();
    return;
    AV_NotControl();
}
function AV_NotControl()
{
    CMessage("I would love it if you\'d let me control when you masturbate");
    CMessage("Not only during our sessions but in between as well");
    let answer0 = getInput("What do you think?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_WantControlShort.js");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Too bad %EmoteSad%");
    }
    BackHer();
    return;
    Link3();
}
function Link3()
{
    CMessage("You love stroking \"my\" cock, don\'t you?");
    let answer0 = getInput("You love ME, don\'t you?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        im_in_Love_with_YouResponse();
    }
    CMessage("Mmmhmm, give in to how good losing all of your power feels.");
    CMessage("There is liberty in letting go.");
    CMessage("Give yourself to me.");
    //setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    CMessage("You\'re so used to stroking for me, but I want you to take it to the next level.");
    let answer0 = getInput("I want ownership, and you crave my control.",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        youOwnMeResponse();
    }
    CMessage("So how about we pretend, just for today, that that meat between your legs, is MINE. MY cock.");
    CMessage("It doesn\'t belong to you.");
    let answer1 = getInput("You don\'t control it.",5);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        youControlMeResponse();
    }
    CMessage("It\'s just a joystick, attached to your weak, vulnerable body");
    CMessage("which becomes more and more submissive for me with every pump of MY dick.");
    CMessage("feel my cock throb, feel my balls ache.");
    //setStrokingNoTaunt();
    return;
}