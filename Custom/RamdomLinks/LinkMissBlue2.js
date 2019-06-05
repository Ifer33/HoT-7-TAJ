DMessage("LinkMissBlue2: start");
main();
DMessage("LinkMissBlue2: end");
function main()
{
    if(getVar("AV_LinkMissBlue2_NotFirstTime", false))
    {
        AV_LinkMissBlue2_NotFirstTime();
        return;
    }
    setVar("AV_LinkMissBlue2", 0);
    setVar("AV_LinkMissBlue2_NotFirstTime", true);
    AV_LinkMissBlue2_NotFirstTime();
}
function AV_LinkMissBlue2_NotFirstTime()
{
    if (getVar("AV_LinkMissBlue2", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_LinkMissBlue2", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_LinkMissBlue2", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_LinkMissBlue2", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_LinkMissBlue2", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_LinkMissBlue2", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_LinkMissBlue2", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_LinkMissBlue2", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_LinkMissBlue2", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_LinkMissBlue2", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_LinkMissBlue2", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_LinkMissBlue2", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_LinkMissBlue2", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_LinkMissBlue2", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_LinkMissBlue2", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_LinkMissBlue2", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_LinkMissBlue2", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_LinkMissBlue2", getVar("AV_LinkMissBlue2", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_LinkMissBlue2", getVar("AV_LinkMissBlue2", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_LinkMissBlue2", getVar("AV_LinkMissBlue2", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_LinkMissBlue2", getVar("AV_LinkMissBlue2", 0) + 1000);
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
    setVar("AV_LinkMissBlue2", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    CMessage("I wonder... if I don\'t allow you to %JerkOff% now...");
    CMessage("How long would it take for your %Cock% to get limp?");
    CMessage("A long time I bet %Laugh%");
    CMessage("I\'m not that patient, %Name%");
    setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("Remember making water balloons in the summer when you were a kid?");
    CMessage("I sure do...");
    CMessage("Holding a balloon under a faucet to fill it");
    CMessage("How it would slowly expand and grow heavier and heavier");
    CMessage("Holding the balloon between my index finger and thumb");
    CMessage("Cupping it with my other hand so it wouldn\'t slip and fall");
    CMessage("I always tried to make the biggest water balloon of all");
    CMessage("Kind of like I\'m doing with your %Balls% right now %Lol%");
    setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    CMessage("Sometimes I think we should limit your orgasms to special occasions");
    CMessage("Like, I don\'t know, One at Christmas an one at Easter");
    CMessage("And maybe one ruined orgasm at your birthday %Laugh%");
    setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    CMessage("All that starting and stopping, stroking and not stroking");
    let answer0 = getInput("Must get pretty frustrating for you, right?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        ark_FrustratedResponse();
    }
    CMessage("I guess it\'s a good thing you like sexual frustration so much %Grin%");
    setStrokingNoTaunt();
    return;
}