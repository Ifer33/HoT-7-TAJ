DMessage("LinkMissBlue3: start");
main();
DMessage("LinkMissBlue3: end");
function main()
{
    if(getVar("AV_LinkMissBlue3_NotFirstTime", false))
    {
        AV_LinkMissBlue3_NotFirstTime();
        return;
    }
    setVar("AV_LinkMissBlue3", 0);
    setVar("AV_LinkMissBlue3_NotFirstTime", true);
    AV_LinkMissBlue3_NotFirstTime();
}
function AV_LinkMissBlue3_NotFirstTime()
{
    if (getVar("AV_LinkMissBlue3", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_LinkMissBlue3", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_LinkMissBlue3", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_LinkMissBlue3", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_LinkMissBlue3", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_LinkMissBlue3", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_LinkMissBlue3", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_LinkMissBlue3", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_LinkMissBlue3", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_LinkMissBlue3", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_LinkMissBlue3", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_LinkMissBlue3", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_LinkMissBlue3", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_LinkMissBlue3", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_LinkMissBlue3", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_LinkMissBlue3", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_LinkMissBlue3", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_LinkMissBlue3", getVar("AV_LinkMissBlue3", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_LinkMissBlue3", getVar("AV_LinkMissBlue3", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_LinkMissBlue3", getVar("AV_LinkMissBlue3", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_LinkMissBlue3", getVar("AV_LinkMissBlue3", 0) + 1000);
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
    setVar("AV_LinkMissBlue3", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    Stroking();
    return;
    Link1();
}
function Link1()
{
    CMessage("At least all this stroking and edging is good for your sexual endurance");
    CMessage("I\'d hope so anyway %Smile%");
    CMessage("So the next time you actually have sex");
    CMessage("Whenever that might be %EmoteWink%");
    CMessage("You have the stamina to please your partner");
    CMessage("Just remember that you have me to thank for that, in part at least");
    CMessage("You\'re welcome, %PetName%");
    Stroking();
    return;
    Link2();
}
function Link2()
{
    CMessage("I wonder what goes on in your mind sometimes, %SubName%");
    CMessage("I know some of it");
    CMessage("I know the pure arousal that percolates up from your %Balls%");
    CMessage("Creeping upward through your veins and infiltrating your brain");
    CMessage("I know the feelings of obedience that drive you to obey my commands");
    CMessage("But I wonder how far you\'re really willing to go...");
    CMessage("What dark corners of that mind of yours we haven\'t explored yet");
    CMessage("The corners that you barely want to admit to yourself exist");
    CMessage("Maybe we\'ll explore them someday");
    CMessage("But for now...");
    Stroking();
    return;
    Link3();
}
function Link3()
{
    CMessage("Hey %PetName%...");
    CMessage("Imagine if I could actually take you in as a servant");
    CMessage("You\'d live with me, nobody else would need to see you");
    CMessage("I could use you as I saw fit...");
    CMessage("You\'d have to do chores, obviously");
    CMessage("I\'d make you mop the floor naked");
    CMessage("I could whip you as often as I wanted");
    CMessage("And if I needed an orgasm...");
    CMessage("Well that\'s what servants mouths are for, aren\'t they %Laugh%");
    CMessage("It would be like in the ancient world, when they actually had slavery");
    CMessage("Those were truly the days, %SubName% %Laugh%");
    CMessage("Unfortunately, we live in the modern era %EmoteSad%");
    CMessage("Which has it\'s own advantages of course");
    CMessage("Such as having a %PetName% glued to a screen, obeying every command %EmoteHappy%");
    CMessage("For example...");
    Stroking();
    return;
    Link4();
}
function Link4()
{
    if(getVar("pthevLink11B", false))
    {
        pthevLink11B();
        return;
    }
    CMessage("Hey, %SubName%");
    CMessage("I heard this story the other day about a friend of a friend");
    CMessage("She found out her husband had been cheating on her");
    if(getVar("pthevLink11A", false))
    {
        pthevLink11A();
        return;
    }
    CMessage("There was a big scene and he left her for his girlfriend");
    but_apparently();
}
function but_apparently()
{
    CMessage("But apparently he'd forgotten that <i>she</i> had made <i>him</i> sign a pre-nup");
    CMessage("Turns out she gets pretty much everything and he gets nothing");
    CMessage("And then the guy\'s girlfriend leaves him because she thought he was rich %Laugh%");
    CMessage("Now all he has is a low paying job and a small apartment");
    CMessage("And she\'s still living in her big-ass house, very much enjoying her new-found freedom");
    let answer0 = getInput("Good story, right?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Any story where the women gets out on top is a good story %Laugh%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Sorry %SubName%, I just think that\'s a great story %Laugh%");
    }
    CMessage("Anyhow...");
    setVar("pthevLink11A", true);
    Stroking();
    return;
    pthevLink11A();
}
function pthevLink11A()
{
    let answer0 = getInput("Wait, haven\'t I already told you this story before?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Sorry %SubName% %Laugh%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh, okay, so there was this big scene and he left her for his girlfriend");
        but_apparently();
        return;
    }
    CMessage("There\'s a twist to the story though");
    CMessage("She\'s now dating her husband\'s ex-girlfriend!");
    CMessage("Oh, the irony %Laugh%");
    setVar("pthevLink11B", true);
    if(getVar("pthevMarried", false))
    {
        CMessage("What if");
        CMessage(getVar("pthevNamePartner","no partner"));
        CMessage("and I got together %Grin%");
    }
    if(getVar("pthevGirlfriend", false))
    {
        CMessage("What if");
        //--Command:ShowVar(pthevNamePartner)
		CMessage(getVar("pthevNamePartner","no partner"));
        CMessage("and I got together %Grin%");
    }
    if(getVar("pthevExGF", false))
    {
        CMessage("What if");
        CMessage(getVar("pthevNamePartner","no partner"));
        CMessage("and I got together %Grin%");
    }
    if(getVar("pthevVirgin", false))
    {
        CMessage("No chance of something like that happening to you I suppose...");
    }
    Stroking();
    return;
    pthevLink11B();
}
function pthevLink11B()
{
    Stroking();
    return;
}