DMessage("LinksRandom38: start");
main();
DMessage("LinksRandom38: end");
function main()
{
    if(getVar("AV_Link38_NotFirstTime", false))
    {
        AV_Link38_NotFirstTime();
        return;
    }
    setVar("AV_Link38", 0);
    setVar("AV_Link38_NotFirstTime", true);
    AV_Link38_NotFirstTime();
}
function AV_Link38_NotFirstTime()
{
    if (getVar("AV_Link38", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link38", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link38", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link38", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link38", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link38", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link38", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link38", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link38", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link38", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link38", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link38", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link38", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link38", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link38", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link38", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link38", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link38", getVar("AV_Link38", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link38", getVar("AV_Link38", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link38", getVar("AV_Link38", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link38", getVar("AV_Link38", 0) + 1000);
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
    setVar("AV_Link38", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    setStrokingNoTaunt();
    return;
    
    Link1();
}
function Link1()
{
    CMessage("Think about your cock for me.");
    CMessage("Think about how hard it is.");
    CMessage("Focus on it.");
    CMessage("Focus on it throbbing gently, pulsing up and down.");
    setStrokingNoTaunt();
    return;
    
    Link2();
}
function Link2()
{
    CMessage("Do you remember how fucking good it felt last time you came?");
    CMessage("Think about how fucking good it feels to cum.");
    CMessage("Imagine rope after rope shooting out of that cock...");
    setStrokingNoTaunt();
    return;
    
    Link3();
}
function Link3()
{
    CMessage("Think about stroking it.");
    CMessage("Don\'t touch it. Not yet.");
    CMessage("But think about it.");
    CMessage("Imagine wrapping your hand around your shaft and just stroking up and down.");
    CMessage("Think about how good it would feel to feel your hand wrap round");
    CMessage("grip your shaft, and then pump up and down, over your head, over and over again.");
    setStrokingNoTaunt();
    return;
    
    Link4();
}
function Link4()
{
    CMessage("How are you doing?");
    let answer0 = getInput("Managing to resist so far, huh?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("How far do you honestly think you\'ll get?");
    CMessage("Well, I can only assume you love the feeling of being horny.");
    CMessage("Because you love the feeling of me making you horny.");
    CMessage("Well, whatever it is, remember");
    CMessage("whether or not you cum today is up to me.");
    setStrokingNoTaunt();
    return;
}