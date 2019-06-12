DMessage("LinksRandom12: start");
main();
DMessage("LinksRandom12: end");
function main()
{
    if(getVar("AV_Link12_NotFirstTime", false))
    {
        AV_Link12_NotFirstTime();
        return;
    }
    setVar("AV_Link12", 0);
    setVar("AV_Link12_NotFirstTime", true);
    AV_Link12_NotFirstTime();
}
function AV_Link12_NotFirstTime()
{
    if (getVar("AV_Link12", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link12", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link12", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link12", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link12", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link12", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link12", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link12", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link12", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link12", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link12", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link12", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link12", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link12", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link12", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link12", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link12", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link12", getVar("AV_Link12", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link12", getVar("AV_Link12", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link12", getVar("AV_Link12", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link12", getVar("AV_Link12", 0) + 1000);
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
    setVar("AV_Link12", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    //setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    if(getVar("av_fetish_cei", false))
    {
        AV_CEI2();
        return;
    }
    CMessage(random("I want to use you more", "I want to use you hard", "I want use you as hard as I like"));
    CMessage("Because you " + random("deserve it", "deserve to be used", "deserved that"));
    CMessage("I will not hold back");
    CMessage("I\'m so damn horny " + random("%PetName%", "%SubName%"));
    //setStrokingNoTaunt();
    return;
    AV_CEI2();
}
function AV_CEI2()
{
    CMessage("I\'m here for you.");
    CMessage("I\'m going to make you drink that load.");
    CMessage("And you\'ll love it.");
    CMessage("Look down at your swollen dick.");
    CMessage("Look at the head, look at the precum.");
    CMessage("You want that load, you need to do it for me.");
    //setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    if(getVar("av_fetish_cei", false))
    {
        AV_CEI();
        return;
    }
    CMessage(random("I want to use you more", "I want to use you hard", "I want use you as hard as I like"));
    CMessage("Because you " + random("deserve it", "deserve to be used", "deserved that"));
    CMessage("I will not hold back");
    CMessage("I\'m so damn horny " + random("%PetName%", "%SubName%"));
    //setStrokingNoTaunt();
    return;
    AV_CEI();
}
function AV_CEI()
{
    let answer0 = getInput("You want to taste your cum?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        callMeResponse();
    }
    CMessage("You neeeeeed to taste your cum.");
    CMessage("Have you chickened out before?");
    CMessage("I really hate it when guys chicken out.");
    CMessage("You want to be kinky, you want to taste that load, but once you nut you lose the courage.");
    CMessage("Poor baby.");
    CMessage("Well no pussying out %GeneralTime%, ok?");
    CMessage("We\'re gonna do it.");
    CMessage("We\'re gonna break you in.");
    CMessage("You\'re gonna love it.");
    //setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    if(getVar("AV_LikeAnal", false))
    {
        AV_Peg();
        return;
    }
    CMessage(random("I want to use you more", "I want to use you hard", "I want use you as hard as I like"));
    CMessage("Because you " + random("deserve it", "deserve to be used", "deserved that"));
    CMessage("I will not hold back");
    CMessage("I\'m so damn horny " + random("%PetName%", "%SubName%"));
    //setStrokingNoTaunt();
    return;
    AV_Peg();
}
function AV_Peg()
{
    CMessage("I\'ve got this big black silicone, you know...");
    CMessage("What better way to fuck you than with 9 inches of cock, it\'s even bigger than yours!");
    CMessage("A little over the top?");
    CMessage("Noo...");
    CMessage("You want to be my ass slut.");
    //setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    if(getVar("av_fetish_foot", false))
    {
        AV_pe();
        return;
    }
    CMessage(random("I want to use you more", "I want to use you hard", "I want use you as hard as I like"));
    CMessage("Because you " + random("deserve it", "deserve to be used", "deserved that"));
    CMessage("I will not hold back");
    CMessage("I\'m so damn horny " + random("%PetName%", "%SubName%"));
    //setStrokingNoTaunt();
    return;
    AV_pe();
}
function AV_pe()
{
    CMessage("Would you like my feet on your cock?");
    CMessage("Dont look at them stay focused on my face slaveboy");
    CMessage("I bet you would really like that");
    CMessage("My toes rubbing up and down your shaft");
    CMessage("Slowly milking out tiny drops of precum");
    let answer0 = getInput("Would you let me do that?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    //setStrokingNoTaunt();
    return;
}