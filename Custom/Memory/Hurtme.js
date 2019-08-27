DMessage("Hurtme: start");
main();
DMessage("Hurtme: end");
function main()
{
    if(getVar("AV_Mem_Hurtme_NotFirstTime", false))
    {
        AV_Mem_Hurtme_NotFirstTime();
        return;
    }
    setVar("AV_Mem_Hurtme", 0);
    setVar("AV_Mem_Hurtme_NotFirstTime", true);
    AV_Mem_Hurtme_NotFirstTime();
}
function AV_Mem_Hurtme_NotFirstTime()
{
    if (getVar("AV_Mem_Hurtme", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Mem_Hurtme", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Mem_Hurtme", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Mem_Hurtme", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Mem_Hurtme", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Mem_Hurtme", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Mem_Hurtme", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Mem_Hurtme", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Mem_Hurtme", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Mem_Hurtme", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Mem_Hurtme", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Mem_Hurtme", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Mem_Hurtme", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Mem_Hurtme", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Mem_Hurtme", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Mem_Hurtme", 0) == 1101)
    {
        Part1_16();
        return;
    }
    Mod1();
}
function Mod1()
{
    setVar("AV_Mem_Hurtme", getVar("AV_Mem_Hurtme", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Mem_Hurtme", getVar("AV_Mem_Hurtme", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Mem_Hurtme", getVar("AV_Mem_Hurtme", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Mem_Hurtme", getVar("AV_Mem_Hurtme", 0) + 1000);
    Modulo4();
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
    setVar("AV_Mem_Hurtme", 0);
    AV_Mem_Hurtme_NotFirstTime();
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    if(getVar("AV_Beta", false))
    {
        CMessage(random("Discipline ", "punishment ") + "for a beta on a regular basis is very important.");
    }
    if(!getVar("AV_Beta", false))
    {
        CMessage("Discipline for a submissive on a regular basis is very important.");
    }
    CMessage("It conditions him to be submissive to Mistress");
    CMessage("the pain serving as a " + random("tangible reminder ", "reminder ") + "that She has the " + random("control ", "power ") + "to hurt " + random("as well as give pleasure", "or give pleasure"));
    Continue_HurtMe();
    return;
    Modulo2();
}
function Modulo2()
{
    CMessage("A %Slave% " + random("can easily ", "always ") + random("want ", "look forward to ") + random("discipline", "punishment"));
    CMessage("It is a " + random("reassuring act ", "act ") + "which acknowledges his " + random("masochistic streak", "desire to have intense sensation"));
    CMessage(random("It is a given that he will be disciplined at regular intervals", "as times when his mistress is feeling sadistic", "It is accepted that this is part of the relationship much in the same way that cunnilingus or edging is"));
    Continue_HurtMe();
    return;
    Modulo3();
}
function Modulo3()
{
    CMessage(random("%Slave% need a Woman\'s strong hand to discipline and punish him", "Sometimes a %Slave% needs subtle discipline"));
    CMessage("You don\'t even have to say a word and I know that I\'m right.");
    Continue_HurtMe();
    return;
    Modulo4();
}
function Modulo4()
{
    CMessage("Submission is about pleasing the person in charge");
    CMessage("even if it means you go through a great deal of suffering.");
    CMessage("I know sometimes things seem challenging but it is all for the better in the end.");
    Continue_HurtMe();
}
function Continue_HurtMe()
{
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        wait(20);
        setVar("AV_PinDone", true);
    }
    delVar("AV_MEM_HurtMe");
    run("Custom" + java.io.File.separator + "Memory" + java.io.File.separator + "Hurtme2.js");
    return;
}