DMessage("LinksRandom 4: start");
main();
DMessage("LinksRandom 4: end");
function main()
{
    if(getVar("AV_Link4_NotFirstTime", false))
    {
        AV_Link4_NotFirstTime();
        return;
    }
    setVar("AV_Link4", 0);
    setVar("AV_Link4_NotFirstTime", true);
    AV_Link4_NotFirstTime();
}
function AV_Link4_NotFirstTime()
{
    if (getVar("AV_Link4", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link4", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link4", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link4", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link4", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link4", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link4", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link4", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link4", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link4", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link4", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link4", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link4", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link4", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link4", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link4", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link4", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link4", getVar("AV_Link4", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link4", getVar("AV_Link4", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link4", getVar("AV_Link4", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link4", getVar("AV_Link4", 0) + 1000);
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
    setVar("AV_Link4", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    //setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    if(getVar("AV_Know_03_NOTREADY", false))
    {
        AV_Know_03_NOTREADY();
        return;
    }
    if(getVar("AV_Know_03", false))
    {
        AV_Know_03();
        return;
    }
    CMessage("%TellMe%");
    CMessage("Who is your favourite Pornstar?");
    setVar("AV_Persona04", createInput().getAnswer());
    CMessage("I\'ll make sure to use that against you later %EmoteSquirm%");
    setVar("AV_Know_03", true);
    SMessage("Get 1 "+getVar("AV_Persona04")+" video and 10 pictures and put in the folder TeaseAI\\Images\\av_imagens\\04\\");
	setVar("AV_Know_03_NOTREADY",true);
    //setStrokingNoTaunt();
    return;
    AV_Know_03_NOTREADY();
}
function AV_Know_03_NOTREADY()
{
    AV_Know_03();
}
function AV_Know_03()
{
    if(getVar("av_basic_position", false))
    {
        av_basic_position();
        return;
    }
    CMessage("%secondtime%");
    //setStrokingNoTaunt();
    return;
    av_basic_position();
}
function av_basic_position()
{
    CMessage("You will now get into the Basic Position");
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02.jpg");
    lockImages();
    CMessage("and wait until you hear a stroking beat.");
    CMessage("Stroke to the beat and return when it stops.");
    unlockImages();
    //setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    if(getVar("av_quest_done", false))
    {
        av_quest_done();
        return;
    }
    CMessage("%secondtime%");
    //setStrokingNoTaunt();
    return;
    av_quest_done();
}
function av_quest_done()
{
    CMessage("I\'m about to make you start stroking again");
    CMessage("Right now %Lol%");
    //setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    CMessage("Today maybe I will teach you how to release all that saved-up cum from your %Balls% properly");
    CMessage("We will learn the Ruined Orgasm correctly.");
    CMessage("I will tease my toy into a state where the cum simply spills over and flows out smoothly.");
    CMessage("You will completely relax and let go completely.");
    if(getVar("AV_Know_22", false))
    {
        AV_Know_22();
        return;
    }
    let answer0 = getInput("Would you prefer to be milked or let your balls get blued?");
    setVar("AV_Know_22", true);
    while (!(answer0.isLike("milked") || answer0.isLike("milk") || answer0.isLike("balls") || answer0.isLike("blued") || answer0.isLike("denied")))
    {
        answer0 = getInput("milked or blued %PetName%?");
    }
    if (answer0.isLike("milked", "milk"))
    {
        CMessage("%EmoteLaugh%");
        setVar("AV_Persona32a", true);
    }
    else if (answer0.isLike("balls", "blued", "denied"))
    {
        CMessage("%EmoteLaugh%");
        setVar("AV_Persona32b", true);
    }
    //setStrokingNoTaunt();
    return;
    AV_Know_22();
}
function AV_Know_22()
{
    CMessage("I know, the \"Ruined Release\" is not easy");
    CMessage("so don\'t be disappointed if you can\'t achieve it today.");
    CMessage("We will keep practising.");
    //setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    CMessage("In just a matter of days you will be in a state of near constant arousal.");
    CMessage("The sexual tension will be so thick that you will do anything to please me.");
    //run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "AV_StrokeNumber.js");
	customTask("AV_StrokeNumber");
    CMessage("Every night I will make you lick me to orgasm after orgasm as your cock strains against its bondage");
    CMessage("and for the time being you will relish my position of authority over you");
    CMessage("and the excitement you feel from being so turned on but not allowed to climax.");
    //setStrokingNoTaunt();
    return;
}