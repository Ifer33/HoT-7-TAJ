DMessage("LinksRandom40: start");
main();
DMessage("LinksRandom40: end");
function main()
{
    if(getVar("AV_Link40_NotFirstTime", false))
    {
        AV_Link40_NotFirstTime();
        return;
    }
    setVar("AV_Link40", 0);
    setVar("AV_Link40_NotFirstTime", true);
    AV_Link40_NotFirstTime();
}
function AV_Link40_NotFirstTime()
{
    if (getVar("AV_Link40", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link40", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link40", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link40", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link40", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link40", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link40", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link40", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link40", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link40", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link40", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link40", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link40", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link40", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link40", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link40", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link40", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link40", getVar("AV_Link40", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link40", getVar("AV_Link40", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link40", getVar("AV_Link40", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link40", getVar("AV_Link40", 0) + 1000);
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
    setVar("AV_Link40", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    Stroking();
    return;
    
    Link1();
}
function Link1()
{
    CMessage("How much more of this can you take?");
    CMessage("You NEED that release so, so badly right now.");
    CMessage("But, %Name%... did i say you could cum?");
    CMessage("Did i give you my permission?");
    CMessage("No.... right now, I want to just keep on teasing you.");
    Stroking();
    return;
    
    Link2();
}
function Link2()
{
    CMessage("I love it when you follow my commands.");
    CMessage("I love to use them on you, to heighten both our pleasure.");
    CMessage("Such a good boy.");
    let answer0 = getInput("Do you think I\'ve teased you enough?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoGoodResponse();
    }
    CMessage("Maybe I should give you what you so dearly deserve....");
    let answer1 = getInput("would you like that?",5);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    Stroking();
    return;
    
    Link3();
}
function Link3()
{
    CMessage("Now, Just....");
    CMessage("Let your cock rest for a moment, and relax");
    CMessage("You are trembling with arousal...");
    CMessage("I think you need to calm down, else our time together may be over sooner than you think.");
    CMessage("And I want to spend more time with you, %Name%...");
    CMessage("I love being with you and having this effect on your body...");
    CMessage("But cumming early?");
    CMessage("No, thats not what I want you to do.");
    Stroking();
    return;
    
    Link4();
}
function Link4()
{
    CMessage("You\'ve done so well for me.");
    CMessage("After all, it\'s just been building up so much pressure.");
    CMessage("Your balls are heaving, full of that hot, sticky cum you\'ve been saving up, just for me.");
    CMessage("You know, if i wanted to, i could relieve that pressure in an instant.");
    CMessage("BUT, you\'re going to have to wait, %Name%.");
    CMessage("I still have some more plans in store for you!");
    CMessage("After all, I haven\'t given you my permission.");
    Stroking();
    return;
}