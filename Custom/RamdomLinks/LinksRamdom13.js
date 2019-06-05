DMessage("LinksRandom13: start");
main();
DMessage("LinksRandom13: end");
function main()
{
    if(getVar("AV_Link13_NotFirstTime", false))
    {
        AV_Link13_NotFirstTime();
        return;
    }
    setVar("AV_Link13", 0);
    setVar("AV_Link13_NotFirstTime", true);
    AV_Link13_NotFirstTime();
}
function AV_Link13_NotFirstTime()
{
    if (getVar("AV_Link13", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link13", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link13", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link13", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link13", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link13", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link13", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link13", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link13", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link13", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link13", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link13", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link13", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link13", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link13", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link13", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link13", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link13", getVar("AV_Link13", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link13", getVar("AV_Link13", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link13", getVar("AV_Link13", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link13", getVar("AV_Link13", 0) + 1000);
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
    setVar("AV_Link13", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    CMessage("Oh, I bet you must be feeling even more frustrated...");
    let answer0 = getInput("Mmm... Are you finding it a little tough to bear?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        ark_FrustratedResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("Or maybe your secretly loving this.");
    let answer1 = getInput("This is what you want really, isn\'t it?",5);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        iLoveTeaseAndDenialResponse();
    }
    let answer2 = getInput("You want me to tease you and tease you until you just cant take it any more, am I right?",5);
    if (answer2.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer2.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("To feel that excitement build up inside you until you feel like your going to burst. Hmm?");
    CMessage("I know that\'s what you want.");
    setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("So I just wanted to remind you");
    CMessage("that I know what you like");
    CMessage("And I CAN give you EXACTLY what you want");
    CMessage("But I can be mean too...");
    CMessage("and leave you here");
    CMessage("with a throbbing, rock-hard erection");
    CMessage("blue balls, buzzing and filled to the brim with sperm");
    CMessage("and NO ONE to help finish you off..");
    CMessage("Cause I can tease, too, dear.");
    CMessage("Just wanted to make sure we were clear on that, %PetName%");
    setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    CMessage("Well let me tell you a secret.");
    CMessage("I love doing this.");
    CMessage("I love the control that I can have over you.");
    CMessage("And I love knowing that you\'ll get me back for it later.");
    CMessage("And honestly?");
    CMessage("I just really, really love the face you make when I\'ve gotten you past the point of no return.");
    CMessage("When you\'re trying so desperately to hang on, knowing how futile is.");
    CMessage("Yeah, I love knowing you don\'t stand a chance against me.");
    CMessage("I love how fucking hot you think I am.");
    CMessage("And how amazing that makes me feel.");
    setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    CMessage("Now, hands behind your back.");
    CMessage("Do not touch yourself, just let that throbbing cock of yours bob in the air.");
    CMessage("Uh, no I don\'t care how big and hard it is.");
    CMessage("You are not allowed to touch it.");
    CMessage("you poor poooor thing..");
    let answer0 = getInput("the only thing you\'re able to think of right now?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        iCantHelpMyselfResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("Yeah it\'s got to be..");
    CMessage("well, how badly...how desperately you neeeed to %Stroke%?");
    CMessage("you have all of this hot sperm boiling up..");
    CMessage("about to force itself out the tip of your %Cock%");
    CMessage("and you need to let it out.");
    CMessage("The pressure baby, it\'s just tooo much");
    CMessage("It\'s impossible to think of anything else...");
    setStrokingNoTaunt();
    return;
}