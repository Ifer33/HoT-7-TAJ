DMessage("LinksRandom23: start");
main();
DMessage("LinksRandom23: end");
function main()
{
    if(getVar("AV_Link23_NotFirstTime", false))
    {
        AV_Link23_NotFirstTime();
        return;
    }
    setVar("AV_Link23", 0);
    setVar("AV_Link23_NotFirstTime", true);
    AV_Link23_NotFirstTime();
}
function AV_Link23_NotFirstTime()
{
    if (getVar("AV_Link23", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link23", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link23", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link23", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link23", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link23", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link23", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link23", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link23", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link23", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link23", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link23", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link23", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link23", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link23", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link23", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link23", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link23", getVar("AV_Link23", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link23", getVar("AV_Link23", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link23", getVar("AV_Link23", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link23", getVar("AV_Link23", 0) + 1000);
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
    setVar("AV_Link23", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    Stroking();
    return;
    Link1();
}
function Link1()
{
    CMessage("Don\'t act all pissy, %SubName%!");
    let answer0 = getInput("You get a thrill knowing that I\'m going to show all my girlfriends what a little submissive you are, don\'t you?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    let answer1 = getInput("I bet you\'d like for me and my friends to be told what to do, wouldn\'t you?",5);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("It\'s okay, %Name%");
    CMessage("You need to be comfortable with yourself.");
    CMessage("You\'re safe with me");
    CMessage("but that doesn\'t mean I\'m not going to force you to admit that you enjoy being a submissive little slut");
    CMessage("and it doesn\'t mean I\'m not going to push your boundaries.");
    Stroking();
    return;
    Link2();
}
function Link2()
{
    CMessage("Oh, believe me.");
    setTempVar("AVp003", true);
    CMessage("I *AM* going to take control of you.");
    let answer0 = getInput("I am going to take absolute control of you every chance I get.",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_002Response();
    }
    CMessage("You will be mine to do with as I please.");
    CMessage("Now, get back to work.");
    CMessage("I want to see some precum come out of you but don\'t you dare come until I\'ve given you permission!");
    delVar("AVp003");
    Stroking();
    return;
    Link3();
}
function Link3()
{
    CMessage("You will learn to respect women, learn to treat us as more than sex objects that roam the earth solely for your viewing pleasure!");
    CMessage("And of course you will suffer a little humiliation in the process!");
    if(getVar("AV_MEM_Humil", false))
    {
        answer0 = getInput("And you really like that, right?",5);
        if (answer0.isLike("yes", "yea", "yep"))
        {
            aV_YesGoodResponse();
        }
        else if (answer0.isLike("no", "nope", "nah", "not"))
        {
            aV_NoBadResponse();
        }
    }
    CMessage("First and foremost: you must treat all women respectfully.");
    CMessage("This shouldn\'t really have to be said, but I wanna be sure you don\'t forget!");
    CMessage("When talking to women, no matter their age, you will address them as \"ma\'am\". No exceptions.");
    CMessage("Second, you can\'t lie to any woman, and you must answer every question that you are asked.");
    CMessage("Who knows, where this might lead. %Lol%");
    CMessage("Simple right?");
    CMessage("Its not rocket science honey! Even you can remember this right?!");
    Stroking();
    return;
    Link4();
}
function Link4()
{
    CMessage("I want you to be hard the entire time");
    CMessage("to feel the sweet torment of being on edge");
    CMessage("wanting me to allow you to cum.");
    CMessage("But that it\'s not what I had planned for now.");
    Stroking();
    return;
}