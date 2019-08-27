DMessage("Used: start");
main();
DMessage("Used: end");
function main()
{
    if(getVar("AV_Mem_Used_NotFirstTime", false))
    {
        AV_Mem_Used_NotFirstTime();
        return;
    }
    setVar("AV_Mem_Used", 0);
    setVar("AV_Mem_Used_NotFirstTime", true);
    AV_Mem_Used_NotFirstTime();
}
function AV_Mem_Used_NotFirstTime()
{
    if (getVar("AV_Mem_Used", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Mem_Used", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Mem_Used", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Mem_Used", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Mem_Used", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Mem_Used", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Mem_Used", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Mem_Used", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Mem_Used", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Mem_Used", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Mem_Used", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Mem_Used", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Mem_Used", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Mem_Used", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Mem_Used", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Mem_Used", 0) == 1101)
    {
        Part1_16();
        return;
    }
    Mod1();
}
function Mod1()
{
    setVar("AV_Mem_Used", getVar("AV_Mem_Used", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Mem_Used", getVar("AV_Mem_Used", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Mem_Used", getVar("AV_Mem_Used", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Mem_Used", getVar("AV_Mem_Used", 0) + 1000);
    Modulo4();
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
    setVar("AV_Mem_Used", 0);
    AV_Mem_Used_NotFirstTime();
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    CMessage("You try " + random("hard ", "desperately ") + "to get the attention of a " + random("girl ", "woman ") + "who would use you");
    if(getVar("pthevCompleteControlYES", false))
    {
        CMessage(random("Control your orgasm", "hold the key to a chastity device"));
    }
    if(getVar("av_fetish_pegging", false) || getVar("AV_LikeAnal", false))
    {
        CMessage("make you " + random("fuck ", "plug ") + "your ass before you were allowed to " + random("cum", "come"));
    }
    CMessage("But now you miss the kind of traditional sex.");
    CMessage(random("Forget it", "That was the past"));
    if(getVar("pthevCompleteControlYES", false))
    {
        CMessage("your cock is mine and it is never going in a pussy again.");
    }
    if(getVar("av_fetish_pegging", false) || getVar("AV_LikeAnal", false))
    {
        CMessage("Even if by some miracle you could get free, you need that plug in your ass to cum.");
    }
    if(getVar("AV_Beta", false))
    {
        CMessage("your beta training reconditioned how you respond.");
    }
    CMessage("Don\'t be sad, %Name%.");
    let answer0 = getInput("You\'re my nasty pervert now", 5);
    if (answer0.isTimeout())
    {
        rgth6f();
        return;
    }
    if (answer0.isLike("yes"))
    {
        CMessage("That\'s better, let me look at you..");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%Lol%, right...");
    }
    else
    {
        CMessage("That\'s better, let me look at you..");
    }
    rgth6f();
}
function rgth6f()
{
    CMessage("%KneelForMe%");
    setTempVar("AV_SubKnees", true);
    CMessage("That\'s right, ah..");
    CMessage("Now, let\'s have some fun!");
    CMessage("%StartStroking%");
    CMessage("Oh my %PetName%, look at you go!");
    CMessage("Hump that hand!");
    CMessage("It feels so good doesn\'t it " + random("%PetName%", "you nasty fuck"));
    CMessage(random("Yeah, you fucking love it!", "You\'re my slut, my human dildo!"));
    CMessage(random("I\'m going to run your life baby!", "It feels god", "huh?"));
    CMessage("You\'re getting close, I can tell!");
    CMessage("%stopstroking%", 0);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    CMessage("Oh, you look so disappointed!");
    CMessage(random("So precious!", "Aw", "baby"));
    CMessage("Oh, I know it\'s not fair but *I* run this show.");
    CMessage("Not you!");
    CMessage("Good boy, let all those pent up emotions out..");
    let answer0 = getInput("Do you want to be a good boy for me?");
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("I love how your cock throbs and your balls stand out like swollen grapes!");
    CMessage("I know you need someone like me to run your life.");
    CMessage("In your heart of hearts you know it too..");
    CMessage("And I know everything I need to do it oh so well..");
    CMessage("That\'s it %PetName%, give yourself over to me..");
    Continue_Used();
    return;
    Modulo2();
}
function Modulo2()
{
    CMessage("A true submissive does not have a sense of entitlement.");
    CMessage("he is humble and defers to his Superiors as " + random("to what he receives", "how he is treated"));
    CMessage("his Mistress is the one who decides and you trust Me to take care of your mental and physical state.");
    CMessage("%KneelForMe%");
    setTempVar("AV_SubKnees", true);
    if(getVar("AV_Beta", false))
    {
        CMessage("This position definitively establishes the beta\'s position.");
    }
    if(!getVar("AV_Beta", false))
    {
        CMessage("This position definitively establishes the submissive\'s position.");
    }
    Continue_Used();
    return;
    Modulo3();
}
function Modulo3()
{
    if(getVar("AV_Beta", false))
    {
        CMessage("beta males are pleasers.");
    }
    if(!getVar("AV_Beta", false))
    {
        CMessage("submissives are pleasers.");
    }
    CMessage("They desperately want to be of use and bring a smile to the face of their women.");
    Continue_Used();
    return;
    Modulo4();
}
function Modulo4()
{
    if(getVar("AV_Beta", false))
    {
        CMessage("A beta\'s focus is to receive.");
    }
    if(!getVar("AV_Beta", false))
    {
        CMessage("A submissive\'s focus is to receive.");
    }
    CMessage("To welcome. To open and take in whatever Mistress or her Alpha friends wish to use");
    if(getVar("AV_Beta", false))
    {
        CMessage("A beta wants a pussy to offer for use.");
    }
    if(!getVar("AV_Beta", false))
    {
        CMessage("A submissive wants a pussy to offer for use.");
    }
    Continue_Used();
    return;
    Continue_Used();
}
function Continue_Used()
{
    delVar("AV_MEM_Used");
    return;
}