DMessage("LinksRandom31: start");
main();
DMessage("LinksRandom31: end");
function main()
{
    if(getVar("AV_Link31_NotFirstTime", false))
    {
        AV_Link31_NotFirstTime();
        return;
    }
    setVar("AV_Link31", 0);
    setVar("AV_Link31_NotFirstTime", true);
    AV_Link31_NotFirstTime();
}
function AV_Link31_NotFirstTime()
{
    if (getVar("AV_Link31", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link31", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link31", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link31", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link31", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link31", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link31", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link31", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link31", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link31", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link31", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link31", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link31", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link31", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link31", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link31", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link31", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link31", getVar("AV_Link31", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link31", getVar("AV_Link31", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link31", getVar("AV_Link31", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link31", getVar("AV_Link31", 0) + 1000);
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
    setVar("AV_Link31", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    Stroking();
    return;
    Link1();
}
function Link1()
{
    CMessage("Forget about getting any gentle lovemaking, that\'s not for you.");
    if(getVar("AV_Beta", false))
    {
        CMessage("You\'re not just any kind of submissive, you\'re a filthy fucking beta.");
    }
    if(getVar("AV_Beta", false))
    {
        CMessage("And filthy fucking skanks get fucked hard.");
    }
    if(!getVar("AV_Beta", false))
    {
        CMessage("You\'re not just any kind of submissive, you\'re a filthy fucking slave.");
    }
    if(!getVar("AV_Beta", false))
    {
        CMessage("And filthy fucking slaves get fucked hard.");
    }
    Stroking();
    return;
    Link2();
}
function Link2()
{
    CMessage("Deep down you feel an urge to be submissive, to be subservient.");
    CMessage("But even more than that, you feel an overwheleming urge to be a slave.");
    CMessage("Not handsome, hard, and masculine...");
    if(getVar("av_fetish_pegging", false) || getVar("AV_LikeAnal", false))
    {
        CMessage("Getting on top of a woman and fucking her isn\'t ever going to sound as appealing to you as being mounted like a bitch and fucked hard with a strapon.");
    }
    if(!getVar("av_fetish_pegging", false) && !getVar("AV_LikeAnal", false))
    {
        CMessage("Getting on top of a woman and fucking her isn\'t ever going to be good anymore...");
    }
    Stroking();
    return;
    Link3();
}
function Link3()
{
    CMessage("God I wish I was there, or rather you were here");
    CMessage("you\'ve been one of my want fantasies for ages");
    CMessage("Yes, I have masturbated thinking about you lots...");
    if (randomInteger(1, 100) <= 50)
    {
        skip056();
        return;
    }
    CMessage("yes for a long time.");
    skip056();
	return;
}
function skip056()
{
    CMessage("I want to be every little dirty thought you\'ve had");
    Stroking();
    return;
    Link4();
}
function Link4()
{
    CMessage("I emasculated you tonight");
    if(getVar("av_fetish_rough", false) || getVar("AV_Beta", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("I humiliated you, worse than I ever have before, maybe worse than you\'ve ever experienced.");
    }
    CMessage("And I want you to know something");
    CMessage("I\'m going to do it again and again.");
    CMessage("I\'m going to break you down as low as you think you can be broken");
    CMessage("and then I\'m going to break you down further because I like doing it. ");
    if (randomInteger(0, 100) <= 50)
    {
        CMessage("I like doing it to you.");
    }
    CMessage("But just because I get off on abusing you, don\'t think for minute I don\'t care about you.");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Because even though you\'re a pathetic %PetName% you\'re my %PetName%.");
    }
    if(!getVar("av_fetish_rough", false))
    {
        CMessage("Because you\'re my %PetName%.");
    }
    CMessage("My property and I\'m going to take care of you.");
    let answer0 = getInput("And you\'re going to be a good little slave for me, right?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    Stroking();
    return;
}