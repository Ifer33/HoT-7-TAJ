DMessage("LinksRandom16: start");
main();
DMessage("LinksRandom16: end");
function main()
{
    if(getVar("AV_Link16_NotFirstTime", false))
    {
        AV_Link16_NotFirstTime();
        return;
    }
    setVar("AV_Link16", 0);
    setVar("AV_Link16_NotFirstTime", true);
    AV_Link16_NotFirstTime();
}
function AV_Link16_NotFirstTime()
{
    if (getVar("AV_Link16", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link16", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link16", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link16", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link16", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link16", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link16", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link16", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link16", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link16", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link16", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link16", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link16", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link16", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link16", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link16", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link16", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link16", getVar("AV_Link16", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link16", getVar("AV_Link16", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link16", getVar("AV_Link16", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link16", getVar("AV_Link16", 0) + 1000);
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
    setVar("AV_Link16", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    //setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    if(getVar("AV_DommeMistress", false))
    {
        AV_DommeMistress();
        return;
    }
    if(getVar("av_fetish_rough", false))
    {
        av_fetish_rough();
        return;
    }
    CMessage("Your job is to please your owner and not the other way around.");
    CMessage("But you are a good %PetName% and obedient %Slave%.");
    CMessage("And I love when you beg like a puppy.");
    CMessage("You will learn that I\'m in charge, and you will obey to my orders.");
    CMessage("It\'s a pity that I need to punish you when you disobeyed me");
    if(getVar("av_fetish_foot", false))
    {
        CMessage("I want you to kiss my shoes when we meet. I want you to lick them shine. Do you understand\'");
    }
    //setStrokingNoTaunt();
    return;
    AV_DommeMistress();
}
function AV_DommeMistress()
{
    CMessage("I can tell you now that this is not experiment.");
    CMessage("This is a slavery program.");
    CMessage("You  belong to me now and depended on my mercy.");
    CMessage("During the session, I will use mental techniques that I have developed to control males.");
    CMessage("It\'s going to be a physically and  mentally hard process for you.");
    CMessage("I will play with you mind and recreate you, but at the end you will be happy.");
    CMessage("happy to serve me.");
    CMessage("Trust me, In a few days, you will worship me as your god and kiss the ground I\'m waling on.");
    //setStrokingNoTaunt();
    return;
    av_fetish_rough();
}
function av_fetish_rough()
{
    CMessage("You see, Just as I told you.");
    CMessage("It\'s easy to train males.");
    CMessage("This is the point where you understands I am above you and accepts my authority.");
    CMessage("I never knew I can have such control on you.");
    CMessage("Let\'s schedule this week another training session.");
    CMessage("I want you to obey every word I say.");
    CMessage("How long it will take\'");
    CMessage("You will see the progress every week.");
    CMessage("Every week I give you more restrictions until you does not do anything but serving me.");
    //setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("Excellent %PetName%, we made huge progress.");
    CMessage("I managed to tame you quickly.");
    CMessage("Some time ago, you were just a vanilla guy, and now look at you");
    CMessage("a submissive male with passion to serve his mistress.");
    CMessage("Now I can really use you for my needs. You will be a good slave to me.");
    if(getVar("av_fetish_foot", false))
    {
        CMessage("Kiss my feet and show me respect.");
    }
    CMessage("I am your %Owner%.");
    //setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    CMessage("I\'m going out with the girls tomorrow");
    CMessage("and I know you will be a good boy and wait for me.");
    CMessage("You see. This is why I like you.");
    CMessage("You are obedient and worshipful.");
    CMessage("I\'m so proud of you since you took the oath to serve me as my slave.");
    CMessage("We will have a great future together.");
    //setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    CMessage("I will train you and show you the way to serve me.");
    CMessage("It will be hard in the beginning");
    CMessage("but eventually you will get used to it.");
    CMessage("You will entertain me!");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("You are inferior to me. I am a female.");
    }
    if(getVar("av_fetish_pegging", false))
    {
        CMessage("You are my bitch. You will stay here with spread legs until I cum.");
    }
    //setStrokingNoTaunt();
    return;
}