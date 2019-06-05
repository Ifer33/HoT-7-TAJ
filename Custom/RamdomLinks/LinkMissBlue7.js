DMessage("LinkMissBlue7: start");
main();
DMessage("LinkMissBlue7: end");
function main()
{
    if(getVar("AV_LinkMissBlue7_NotFirstTime", false))
    {
        AV_LinkMissBlue7_NotFirstTime();
        return;
    }
    setVar("AV_LinkMissBlue7", 0);
    setVar("AV_LinkMissBlue7_NotFirstTime", true);
    AV_LinkMissBlue7_NotFirstTime();
}
function AV_LinkMissBlue7_NotFirstTime()
{
    if (getVar("AV_LinkMissBlue7", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_LinkMissBlue7", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_LinkMissBlue7", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_LinkMissBlue7", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_LinkMissBlue7", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_LinkMissBlue7", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_LinkMissBlue7", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_LinkMissBlue7", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_LinkMissBlue7", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_LinkMissBlue7", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_LinkMissBlue7", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_LinkMissBlue7", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_LinkMissBlue7", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_LinkMissBlue7", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_LinkMissBlue7", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_LinkMissBlue7", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_LinkMissBlue7", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_LinkMissBlue7", getVar("AV_LinkMissBlue7", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_LinkMissBlue7", getVar("AV_LinkMissBlue7", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_LinkMissBlue7", getVar("AV_LinkMissBlue7", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_LinkMissBlue7", getVar("AV_LinkMissBlue7", 0) + 1000);
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
    setVar("AV_LinkMissBlue7", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    answer0=getInput("%SubName%,do you think about me a lot?");
    if (answer0.isLike("yes"))
    {
        CMessage("I want to be on your mind all the time");
    }
    else if (answer0.isLike("no", "not", "don't"))
    {
        CMessage("Maybe I should give you something to think about");
    }
    else if (answer0.isLike("all the time", "always", "every second", "every day", "all day", "obsessed"))
    {
        CMessage("%Laugh%");
    }else{
		CMessage("I <i>want</i> you to think about me");
	}
    CMessage("I want you to think about my ass in a short skirt");
    CMessage("The soft curves of my legs");
    CMessage("I want you to lay awake at night thinking about me");
    CMessage("When you do fall asleep I will appear in your dreams");
    CMessage("And when you wake up I will be the first thing you think about");
    setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("Knowing how much you want me turns me on so much");
    CMessage("Knowing that you\'re a leaking, throbbing bundle of desire for me");
    CMessage("%EmoteMoan%");
    CMessage("But you know what turns me on even more?");
    CMessage("That you can\'t have me and it\'s driving you crazy %Giggles%");
    CMessage("I\'ve always loved that ever since I became of age sexually");
    CMessage("Even when I was like 14 or 15 years old I loved denying guys");
    CMessage("Obviously I\'d ever heard of \'tease and denial\' back then");
    CMessage("I\'d make out with guys and totally leading them on, making them think I\'d have sex with them");
    CMessage("And then I\'d go \"sorry but I have to go now bye bye\" %Lol%");
    CMessage("Some of those guys got pretty pissed off...");
    CMessage("If I\'d done that to you, you\'d just kiss my feet and thank me %Laugh%");
    setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    CMessage("Orgasm denial is so hot");
    CMessage("A friend told me she does it with her partner");
    CMessage("She has quite an ingenious system, I would love to try it someday");
    CMessage("What she does is, she rates her own orgasms on a scale of 1 to 10");
    CMessage("When they get to 250 points, her partner gets 1 orgasm");
    CMessage("Then they add 100 points so the next goal is 350");
    CMessage("That way it's all about <i>her</i> orgasms");
    CMessage("It\'s a perfect system, really %Smile%");
    CMessage("If only we could find a way for you to give me orgasms...");
    CMessage("But you\'re pretty useless to me in that department");
    CMessage("Although making you squirm does make me wet");
    CMessage("I still have to rely on my own fingers to get me off");
    CMessage("Oh well...");
    setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    CMessage("What a life, huh?");
    CMessage("%JerkingOff% or a beautiful Goddess, floating on a cloud of sexual submission");
    CMessage("Everything a boy could ask for %Smile%");
    setStrokingNoTaunt();
    return;
}