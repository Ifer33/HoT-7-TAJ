DMessage("LinksRandom32: start");
main();
DMessage("LinksRandom32: end");
function main()
{
    if(getVar("AV_Link32_NotFirstTime", false))
    {
        AV_Link32_NotFirstTime();
        return;
    }
    setVar("AV_Link32", 0);
    setVar("AV_Link32_NotFirstTime", true);
    AV_Link32_NotFirstTime();
}
function AV_Link32_NotFirstTime()
{
    if (getVar("AV_Link32", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link32", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link32", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link32", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link32", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link32", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link32", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link32", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link32", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link32", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link32", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link32", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link32", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link32", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link32", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link32", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link32", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link32", getVar("AV_Link32", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link32", getVar("AV_Link32", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link32", getVar("AV_Link32", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link32", getVar("AV_Link32", 0) + 1000);
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
    setVar("AV_Link32", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    //setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    CMessage("I want you to rub your hands together over your cock");
    CMessage("you know, like when your hands are cold?");
    CMessage("But with your cock in the way.");
    CMessage("Back and forth.");
    CMessage("Generate some heat.");
    CMessage("Maybe a bit of pleasure.");
    CMessage("Stop...");
    //setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("I feel so sorry for you %SubName%...");
    CMessage("I think I will let you cum...right now.");
    sleep(10);
    CMessage("%No% changed my mind.");
    //setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    CMessage("There is nothing sexier than watching you squirm helplessly while I have my way with you.");
    CMessage("You only gets to release if and when I want you to.");
    let answer0 = getInput("Until then, your body is my plaything.",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        youOwnMeResponse();
    }
    //setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    CMessage("I don’t need to be fair. This situation is not fair.");
    CMessage("I am totally in control and being \"not fair\" is one way to demonstrate it.");
    CMessage("I can do whatever I want to you and you will let me");
    let answer0 = getInput("Right?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        iWillDoWhateverResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        i_Will_Do_Anything_NotResponse();
    }
    CMessage("because ultimately, me and only me will decide if and when that orgasm comes.");
    //setStrokingNoTaunt();
    return;
}