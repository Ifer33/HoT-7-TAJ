DMessage("LinksRandom29: start");
main();
DMessage("LinksRandom29: end");
function main()
{
    if(getVar("AV_Link29_NotFirstTime", false))
    {
        AV_Link29_NotFirstTime();
        return;
    }
    setVar("AV_Link29", 0);
    setVar("AV_Link29_NotFirstTime", true);
    AV_Link29_NotFirstTime();
}
function AV_Link29_NotFirstTime()
{
    if (getVar("AV_Link29", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link29", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link29", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link29", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link29", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link29", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link29", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link29", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link29", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link29", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link29", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link29", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link29", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link29", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link29", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link29", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link29", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link29", getVar("AV_Link29", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link29", getVar("AV_Link29", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link29", getVar("AV_Link29", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link29", getVar("AV_Link29", 0) + 1000);
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
    setVar("AV_Link29", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    CMessage("I think is that you should kneel down and adore me, just like always.");
    CMessage("Little teased cocks don\'t get to cum for me.");
    CMessage("They just get to watch and worship.");
    CMessage("I love to be worshiped.");
    CMessage("I\'m making your balls fill up...you\'ll feel it soon enough.");
    setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("Remember that everything you do brings me so much pleasure...");
    setTempVar("AVp006", true);
    CMessage("that denying you makes me so very, very happy...");
    CMessage("you give so much pleasure but you hardly have any of your own.");
    let answer0 = getInput("That\'s not your purpose.",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        thisIsMyPurposeInLifeResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        regretMeetingYouResponse();
    }
    CMessage("just like my little purple dildo, you\'re hard,");
    CMessage("ready");
    CMessage("wanting");
    delVar("AVp006");
    setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    CMessage("Now there\'s something for you to consider for a moment, %PetName%.");
    CMessage("What if your mistress got all cold and cruel?");
    CMessage("What if I decided you were nothing more than a toy");
    CMessage("to be put on a shelf and only used when I felt like it?");
    let answer0 = getInput("Would you like it?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Oh, really?");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("No problem, %SubName%");
        f37d9();
        return;
    }
    CMessage("My toys don\'t get to have own will, you know.");
    changeApathyLevel(2);
    CMessage("Of course, when I wanted to see you suffer");
    setTempVar("AVp005", true);
    CMessage("I\'d find a way.");
    let answer1 = getInput("And you\'d want to suffer for me, right?",5);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        i_Can_Take_MoreResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        dontHurtMeResponse();
    }
    CMessage("You will suffer for me not only out of desire but of necessity.");
    delVar("AVp005");
    CMessage("Oh yes, I can be a cruel mistress, you know.");
    let answer2 = getInput("The question is, do you want me to be?");
    while (!(answer2.isLike("yes") || answer2.isLike("no")))
    {
        answer2 = getInput("%YesorNo% %SubName%?");
    }
    if (answer2.isLike("yes"))
    {
        CMessage("I\'ll put that to the test");
        setVar("AV_DommeMistress", true);
    }
    else if (answer2.isLike("no"))
    {
        CMessage("No problem, %SubName%");
        f37d9();
        return;
    }
    CMessage("And more importantly, do I care what you want?");
    f37d9();
	return;
}
function f37d9()
{
    setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    let answer0 = getInput("So, you\'re still with me, are you?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    let answer1 = getInput("I think by the end of this session, you\'ll be begging me to ruin your orgasm.",5);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        iLikeRuiningMyOrgasmResponse();
    }
    CMessage("To deny you even more.");
    setTempVar("AVp004", true);
    CMessage("Because you\'re starting to understand how much more pleasurable it is for you to want than to have.");
    CMessage("You\'re starting to understand how this relationship works.");
    delVar("AVp004");
    setStrokingNoTaunt();
    return;
}