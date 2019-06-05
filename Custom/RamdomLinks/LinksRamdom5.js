DMessage("LinksRandom 5: start");
main();
DMessage("LinksRandom 5: end");
function main()
{
    if(getVar("AV_Link5_NotFirstTime", false))
    {
        AV_Link5_NotFirstTime();
        return;
    }
    setVar("AV_Link5", 0);
    setVar("AV_Link5_NotFirstTime", true);
    AV_Link5_NotFirstTime();
}
function AV_Link5_NotFirstTime()
{
    if (getVar("AV_Link5", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link5", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link5", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link5", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link5", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link5", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link5", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link5", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link5", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link5", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link5", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link5", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link5", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link5", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link5", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link5", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link5", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link5", getVar("AV_Link5", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link5", getVar("AV_Link5", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link5", getVar("AV_Link5", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link5", getVar("AV_Link5", 0) + 1000);
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
    CMessage("%1_ST_Tease%");
    setVar("AV_Link5", 0);
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Audio.js");
    setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    CMessage("%TimeToFindIfYouGetToCum%");
    setTempVar("AV_Dri01", true);
    edge("Bring yourself to the edge one more time");
    CMessage("I was just messing with you %lol%");
    CMessage("We are not done yet %PetName% %Grin%");
    delVar("AV_Dri01");
    CMessage("Ooooh Don\'t look at me like that %EmoteHappy%");
    CMessage("If you want to, we can stay with <i>this</i> ending");
    CMessage("I find it quite good %Grin%");
    CMessage("At least now you\'ve got another chance later");
    if (randomInteger(1, 100) <= 30)
    {
        ExtTime();
        return;
    }
    if (getMood() >= 70)
    {
        if (randomInteger(1, 100) <= 70)
        {
            ExtTime();
            return;
        }
    }
    if(getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 60)
        {
            ExtTime();
            return;
        }
    }
    CMessage("For now start %Stroking% %PetName%");
    setStrokingNoTaunt();
    return;
    ExtTime();
}
function ExtTime()
{
    CMessage("In fact, I will add some time to our session today");
    if(getVar("AV_DommeMistress", false))
    {
        //--Command:AddTeaseTime(15 Minutes,20 Minutes)
    }
    if(!getVar("AV_DommeMistress", false))
    {
        //--Command:AddTeaseTime(10 Minutes,15 Minutes)
    }
    setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("I don\'t want to be your girlfriend. I want to be your owner.");
    CMessage("I want you to do things for me that you would never otherwise do.");
    CMessage(random("Kinky ", "perverted ", "humiliating ") + "things.");
    CMessage("I want to strip you of your " + random("pride", "ego", "masculinity"));
    CMessage("And transform you into my sexy, slutty, obedient boytoy");
    setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    CMessage("You probably think I\'m here for your enjoyment.");
    CMessage("I\'m not. It\'s not that I mind if you enjoy yourself");
    CMessage("I just don\'t want you to enjoy yourself too much.");
    CMessage("You see, when you receive pleasure in smaller increments");
    CMessage("instead of the giant orgasm blasts you\'re used to");
    CMessage("it will feel better and better the longer you go");
    CMessage("and I\'ll be more and more in control of you.");
    setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    if (randomInteger(1, 100) <= 60)
    {
        NoPeg();
        return;
    }
    if(getVar("av_fetish_pegging", false))
    {
        av_fetish_pegging();
        return;
    }
    NoPeg();
}
function NoPeg()
{
    CMessage("More time will pass and your desperation will grow.");
    CMessage("By now I will have tied you to the bed a time or two.");
    CMessage("I would have even taken those opportunities to bring you to the edge of orgasm a few times...");
    CMessage(random("You will be so desperate that you will finally ask me when", "You will want to know so badly when"));
    CMessage("When will I permit you the orgasm you crave so deeply?");
    if (getOrgasmChance() == 0)
    {
        CMessage("Well, we know this will never happens %EmoteLaugh%");
    }
    setStrokingNoTaunt();
    return;
    av_fetish_pegging();
}
function av_fetish_pegging()
{
    CMessage("At some point I\'ll add pegging to my routine.");
    CMessage("It is important that you understand that as my slave you must submit COMPLETELY to me.");
    CMessage("On some nights that may mean simply kissing and sucking my strap-on.");
    CMessage("And, of course, some nights I\'m going to want to bend you over and fuck that beautiful ass of yours.");
    CMessage("Over time I will add thicker and longer strap-ons to the mix.");
    CMessage("You will become more and more nervous with every session, but more and more aroused as well.");
    setStrokingNoTaunt();
    return;
}