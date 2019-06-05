DMessage("AV_ModGeneral13: start");
main();
DMessage("AV_ModGeneral13: end");
function main()
{
    //--UNINTERPRETED LINE:@Variable[%DateDifference%(AV_SessionTime,minutes)]<[15] %Stop% @StopStroking @Goto(IniModule)
    if (isStroking())
    {
        Sub_Stroking();
        return;
    }
    else
    {
        Sub_Not_Stroking();
        return;
    }
    Sub_Stroking();
}
function Sub_Stroking()
{
    if (randomInteger(1, 100) <= 50)
    {
        DdecidEdge();
        return;
    }
    CMessage("%stopstroking%", 0);
    stopStroking();
    IniModule();
    return;
    DdecidEdge();
}
function DdecidEdge()
{
    edge();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    IniModule();
}
function IniModule()
{
    if(getVar("AV_ModGeneral13_NotFirstTime", false))
    {
        AV_ModGeneral13_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral13", 0);
    setVar("AV_ModGeneral13_NotFirstTime", true);
    AV_ModGeneral13_NotFirstTime();
}
function AV_ModGeneral13_NotFirstTime()
{
    if (getVar("AV_ModGeneral13", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral13", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral13", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral13", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral13", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral13", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral13", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral13", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral13", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral13", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral13", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral13", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral13", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral13", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral13", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral13", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral13", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral13", getVar("AV_ModGeneral13", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral13", getVar("AV_ModGeneral13", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral13", getVar("AV_ModGeneral13", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral13", getVar("AV_ModGeneral13", 0) + 1000);
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
    setVar("AV_ModGeneral13", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    CMessage("Just sit back and relax");
    CMessage("spread your legs nice and wide while cupping your balls.");
    CMessage("Let have a look at that cock of yours.");
    CMessage("No touching it just yet.");
    CMessage("That looks about right, go ahead and touch just the tip with a finger.");
    CMessage("My you are excited!");
    CMessage("Ok just let go and relax a moment.");
    CMessage("Now just massage your balls lightly as you touch just the tip with a finger as I explain.");
    CMessage("This should not get you overly excited, just enjoyable.");
    CMessage("Ok just let go and relax a moment.");
    CMessage("In a moment I am going to have you stroke your cock but I want you to grab it backwards.");
    CMessage("I think you can do this for me, yes?");
    CMessage("Now you may stroke just like I said.");
	setStrokingNoTaunt();
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Just like that, stroking your cock as you gently rub your balls.");
    CMessage("Focus your mind on that sweet spot!");
    CMessage("Keep focusing your mind on that sweet spot as you stroke.");
    CMessage("Lets switch it up now.");
    CMessage("Let go of your balls and start touching the tips of your nipples.");
    CMessage("Keep touching that nipple as you stroke your cock.");
    let answer0 = getInput("Is playing with your nipples sending tingles to that sweet spot?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo11();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
        increaseAnger(-3)
    }
    else if (answer0.isLike("no"))
    {
        CMessage("No?");
    }
    AV_Timeo11();
}
function AV_Timeo11()
{
    CMessage("Now grab your cock at the base with your full fist");
    CMessage("and stroke all the way up and stretch the skin as high as it will go and hold it there a moment.");
    CMessage("Is your cock throbbing now?");
    CMessage("And now give your cock one good full stroke all the way down and keep the skin stretched nice and tight.");
    CMessage("Hold the skin stretched all the way down.");
    CMessage("Keep holing your skin all the way down and pinch your favorite nipple!");
    CMessage("Make your cock twitch in need by playing with that nipple good!");
    CMessage("Hands to your side.");
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    CMessage("%stopstroking%", 0);
	stopStroking();
    return;
    Modulo2();
}
function Modulo2()
{
    if(!getVar("AV_LikeAnal", false))
    {
        ANALALTERNATIVE();
        return;
    }
    CMessage("%SubName%, I am here to help you explore your darkest pleasures.");
    CMessage("There is a catch to such pleasure as you must not have an orgasm and try to avoid the edge.");
    let answer0 = getInput("You will need to have some more lube handy. Let me know when you are ready to begin.");
    while (!(answer0.isLike("yes") || answer0.isLike("ready") || answer0.isLike("done")))
    {
        answer0 = getInput("Are you ready %SubName%?");
    }
    if (answer0.isLike("yes", "ready", "done"))
    {
        CMessage("%Good%");
    }
    CMessage("Now lets start by stroking your cock nice and slow.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Thats it, good!");
    CMessage("Bring your hand slowly up and down fousing on the pleasure of your %Cock%.");
    CMessage("Just nice and slow, up and down your cock.");
    CMessage("I hope this will not be too difficult but try not to edge.");
    CMessage("keep it long and hard.");
    CMessage("As you slowly stroke your cock I want you to focus your mind on your asshole.");
    CMessage("Oh yes we will be going there soon.");
    CMessage("Just keep stroking your cock as you think about your asshole.");
    CMessage("Now we are not touching it yet but we will be.");
    CMessage("Is the thought of playing with your asshole making your cock twitch?");
    CMessage("Yes keep stroking nice and slow.");
    CMessage("Now let go of your cock and rest a moment.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    CMessage("Put your legs on the table");
    CMessage("open it!!");
    sleep(15);
    CMessage("Remember the lube?");
    CMessage("I want you to spread lube all around your balls and asshole");
    sleep(17);
    CMessage("Thats it!");
    CMessage("Keep spreading that lube around your asshole, make it good and slippery.");
    CMessage("And let your finger explore all around your asshole.");
    CMessage("Oh you do not have to push into your ass, not if you do not enjoy that.");
    CMessage("You can if you like to but lets stick to what you can enjoy.");
    sleep(15);
    CMessage("I know that makes your cock want more, but lets focus on your asshole for now.");
    sleep(15);
    CMessage("Keep playing with your asshole and use your other hand to slowly stroke your cock again.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Yes pet your asshole and slowly stroke your cock, make it want.");
    CMessage("Yes! Now just keep stroking your cock making it want more.");
    sleep(15);
    CMessage("Now slow down");
    CMessage("slower and slower.");
    CMessage("Is it tender now?");
    CMessage("%Stop%");
    CMessage("Go clean yourself");
    sleep(30);
    return;
    ANALALTERNATIVE();
}
function ANALALTERNATIVE()
{
    CMessage("There you are");
    CMessage("I want you to start stroking your dick for me how you like it best.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Dont stroke your dick too fast");
    CMessage("nice and slow.");
    CMessage("Just like that, take the time to enjoy it.");
    CMessage("We got all the time in the world so there is not need to rush.");
    CMessage("Lets give it a few ultra slow strokes all the way up and down.");
    CMessage("And back to just how you like it the best.");
    sleep(15);
    CMessage("Oh yes! And more stroking all the way up and down firm and slow.");
    CMessage("Now back to ultra slow all the way up and down.");
    sleep(15);
    CMessage("That is it, not too fast now.");
    CMessage("Rub that dick really good now!");
    CMessage("And stroking all the way up and down.");
    CMessage("A tight firm grip stroking slowly all the way up and down.");
    sleep(15);
    CMessage("Now twist back and forth instead of up and down just under the head of your dick.");
    CMessage("A few last strokes, slower and lighter, cool down a bit then we can continue in a moment.");
    CMessage("%stopstroking%", 0);
    return;
    Modulo3();
}
function Modulo3()
{
    CMessage("You are here to listen to what I say");
    CMessage("I will tell you what to do and you will obey");
    CMessage("I love to see you getting aroused");
    CMessage(random("I love it when you do as I say", "I love watching you Obey"));
    CMessage("%StartStroking%");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "NoAllowed()")
    CMessage("Keep going at the same speed");
    CMessage("No edging before I allow it of course");
    sleep(randomInt(10, 20));
    CMessage("Stroke faster love");
    sleep(randomInt(10, 20));
    CMessage("Don\'t edge");
    sleep(randomInt(10, 20));
    CMessage("%Stroke%, %PetName%.");
    CMessage("You like my commands don\'t you?");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("You like when I degrade you.");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("What a pervert you are...");
    }
    if(getVar("av_fetish_pegging", false) && getVar("AV_LikeAnal", false))
    {
        CMessage("%Stroking% and wanting me to fuck your ass with a strap-on");
    }
    CMessage("I love it.");
    let answer0 = getInput("Now what do you say?", 5);
    if (answer0.isTimeout())
    {
        AV_Jump233();
        return;
    }
    if (answer0.isLike("thanks", "you"))
    {
        CMessage("That\'s right, %PetName%");
        increaseAnger(-3)
    }
    else
    {
        CMessage("Nope");
    }
    AV_Jump233();
}
function AV_Jump233()
{
    CMessage("Mmmm... you are a kinky one.");
    CMessage("You are almost ready to cum?");
    setVar("edgingmode", "Normal");
    CMessage("I think it\'s time to do some edges");
    DoEdges(2, 4, 0);
    CMessage("Good boy");
    return;
    NoAllowed();
}
function NoAllowed()
{
    CMessage("%stopstroking%", 0);
    setVar("edgingmode", "Normal");
    CMessage("I told you to not edge %SubName%");
    CMessage("I think you need to be punished");
    switch(random("PuMS01", "PuMS02", "PuMS03", "PuMS04"))
    {
        case "PuMS01":
        PuMS01();
        return;
        break;
        case "PuMS02":
        PuMS02();
        return;
        break;
        case "PuMS03":
        PuMS03();
        return;
        break;
        case "PuMS04":
        PuMS04();
        return;
        break;
    }
    PuMS01();
}
function PuMS01()
{
    run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Punish1");
    return;
    PuMS02();
}
function PuMS02()
{
    run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Punish2");
    return;
    PuMS03();
}
function PuMS03()
{
    run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Punish3");
    return;
    PuMS04();
}
function PuMS04()
{
    run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_PunishRND");
    return;
    Modulo4();
}
function Modulo4()
{
    CMessage(random("%PetName%", "%SubName%"));
    CMessage("We\'re going to play Red Light Green Light!");
    setVar("AV_RGBRounds", 0);
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("%Stroke% as fast as you physically can when I say green!");
        setVar("AV_RGB", randomInt(10, 15));
    }
    if(!getVar("AV_DommeMistress", false))
    {
        CMessage("%Stroke% as fast as you physically can when I say green!");
        setVar("AV_RGB", randomInt(8, 10));
    }
    CMessage("HANDS OFF, when I say red");
    CMessage("Your goal is to not edge during these intense but short sequences!");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "YouFaill()")
    CMessage("Ready?");
    AV_RGBLoop();
}
function AV_RGBLoop()
{
    CMessage("%AV_GreenLight%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(randomInt(5, 8));
    CMessage("%RedLight%");
	stopAudio();
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
	sleep(randomInt(15, 20))
    setVar("AV_RGBRounds", getVar("AV_RGBRounds", 0) + 1);
    if (getVar("AV_RGB", 0) == getVar("AV_RGBRounds", 0))
    {
        AV_FimRGB();
        return;
    }
    AV_RGBLoop();
    return;
    AV_FimRGB();
}
function AV_FimRGB()
{
    CMessage("Good job %SubName%");
    setVar("edgingmode", "Normal");
    return;
    YouFaill();
}
function YouFaill()
{
    CMessage("%stopstroking%", 0);
    setVar("edgingmode", "Normal");
    CMessage("I told you to not edge %SubName%");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("I think you need to be punished");
        switch(random("PuMS01a", "PuMS02a", "PuMS03a", "PuMS04a"))
        {
            case "PuMS01a":
            PuMS01a();
            return;
            break;
            case "PuMS02a":
            PuMS02a();
            return;
            break;
            case "PuMS03a":
            PuMS03a();
            return;
            break;
            case "PuMS04a":
            PuMS04a();
            return;
            break;
        }
    }
    if(!getVar("av_fetish_pain", false))
    {
        CMessage("You disappoint me %SubName%");
    }
    return;
    PuMS01a();
}
function PuMS01a()
{
    run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Punish1");
    return;
    PuMS02a();
}
function PuMS02a()
{
    run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Punish2");
    return;
    PuMS03a();
}
function PuMS03a()
{
    run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Punish3");
    return;
    PuMS04a();
}
function PuMS04a()
{
    run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_PunishRND");
    return;
}