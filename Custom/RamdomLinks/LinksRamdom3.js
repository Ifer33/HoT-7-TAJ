DMessage("LinksRandom 3: start");
main();
DMessage("LinksRandom 3: end");
function main()
{
    if(getVar("AV_Link3_NotFirstTime", false))
    {
        AV_Link3_NotFirstTime();
        return;
    }
    setVar("AV_Link3", 0);
    setVar("AV_Link3_NotFirstTime", true);
    AV_Link3_NotFirstTime();
}
function AV_Link3_NotFirstTime()
{
    if (getVar("AV_Link3", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link3", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link3", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link3", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link3", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link3", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link3", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link3", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link3", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link3", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link3", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link3", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link3", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link3", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link3", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link3", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link3", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link3", getVar("AV_Link3", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link3", getVar("AV_Link3", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link3", getVar("AV_Link3", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link3", getVar("AV_Link3", 0) + 1000);
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
    setVar("AV_Link3", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    Stroking();
    return;
    Link1();
}
function Link1()
{
    CMessage("Edge, stop, edge, stop.");
    edge("%Edge%");
    CMessage("You must be in heaven.");
    edge("%Edge%");
    CMessage("Build up that wonderful sexual frustration for me.");
    CMessage("Good thing you %Love% the feeling of that sexual frustration so much.");
    CMessage(random("You still have a ways to go %PetName%", "Imagine how frustrated you are going to start to %Feel%"));
    Stroking();
    return;
    Link2();
}
function Link2()
{
    answer0=getInput("Could you go through all this and then stop and put your %Cock% back in your pants?")
    while (!(answer0.isLike("yes") || answer0.isLike("no") ))
    {
        answer0 = getInput("%YesOrNo%");
    }
	if (answer0.isLike("no"))
    {
        CMessage("If that\'s what I tell you to do, then you\'d better do it.");
        mau1();
        return;
    }
    else if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
        bom1();
        return;
    }
    bom1();
	return;
}
function bom1()
{
    increaseAnger(-3)
    fim1();
    return;
    mau1();
}
function mau1()
{
    increaseAnger(3)
    fim1();
	return;
}
function fim1()
{
    if(getVar("AV_Know_14", false))
    {
        AV_Know_14();
        return;
    }
    CMessage("But, just in case...");
    CMessage("If I need, what would be a better way to punish you?");
    setVar("AV_Persona15", createInput().getAnswer());
    CMessage("Hmm");
    setVar("AV_Know_14", true);
    Stroking();
    return;
    AV_Know_14();
}
function AV_Know_14()
{
    Stroking();
    return;
    Link3();
}
function Link3()
{
    CMessage("You should be thanking me.");
    if (getOrgasmChance() == 0)
    {
        CMessage("When deny your orgasm,");
    }
    if (getOrgasmChance() >= 70 && getOrgasmChance() < 100)
    {
        CMessage("If I deny your orgasm,");
    }
    if (getOrgasmChance() == 100)
    {
        CMessage("When I let you cum");
    }
    if (getOrgasmChance() >= 70 && getOrgasmChance() < 100)
    {
        CMessage("You at least get to enjoy some sensation riding the edge.");
    }
    if (getOrgasmChance() == 100)
    {
        CMessage("Cumming will feel so good after all these edges");
    }
    let answer0 = getInput("Are you having fun yet?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Ooooh I\'ll make sure to use it against you");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("That\'s too bad");
        pula4();
        return;
    }
    increaseAnger(-3)
    CMessage("I know I am...");
    pula4();
	return;
}
function pula4()
{
    CMessage("I love %Teasing% your orgasm...");
    CMessage("Holding the power to let you release in my hands...");
    CMessage("You can\'t even %Stroke% it again until I say the magic words...");
    CMessage("You desperately want me to tell you you can...");
    CMessage("while you feel your dick start to get softer...and softer... ");
    CMessage("and softer %Lol%",1);
    let answer0 = getInput("Now tell me...do you think you deserve to cum?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        next1();
        return;
    }
    else if (answer0.isLike("no"))
    {
        next2();
        return;
    }
    next1();
	return;
}
function next1()
{
    let answer0 = getInput("Do you think you\'ve been %Submissive% enough to earn your release from this agony??");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Ooh that\'s really nice! I\'m very pleased about that %Emote%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Well at least I tried %lol%");
        pula6();
        return;
    }
    increaseAnger(-3)
    pula6();
	return;
}
function pula6()
{
    Stroking();
    return;
    next2();
}
function next2()
{
    let answer0 = getInput("Do you don\'t think you\'ve been %Submissive% enough to earn your release from this agony??");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Ooh that\'s really nice! I\'m very pleased about that %Emote%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Well at least I tried %lol%");
        pula7();
        return;
    }
    increaseAnger(-3)
    pula7();
	return;
}
function pula7()
{
    Stroking();
    return;
    Link4();
}
function Link4()
{
    if(getVar("AV_DommeMistress", false))
    {
        pula10();
        return;
    }
    CMessage("%PetName%");
    CMessage("Do you want something else?");
    CMessage("Something harsh, cruel.");
    CMessage("Someone who will put you in your fucking place. A Mistress perhaps.");
    CMessage("Is that what you want? To be told how worthless and pathetic you are?");
    cbt();
    CMessage(random("Made to get on your knees to serve and obey", "To bring you lips to your Goddess\' feet", "Your tongue worshipping my %Pussy% as often as I wish"));
    showTaggedImage(4, ["LICKING"]);
    //--Command:TagCunnilingus
    CMessage(random("Made to pleasure me with no chance of getting any satisfaction yourself", "You want that little %Cock% to be locked away", "withered and useless and you want Mistress to be the one to hold the key"));
    showTaggedImage(4, ["LICKING"]);
    //--Command:TagCunnilingus
    Stroking();
    return;
    pula10();
}
function pula10()
{
    CMessage("That %Cock% is no longer yours, it\'s my property");
    CMessage("and I\'m the only one that decides when my property needs to be touched...");
    CMessage("Look at you, you\'re stiffening up at my mere mention of it...");
    let answer0 = getInput("Cup those %Balls% with your left hand... Are they full for your Mistress?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        blue_BallsResponse();
    }
    CMessage("Start playing with them, roll them in your palm.");
    if (randomInteger(1, 100) <= 50)
    {
        AVRND01();
        return;
    }
    CMessage(random("How\'s my cock doing? Is it as hard as it gets?", "How bad do you want to touch it right now?"));
    AVRND01();
	return;
}
function AVRND01()
{
    CMessage("Take your right hand and wrap it around the shaft, no jerking!");
    CMessage("Just keep it still around that meat and keep playing with those balls.");
    CMessage("You\'re really desperate to stroke it now, aren\'t you?");
    Stroking();
    return;
}