DMessage("LinksRandom28: start");
main();
DMessage("LinksRandom28: end");
function main()
{
    if(getVar("AV_Link28_NotFirstTime", false))
    {
        AV_Link28_NotFirstTime();
        return;
    }
    setVar("AV_Link28", 0);
    setVar("AV_Link28_NotFirstTime", true);
    AV_Link28_NotFirstTime();
}
function AV_Link28_NotFirstTime()
{
    if (getVar("AV_Link28", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link28", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link28", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link28", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link28", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link28", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link28", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link28", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link28", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link28", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link28", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link28", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link28", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link28", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link28", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link28", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link28", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link28", getVar("AV_Link28", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link28", getVar("AV_Link28", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link28", getVar("AV_Link28", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link28", getVar("AV_Link28", 0) + 1000);
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
    setVar("AV_Link28", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    CMessage("We share the same fantasies, %PetName%");
    CMessage("if for different reasons.");
    CMessage("I know they\'re not always exactly how you\'d imagine them");
    CMessage("but as long as you recognize that mine come first we\'ll have some very pleasurable moments.");
    setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("I wonder...");
    setTempVar("AV_Cha01", true);
    CMessage("I wonder if I should just lock your cock");
    CMessage("Maybe for a few minutes...");
    CMessage("days...... weeks...");
    CMessage("Just think about it.");
    let answer0 = getInput("How out of your mind with lust would you get, locked up for so long?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        putMeInChastityResponse();
    }
    CMessage("And with only a single orgasm to relieve you, it\'d be just as bad when I locked you up again...");
    let answer1 = getInput("and that\'s what we both want, you as hard and horny and pliable as possible.",5);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        putMeInChastityResponse();
    }
    CMessage("It\'s such an enticing thought... and I mean");
    CMessage("it\'s not like you have a say in the matter.");
    delVar("AV_Cha01");
    CMessage("Why should I care how much you have to cum right now?");
    CMessage("Your relief is a minor inconvenience on the road to a truly excellent relationship.");
    CMessage("It only matters to me how well you obey me.");
    setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    CMessage("What a wonderful bargain we\'ve made here, %PetName%.");
    setTempVar("AV_Dri01", true);
    CMessage("You at my beck and call, ready to obey whatever frustrating, humiliating fantasy I can dream of");
    CMessage("just to be a part of it.");
    CMessage("It makes me feel so wonderful knowing that I pleasure myself at your expense");
    CMessage("that every earth-shattering orgasm I have is one I have without you.");
    CMessage("I get off on the fact that you can\'t.");
    CMessage("And I know right now all the things you would do to me if you could");
    CMessage("and I writhe with delight knowing that you wouldn\'t,");
    CMessage("absolutely wouldn\'t, because you obey me.");
    CMessage("You obey me.");
    delVar("AV_Dri01");
    let answer0 = getInput("Oh, how you love obeying me.",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        wantToServeResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        pvRs_WantToServeNoResponse();
    }
    CMessage("And oh, how I love that you love it.");
    setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    CMessage("You know that all the pretty thoughts running through my head");
    setTempVar("AVp002", true);
    CMessage("are those of teasing and tormenting your little toy.");
    CMessage("You know that anything I command of you, you\'ll obey");
    CMessage("because I love to command you");
    let answer0 = getInput("and you do so love to obey.",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        wantToServeResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        pvRs_WantToServeNoResponse();
    }
    CMessage("You\'re living in a dreamworld, %PetName%.");
    CMessage("And all because you agreed to it.");
    delVar("AVp002");
    setStrokingNoTaunt();
    return;
}