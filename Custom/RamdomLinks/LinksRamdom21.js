DMessage("LinksRandom21: start");
main();
DMessage("LinksRandom21: end");
function main()
{
    if(getVar("AV_Link21_NotFirstTime", false))
    {
        AV_Link21_NotFirstTime();
        return;
    }
    setVar("AV_Link21", 0);
    setVar("AV_Link21_NotFirstTime", true);
    AV_Link21_NotFirstTime();
}
function AV_Link21_NotFirstTime()
{
    if (getVar("AV_Link21", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link21", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link21", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link21", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link21", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link21", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link21", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link21", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link21", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link21", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link21", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link21", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link21", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link21", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link21", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link21", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link21", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link21", getVar("AV_Link21", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link21", getVar("AV_Link21", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link21", getVar("AV_Link21", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link21", getVar("AV_Link21", 0) + 1000);
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
    setVar("AV_Link21", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    //setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    CMessage("I need you to recognize that this is just how things are going to be from now on.");
    CMessage("You\'re my slave, and that means you do what I say.");
    let answer0 = getInput("Isn\'t that right, honey?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        call_MeResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("You just stay where I put you and do exactly what I want you to do and we\'ll have a perfect life together!");
    CMessage("I\'m going to be spending plenty of time with you.");
    //setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("We should milk you.");
    let answer0 = getInput("This is what you want, what you crave.",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        iLikeRuiningMyOrgasmResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        iDontLikeRuiningMyOrgasmResponse();
    }
    let answer1 = getInput("Life-giving milk.",5);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        iLikeRuiningMyOrgasmResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        iDontLikeRuiningMyOrgasmResponse();
    }
    CMessage("I love the smell of your cock.");
    CMessage("Sweaty, carnal, yummy.");
    CMessage("I love how dirty you make me feel.");
    //setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    CMessage("%domFriend2Name% told me she is interested in finding out more about chastity and denial...");
    CMessage("and if it really works so well in controlling men eeh slaves.");
    let answer0 = getInput("I think we should provide a demonstration for her, you dont mind do you my little pet?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("I hope you dont feel ashamed to show your chastity cage to my friend...");
    CMessage("she knows how to keep a secret.");
    //setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    CMessage("you should purchase a tube of hair remover.");
    CMessage("And bathe and ensure your whole body is deeply cleaned.");
    CMessage("apply the hair removal cream to your genital and anal areas.");
    //setStrokingNoTaunt();
    return;
}