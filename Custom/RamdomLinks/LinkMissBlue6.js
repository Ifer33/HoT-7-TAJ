DMessage("LinkMissBlue6: start");
main();
DMessage("LinkMissBlue6: end");
function main()
{
    if(getVar("AV_LinkMissBlue6_NotFirstTime", false))
    {
        AV_LinkMissBlue6_NotFirstTime();
        return;
    }
    setVar("AV_LinkMissBlue6", 0);
    setVar("AV_LinkMissBlue6_NotFirstTime", true);
    AV_LinkMissBlue6_NotFirstTime();
}
function AV_LinkMissBlue6_NotFirstTime()
{
    if (getVar("AV_LinkMissBlue6", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_LinkMissBlue6", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_LinkMissBlue6", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_LinkMissBlue6", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_LinkMissBlue6", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_LinkMissBlue6", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_LinkMissBlue6", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_LinkMissBlue6", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_LinkMissBlue6", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_LinkMissBlue6", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_LinkMissBlue6", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_LinkMissBlue6", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_LinkMissBlue6", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_LinkMissBlue6", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_LinkMissBlue6", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_LinkMissBlue6", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_LinkMissBlue6", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_LinkMissBlue6", getVar("AV_LinkMissBlue6", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_LinkMissBlue6", getVar("AV_LinkMissBlue6", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_LinkMissBlue6", getVar("AV_LinkMissBlue6", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_LinkMissBlue6", getVar("AV_LinkMissBlue6", 0) + 1000);
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
    setVar("AV_LinkMissBlue6", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    Stroking();
    return;
    Link1();
}
function Link1()
{
    CMessage("%SubName%...");
    CMessage("I love how horny and frustrated you get for me");
    CMessage("It makes me so wet...");
    CMessage("I know I can be cruel to you sometimes and god knows I <i>love</i> being cruel to you");
    CMessage("But remember, you make me feel amazing things even if you can\'t help it");
    CMessage("And I\'m grateful for it %Smile%");
    CMessage("Now then...");
    Stroking();
    return;
    Link2();
}
function Link2()
{
    CMessage("Grab your %Balls% tightly");
    CMessage("Feel how full of cum they are...");
    CMessage("All of that cum is mine, %PetName%");
    //--Command:BallTorture
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	if(getVar("ballTorture",false) ){
		cbt("ball");
	}
    CMessage("You %Balls% and your %Cock% and your cum are all mine");
    CMessage("I can do with them as I please, don\'t forget that");
    Stroking();
    return;
    Link3();
}
function Link3()
{
    CMessage("So what next, hmm?");
    CMessage("You probably want to %JerkOff% again");
    if(getVar("cockTorture",false) ){
		not_yet();
		return;
	}
    CMessage("Maybe you think that will make you feel better...");
    CMessage("But it will only make you ache more, won\'t it?");
    only_ache_more();
    return;
    not_yet();
}
function not_yet()
{
    CMessage("Not yet %Name%");
    cbt("cock");
    CMessage("I love how I can just randomly decide to hurt you %Grin%");
    CMessage("You\'ll take the pain as eagerly as the pleasure");
    CMessage("You don\'t even have to be bad");
    CMessage("I can make you suffer simply because I want to");
    CMessage("Look at that %Cock%... that poor thing %Grin%");
    CMessage("And it\'s going to get so much worse %Laugh%");
    cbt("cock");
    only_ache_more();
}
function only_ache_more()
{
    CMessage("That %Cock% looks like it needs something, doesn\'t it...");
    CMessage("I know what it needs");
    CMessage("What it needs is always the same thing, isn\'t it? %Giggles%");
    Stroking();
    return;
    Link4();
}
function Link4()
{
    CMessage("Do you ever wonder about the meaning of it all?");
    CMessage("I mean of life, the universe and everything?");
    CMessage("Sometimes I wonder if it\'s all worth the trouble");
    CMessage("But then I remind myself that it doesn\'t matter if there\'s no meaning to it all");
    CMessage("That we\'re alive at all is kind of amazing");
    CMessage("Why not enjoy ourselves while we can, right?");
    CMessage("Now, unfortunately for you I happen to enjoy tormenting boys like you %Grin%");
    CMessage("So let\'s go ahead and give life some meaning shall we...");
    Stroking();
    return;
}