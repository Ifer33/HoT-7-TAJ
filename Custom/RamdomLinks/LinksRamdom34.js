DMessage("LinksRandom34: start");
main();
DMessage("LinksRandom34: end");
function main()
{
    if(getVar("AV_Link34_NotFirstTime", false))
    {
        AV_Link34_NotFirstTime();
        return;
    }
    setVar("AV_Link34", 0);
    setVar("AV_Link34_NotFirstTime", true);
    AV_Link34_NotFirstTime();
}
function AV_Link34_NotFirstTime()
{
    if (getVar("AV_Link34", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link34", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link34", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link34", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link34", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link34", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link34", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link34", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link34", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link34", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link34", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link34", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link34", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link34", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link34", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link34", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link34", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link34", getVar("AV_Link34", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link34", getVar("AV_Link34", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link34", getVar("AV_Link34", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link34", getVar("AV_Link34", 0) + 1000);
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
    setVar("AV_Link34", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    //setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    if(getVar("pvMadeKeyholder", false))
    {
        CMessage("Chastity - Any man losing control of his cock to me is automatically putty in my hands.");
    }
    if(!getVar("pvMadeKeyholder", false))
    {
        CMessage("Any man losing control of his cock to me is automatically putty in my hands.");
    }
	CMessage("Let's face it – that's where half your brain is normally.");
    if(getVar("pvMadeKeyholder", false))
    {
        CMessage("With the keys in my hand, and no chance of release, your chastity will be a constant 24x7 reminder of your new status.");
    }
    if(!getVar("pvMadeKeyholder", false))
    {
        CMessage("and no chance of release, your ache will be a constant 24x7 reminder of your new status.");
    }
    CMessage("Every time you moves, it will feel like I am pulling you around by your cock.");
    let answer0 = getInput("a male slave needs to be completely sexually controlled.",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        menNeedControlResponse();
    }
    CMessage("And no safety keys – you must know you're committed.");
    //setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("I never feel like a T&D session has to end");
    CMessage("I can PAUSE a session, go about my day and then");
    CMessage("the next day start all over again");
    CMessage("The impact of a good T&D session lasts...it's a cumulative thing. ");
    CMessage("If I tease and deny you over several days");
    CMessage("the tension will continue to build up and the ultimate release will be that much sweeter.");
    //setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    CMessage("The Mistress/slave relationship can and should be highly intimate.");
    CMessage("Or we will really miss the best part of your surrender");
    CMessage("your demonstration of your total devotion to me");
    CMessage("and allowing me to make it formal and permanent.");
    //setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    CMessage("You know what i bet?");
    CMessage("I bet you secretly like this.");
    CMessage("You like the thought that every word i say to you is slowly corroding your free will.");
    let answer0 = getInput("You WANT to surrender to a powerful woman, don\'t you?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        wantToSubmitResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("Don\'t worry, all guys secretly want to.");
    //setStrokingNoTaunt();
    return;
}