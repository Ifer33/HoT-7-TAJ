DMessage("LinksRandom22: start");
main();
DMessage("LinksRandom22: end");
function main()
{
    if(getVar("AV_Link22_NotFirstTime", false))
    {
        AV_Link22_NotFirstTime();
        return;
    }
    setVar("AV_Link22", 0);
    setVar("AV_Link22_NotFirstTime", true);
    AV_Link22_NotFirstTime();
}
function AV_Link22_NotFirstTime()
{
    if (getVar("AV_Link22", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link22", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link22", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link22", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link22", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link22", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link22", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link22", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link22", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link22", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link22", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link22", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link22", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link22", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link22", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link22", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link22", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link22", getVar("AV_Link22", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link22", getVar("AV_Link22", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link22", getVar("AV_Link22", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link22", getVar("AV_Link22", 0) + 1000);
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
    setVar("AV_Link22", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    //setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    CMessage("I used you in so many exciting ways");
    CMessage("and did things to you you\'d never even thought of before I did them to you...");
    CMessage("and you loved every minute of it too.");
    CMessage("It really was a work of erotic art that we created together.");
    CMessage("Hmmm... I think you\'re ready for a little bit more of the wand now though.");
    let answer0 = getInput("Wouldn\'t you agree?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        iLoveBeingControlledResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    //setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("Your poor balls!");
    CMessage("Probably backed up with so much sperm.");
    CMessage("I bet your little tadpoles are sprouting legs at this point!");
    CMessage("So, it seems obvious that the aching feeling in your testicles is just a serve case of blue balls.");
    CMessage("%Lol%");
    CMessage("No shooting off just yet!");
    CMessage("Look at your cock, bobbing up and down.");
    CMessage("I even see some precum starting to dribble!");
    CMessage("But we need to take our time and really get you ready to explode");
    CMessage("that way your body will let as much of it out as possible.");
    //setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    let answer0 = getInput("Tell me, my sweet boy, how do you enjoy this soft torture?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        iLoveBeingControlledResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("Is it to your taste? Or is it not enough?");
    CMessage("I\'m sure, if we kept going long enough, you would eventually cum.");
    CMessage("But where is the fun in that?");
    CMessage("I want to satisfy myself just as much as I want to play with you.");
    CMessage("Awww, poor baby. Is it really that difficult to resist me?");
    //setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    CMessage("I keep getting distracted.");
    CMessage("I wanted to talk about training, and what you\'ll be doing for me, and all that.");
    let answer0 = getInput("There will be lots of worship, because I\'m a goddess, and your Mistress deserves the best, doesn\'t she?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("Don\'t worry about being inexperienced, I\'ll tell you exactly what to do, darling.");
    CMessage("If I tell you to give me a kiss, you give me a kiss.");
    CMessage("Make it the best, most passionate kiss you\'ve ever given.");
    CMessage("I might tell you to kiss my foot or my nipple.");
    let answer1 = getInput("Whatever it is, you\'ll do it without question, won\'t you dear?",5);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("Of course you will.");
    CMessage("It\'s what a good slave does, and I can already tell you\'re going to be the best");
    CMessage("Don\'t look so down! It\'ll be fun!");
    //setStrokingNoTaunt();
    return;
}