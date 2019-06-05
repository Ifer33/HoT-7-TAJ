DMessage("LinksRandom 9: start");
main();
DMessage("LinksRandom 9: end");
function main()
{
    if(getVar("AV_Link9_NotFirstTime", false))
    {
        AV_Link9_NotFirstTime();
        return;
    }
    setVar("AV_Link9", 0);
    setVar("AV_Link9_NotFirstTime", true);
    AV_Link9_NotFirstTime();
}
function AV_Link9_NotFirstTime()
{
    if (getVar("AV_Link9", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link9", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link9", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link9", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link9", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link9", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link9", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link9", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link9", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link9", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link9", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link9", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link9", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link9", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link9", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link9", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link9", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link9", getVar("AV_Link9", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link9", getVar("AV_Link9", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link9", getVar("AV_Link9", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link9", getVar("AV_Link9", 0) + 1000);
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
    setVar("AV_Link9", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    CMessage("I like when boys willingly choose pain");
    CMessage("especially when it\'s for me and not because they like it.");
    CMessage("Since you\'ve been a good boy");
    CMessage("I\'m going to give you some pleasure.");
    setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("It\'s people like you that gets me fired up.");
    CMessage("I love a submissive who will go through pain just for my sake.");
    setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    CMessage("Are things starting to feel real now?");
    let answer0 = getInput("Is a part of you thinking about quitting?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesBadResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoGoodResponse();
    }
    CMessage("I certainly hope you are smarter than that");
    CMessage("My vision is your only passion from now on");
    setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    CMessage("Ohh poor %SubName%..");
    CMessage("Your balls must be aching right now..");
    CMessage("But i can help you..");
    CMessage("We can make them blue, %PetName%.. %Lol%");
    setStrokingNoTaunt();
    return;
}