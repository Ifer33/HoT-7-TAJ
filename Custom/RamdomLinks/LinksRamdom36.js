DMessage("LinksRandom36: start");
main();
DMessage("LinksRandom36: end");
function main()
{
    if(getVar("AV_Link36_NotFirstTime", false))
    {
        AV_Link36_NotFirstTime();
        return;
    }
    setVar("AV_Link36", 0);
    setVar("AV_Link36_NotFirstTime", true);
    AV_Link36_NotFirstTime();
}
function AV_Link36_NotFirstTime()
{
    if (getVar("AV_Link36", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link36", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link36", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link36", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link36", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link36", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link36", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link36", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link36", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link36", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link36", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link36", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link36", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link36", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link36", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link36", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link36", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link36", getVar("AV_Link36", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link36", getVar("AV_Link36", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link36", getVar("AV_Link36", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link36", getVar("AV_Link36", 0) + 1000);
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
    setVar("AV_Link36", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    Stroking();
    return;
    Link1();
}
function Link1()
{
    CMessage("Your cock started to obey my commands.");
    CMessage("And with every passing second your cock goes deeper and deeper into a trance.");
    CMessage("And as he goes deeper and deeper into a trance your cock becomes more and more arroused.");
    CMessage("That\'s right.");
    CMessage("Your cock becomes deeply aroused by my powerful words.");
    Stroking();
    return;
    
    Link2();
}
function Link2()
{
    CMessage("Remember, an orgasm is not a right, it is a health necessity.");
    CMessage("It is not a reward either.");
    CMessage("Mine are important and only orgasms that should be cherished.");
    Stroking();
    return;
    
    Link3();
}
function Link3()
{
    CMessage("Chastising you is the begging of emasculation.");
    CMessage("Pegging is another great way to emasculate.");
    CMessage("Making you my bitch, bring out your feminine side.");
    CMessage("Bringing out your feminine side works beautifully in favor of emasculation.");
    CMessage("Emasculation kills the ego every man has.");
    CMessage("Ego is an absolute enemy.");
    CMessage("A pair of panties could also do the trick nicely.");
    Stroking();
    return;
    
    Link4();
}
function Link4()
{
    CMessage("Not matter what you want");
    CMessage("You can do nothing about it.");
    CMessage("Your cock knows what he wants while you are completely helpless.");
    CMessage("Your cock makes decisions all of its own.");
    CMessage("He twitches, he throbs, he stiffens.");
    Stroking();
    return;
}