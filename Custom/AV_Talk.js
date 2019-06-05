DMessage("AV_Talk: start");
main();
DMessage("AV_Talk: end");
function main()
{
    if(getVar("AV_Talk_Decided", false))
    {
        AV_Talk_Decided();
        return;
    }
    CMessage("I " + random("imagine ", "know ", "understand ") + "have been " + random("hard ", "difficult ") + "for you, " + random("accepting ", "adjusting to ") + "your new " + random("life ", "submission ", "lifestyle ") + "and everything...");
    CMessage("and I want you to " + random("remember ", "know ") + "that I really " + random("like ", "love ", "appreciate ") + "how you\'ve " + random("submited ", "accepted ", "learned ") + "to put " + random("me ", "my satisfaction ") + "first.");
    CMessage(random("And ", "Because ") + "there is no " + random("escape ", "going back ") + "now, you will " + random("serve ", "worship ") + "me and " + random("obey ", "satisfy ") + "my needs, " + random("whatever they may be", "however I decide they need to be satisfied"));
    CMessage("I don\'t yet know how far I\'m going to " + random("use ", "tease ", "push ") + "you, but you should always know that I love you dearly and that you will always be my %PetName%.");
    CMessage("But right now, " + random("I want to do something special ", "I have a idea ", "I want to try something ") + "for you.");
    CMessage("%GeneralTime% " + random("I am on the mood for ", "I want explore more ", "I really want to talk about ", "I want to go deep in ") + "...");
    if(getVar("AV_Talk001_NotFirstTime", false))
    {
        AV_Talk001_NotFirstTime();
        return;
    }
    setVar("AV_Talk001", 0);
    setVar("AV_Talk001_NotFirstTime", true);
    AV_Talk001_NotFirstTime();
	return;
}
function AV_Talk001_NotFirstTime()
{
    if (getVar("AV_Talk001", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Talk001", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Talk001", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Talk001", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Talk001", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Talk001", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Talk001", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Talk001", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Talk001", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Talk001", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Talk001", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Talk001", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Talk001", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Talk001", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Talk001", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Talk001", 0) == 1101)
    {
        Part1_16();
        return;
    }
    Mod1();
}
function Mod1()
{
    setVar("AV_Talk001", getVar("AV_Talk001", 0) + 1);
    Pegging();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Talk001", getVar("AV_Talk001", 0) + 10);
    Humiliation();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Talk001", getVar("AV_Talk001", 0) + 100);
    Chastity();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Talk001", getVar("AV_Talk001", 0) + 1000);
    Control();
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
    setVar("AV_Talk001", 0);
    AV_Talk001_NotFirstTime();
    return;
    return;
    Pegging();
}
function Pegging()
{
    setTempVar("AV_Talk_Decided", true);
    setTempVar("AV_Talk_Pegging", true);
    AV_Talk_Decided();
    return;
    Humiliation();
}
function Humiliation()
{
    setTempVar("AV_Talk_Decided", true);
    setTempVar("AV_Talk_Humiliation", true);
    AV_Talk_Decided();
    return;
    Chastity();
}
function Chastity()
{
    setTempVar("AV_Talk_Decided", true);
    setTempVar("AV_Talk_Chastity", true);
    AV_Talk_Decided();
    return;
    Control();
}
function Control()
{
    setTempVar("AV_Talk_Decided", true);
    setTempVar("AV_Talk_Control", true);
    AV_Talk_Decided();
    return;
    AV_Talk_Decided();
}
function AV_Talk_Decided()
{
    if(getVar("AV_Talk_Pegging", false))
    {
        CMessage("Pegging!");
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "Talks" + java.io.File.separator + "AV_Pegging.js");
    }else
    if(getVar("AV_Talk_Humiliation", false))
    {
        CMessage("Humiliation!");
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "Talks" + java.io.File.separator + "AV_Humiliation.js");
    }else
    if(getVar("AV_Talk_Chastity", false))
    {
        CMessage("Chastity!");
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "Talks" + java.io.File.separator + "AV_Chastity.js");
    }else
    if(getVar("AV_Talk_Control", false))
    {
        CMessage(random("Orgasm Control", "Female Domination"));
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "Talks" + java.io.File.separator + "AV_ControlOrg.js");
    }
    return;
}