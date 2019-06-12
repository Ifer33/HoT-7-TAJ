DMessage("LinksRandom25: start");
main();
DMessage("LinksRandom25: end");
function main()
{
    if(getVar("AV_Link25_NotFirstTime", false))
    {
        AV_Link25_NotFirstTime();
        return;
    }
    setVar("AV_Link25", 0);
    setVar("AV_Link25_NotFirstTime", true);
    AV_Link25_NotFirstTime();
}
function AV_Link25_NotFirstTime()
{
    if (getVar("AV_Link25", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link25", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link25", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link25", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link25", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link25", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link25", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link25", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link25", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link25", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link25", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link25", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link25", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link25", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link25", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link25", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link25", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link25", getVar("AV_Link25", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link25", getVar("AV_Link25", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link25", getVar("AV_Link25", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link25", getVar("AV_Link25", 0) + 1000);
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
    setVar("AV_Link25", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    //setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    CMessage("I think you are doing very well %GeneralTime%.");
    CMessage("You see, I\'ve always felt that the best way to truly get to know a man");
    CMessage("is to expose the most vulnerable and sensitive part of his body and see how he reacts");
    CMessage("You learn so much about a man when you do that.");
    //setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("It\'s also important to me that you learn who is in control.");
    CMessage("I am in control, %Name%.");
    CMessage("In order for this relationship to work, you have to follow my commands.");
    CMessage("You have to be submissive to me.");
    let answer0 = getInput("Do you still think you can do that?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("No reason to be scared, %Name%. I\'m just going to make you feel soooo good.");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You\'re not sure? Well, I think we will find out.");
    }
    //setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    CMessage("Wouldn\'t it be wonderful if this feeling could last forever?");
    let answer0 = getInput("You would do anything for that, wouldn\'t you?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        iWillDoWhateverResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("Yes, you would. It\'s sooooo hypnotizing, isn\'t it?");
    CMessage("I can feel you starting to submit.");
    //setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    CMessage("I can feel those little balls of yours try to pull up into your body and hide from me.");
    CMessage("There\'s no hiding from me, %PetName%.");
    CMessage("It\'s all mine, %Name%. It\'s alllll mine.");
    //setStrokingNoTaunt();
    return;
}