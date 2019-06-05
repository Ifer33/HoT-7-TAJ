DMessage("LinksRandom39: start");
main();
DMessage("LinksRandom39: end");
function main()
{
    if(getVar("AV_Link39_NotFirstTime", false))
    {
        AV_Link39_NotFirstTime();
        return;
    }
    setVar("AV_Link39", 0);
    setVar("AV_Link39_NotFirstTime", true);
    AV_Link39_NotFirstTime();
}
function AV_Link39_NotFirstTime()
{
    if (getVar("AV_Link39", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link39", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link39", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link39", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link39", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link39", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link39", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link39", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link39", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link39", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link39", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link39", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link39", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link39", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link39", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link39", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link39", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link39", getVar("AV_Link39", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link39", getVar("AV_Link39", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link39", getVar("AV_Link39", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link39", getVar("AV_Link39", 0) + 1000);
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
    setVar("AV_Link39", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    setStrokingNoTaunt();
    return;
    
    Link1();
}
function Link1()
{
    CMessage("Feel it come down and engulf your needy cock, boy.");
    CMessage("You better squirm and buck and moan for me, %PetName%.");
    CMessage("Let me see what you really are.");
    setStrokingNoTaunt();
    return;
    
    Link2();
}
function Link2()
{
    CMessage("Lose all control for me, %PetName%.");
    CMessage("Feel all of your mind slipping away.");
    CMessage("I want you to be a mindless, rutting animal.");
    CMessage("I want you deeper and hotter and blanker with Every. Single. Stroke.");
    setStrokingNoTaunt();
    return;
    
    Link3();
}
function Link3()
{
    CMessage("I\'m going to get you all worked up");
    CMessage("dripping with pre-cum");
    CMessage("uncontrollably horny");
    CMessage("on the absolute edge of pleasure");
    CMessage("writhing in frustration and ecstasy.");
    CMessage("And then, if you want to cum, well, we will see.");
    let answer0 = getInput("Do you think you can resist? Do you think you want to resist?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    setStrokingNoTaunt();
    return;
    
    Link4();
}
function Link4()
{
    CMessage("Think about building up to the edge.");
    CMessage("Think about that feeling where you can feel the cum building up");
    CMessage("ready to explode.");
    CMessage("Thinking about your hand pumping up and down");
    CMessage("and getting you right to that edge.");
    setStrokingNoTaunt();
    return;
}