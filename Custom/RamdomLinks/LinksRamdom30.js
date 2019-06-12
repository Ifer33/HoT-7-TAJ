DMessage("LinksRandom30: start");
main();
DMessage("LinksRandom30: end");
function main()
{
    if(getVar("AV_Link30_NotFirstTime", false))
    {
        AV_Link30_NotFirstTime();
        return;
    }
    setVar("AV_Link30", 0);
    setVar("AV_Link30_NotFirstTime", true);
    AV_Link30_NotFirstTime();
}
function AV_Link30_NotFirstTime()
{
    if (getVar("AV_Link30", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link30", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link30", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link30", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link30", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link30", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link30", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link30", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link30", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link30", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link30", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link30", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link30", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link30", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link30", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link30", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link30", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link30", getVar("AV_Link30", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link30", getVar("AV_Link30", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link30", getVar("AV_Link30", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link30", getVar("AV_Link30", 0) + 1000);
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
    setVar("AV_Link30", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    //setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    CMessage("I thought it would be fun to domme a man because men are tough");
    CMessage("they\'re big, they pick their woman up and they fuck them like...well men.");
    CMessage("That\'s why I thought it would be nice to have one around that I owned");
    CMessage("one I could have fuck my brains out whenever I wanted");
    CMessage("but as obedient as you are, and you are very obedient, aren\'t you?");
    if(getVar("av_fetish_rough", false) || getVar("AV_Beta", false))
    {
        CMessage("You can\'t deny you\'re really not much of a man.");
    }
    CMessage("Aww, don\'t pout. That\'s exactly the kind of thing I\'m talking about.");
    //setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    let answer0 = getInput("Are you feeling horny right now?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        gNMHornyResponse();
    }
    CMessage("Oh my little %PetName% you\'re adorable you know that?");
    CMessage("You really are.");
    CMessage("You\'re a good slave, always so quick to do as your told.");
    //setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    CMessage("Do you wanna cum?");
    CMessage("I\'ve never seen you so desperate before, I mean I\'ve only been teasing for a few minutes");
    CMessage("I\'ve only edged you what?... %SessionEdges% times... I\'m just not sure you\'ve earned it.");
    //setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    CMessage("Now, there\'s what I wanted to see.");
    let answer0 = getInput("You\'re being treated like a naughty boy and you like it.", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo15();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("No problem...");
    }
    AV_Timeo15();
	return;
}
function AV_Timeo15()
{
    CMessage("I am well prepared to administer plenty of punishments to you, %PetName%");
    CMessage("but trust me when I say that you\'d better not deserve it when it comes.");
    CMessage("Of course, no matter what the circumstances, you\'ll always deserve it.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your %Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(15);
    }
    CMessage("Remember that.");
    CMessage("Remember that you deserve it.");
    //setStrokingNoTaunt();
    return;
}