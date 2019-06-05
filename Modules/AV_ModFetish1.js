DMessage("AV_ModFetish1: start");
main();
DMessage("AV_ModFetish1: end");
function main()
{
    if(getVar("AV_ModFetish1_NotFirstTime", false))
    {
        AV_ModFetish1_NotFirstTime();
        return;
    }
    setVar("AV_ModFetish1", 0);
    setVar("AV_ModFetish1_NotFirstTime", true);
    AV_ModFetish1_NotFirstTime();
}
function AV_ModFetish1_NotFirstTime()
{
    if (getVar("AV_ModFetish1", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModFetish1", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModFetish1", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModFetish1", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModFetish1", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModFetish1", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModFetish1", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModFetish1", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModFetish1", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModFetish1", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModFetish1", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModFetish1", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModFetish1", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModFetish1", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModFetish1", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModFetish1", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModFetish1", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModFetish1", getVar("AV_ModFetish1", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModFetish1", getVar("AV_ModFetish1", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModFetish1", getVar("AV_ModFetish1", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModFetish1", getVar("AV_ModFetish1", 0) + 1000);
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
    setVar("AV_ModFetish1", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage("That %Cock% is no longer yours, it\'s my property");
    CMessage("and I\'m the only one that decides when my property needs to be touched...");
    CMessage("Look at you, you\'re stiffening up at my mere mention of it...");
    let answer0 = getInput("Cup those %Balls% with your left hand... Are they full for Mistress?");
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
        return;
    }
    CMessage("Start playing with them, roll them in your palm.");
    CMessage(random("How\'s my cock doing? Is it as hard as it gets?", "How bad do you want to touch it right now?"));
    CMessage("Take your right hand and wrap it around the shaft, no jerking!");
    CMessage("Just keep it still around that meat and keep playing with those balls.");
    CMessage("You\'re really desperate to %Stroke% it now, aren\'t you?");
    CMessage("Alright, start moving that hand up and down... up and down...");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b055.mp3");
    CMessage("slowly... all the way to the tip... and down to the base.");
    CMessage("That\'s it, keep it slow and frustrating,");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b075.mp3");
    CMessage("you know how much I love to watch you squirm.");
    CMessage("Good boy, keep going like that and don't stop fondling the balls.", 0);
    CMessage("%stopstroking%", 0);
    CMessage("Now stroke it fast! Up-down, up-down, up-down.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b180.mp3");
    CMessage("Keep it up...");
    CMessage("%stopstroking%", 0);
    CMessage("You didn\'t think I\'d let you cum that easy, did you?");
    CMessage("Is it throbbing? It better be!...");
    CMessage("Start stroking again, slowly, up... down... up... down");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b075.mp3");
    CMessage("Now go as fast as you can, work that cock for me!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b210.mp3");
    CMessage("I\'m going to count down from 10 and you better be right on the edge of cumming by the time I reach 1");
    CMessage("10");
    CMessage("9");
    setRapidText(true);
    CMessage("8");
    CMessage("7");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b210.mp3");
    setRapidText(false);
    CMessage("6");
    CMessage("5");
    setRapidText(true);
    CMessage("4");
    CMessage("3");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b210.mp3");
    setRapidText(false);
    CMessage("2");
    CMessage("1");
    CMessage("Are you there slave? Are you on the brink? Hold it!");
    CMessage("That\'s right, hold it for Mistress!");
    CMessage("Almost there...");
    CMessage("%stopstroking%", 0);
    CMessage("Aww, look at it bobbing up and down...");
    CMessage("It really wanted to cum, didn\'t it?");
    CMessage("Well too bad, bad slaves don\'t get to cum, all they get is denial.");
    return;
    Modulo2();
}
function Modulo2()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    if(getVar("av_fetish_hothax", false))
    {
        av_fetish_hothax();
        return;
    }
    if(getVar("AV_TaskON", false))
    {
        AV_TaskON();
        return;
    }
    CMessage("%SubName%...");
    if (randomInteger(1, 100) <= 50)
    {
        Module_End();
        return;
    }
    CMessage("%Edge%");
	showTaggedImage(4, ["captions"]);
    startEdging();
    //showTaggedImage(4, ["captions"]);
	CMessage("%stopstroking%", 0);
    CMessage("%LetTheEdgeFade%");
    Module_End();
}
function Module_End()
{
    return;
    AV_TaskON();
}
function AV_TaskON()
{
    //run("Interrupt/AV_Tasks");
	run("Interrupt"+ java.io.File.separator +"AV_Tasks.js");
    return;
    av_fetish_hothax();
}
function av_fetish_hothax()
{
    CMessage("Get a candle. I want your nipples and areola completely covered in wax");
    CMessage("you know, what to do.");
    let answer0 = getInput("Let me know when you are done");
    while (!(answer0.isLike("ready") || answer0.isLike("done")))
    {
        answer0 = getInput("Ready?");
    }
    if (answer0.isLike("ready", "done"))
    {
        CMessage("Good...");
    }
    CMessage("%StartStrokingNS% to the beat %AudioStroke%");
    CMessage("Now, bend over, spread your asscheeks, and let a few drops of wax torture your asshole.");
    CMessage("You may stop, when you feal the wax covered it good.");
    let answer1 = getInput("Let me know when you are done");
    while (!(answer1.isLike("ready") || answer1.isLike("done")))
    {
        answer1 = getInput("Done?");
    }
    if (answer1.isLike("ready", "done"))
    {
        CMessage("Good...");
    }
    CMessage("Well, I guess we will have to do something more!");
    CMessage("Get the candle and drip the wax all over your balls");
    CMessage("and don't take it off until I say so!");
    let answer2 = getInput("Let me know when you are done");
    while (!(answer2.isLike("ready") || answer2.isLike("done")))
    {
        answer2 = getInput("Done?");
    }
    if (answer2.isLike("ready", "done"))
    {
        CMessage("Good...");
    }
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstroking%", 0);
    CMessage("%LetTheEdgeFade%");
    CMessage("Now, slap your balls hard, until every last bit of wax is removed!");
    CMessage("Look at those pretty bright red balls!");
    CMessage("%ThatsEnough% %Slave%");
    return;
    Modulo3();
}
function Modulo3()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage("Look who is here");
    addContact(3);
    SMessage("I like ordering you to jerk that little hard cock.", -1, 3);
    SMessage("%StartStroking%", -1, 3);
	setStrokingNoTaunt();
    SMessage("I want to show you a few Mistress friends of mine that are  really nice to their strokerboys.", -1, 3);
    SMessage("In the event that %DomName% decides to sell you at auction just hope it is one of these.", -1, 3);
    //SMessage("Now you will give me an %EdgeNoun%", -1, 3);
    startEdging("Now you will give me an %EdgeNoun%",-1,3);
	CMessage("%stopstroking%", 0);
    //run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "AV_StrokeNumberGliter2.js");
	customTask("AV_StrokeNumberGliter2",-1,3);
    SMessage("There is %_GlitterSpecial%. Pray that you can ever be her little boytoy.", -1, 3);
    SMessage("She actually likes to suck their little cocks off and let them cum inside her mouth.", -1, 3);
    SMessage("She has a cum fixation, she just cannot swallow enough of it.", -1, 3);
    //SMessage("%Edge%", -1, 3);
    startEdging("%Edge%",-1,3);
	CMessage("%stopstroking%", 0);
    SMessage("This one here is a real catch for a boytoy too.", -1, 3);
    SMessage("She has scheduled ejaculation times once per week.", -1, 3);
    SMessage("She fucks sucks and jerks her subs at random by rolling dice. Her name is %_GlitterSpecial%", -1, 3);
    //SMessage("%Edge%", -1, 3);
    startEdging("%Edge%",-1,3);
	CMessage("%stopstroking%", 0);
    SMessage("Now there are is Mistress %_GlitterSpecial%.", -1, 3);
    SMessage("She treats her subs almost like she is their girlfriend.", -1, 3);
    SMessage("She gives a tit job once per week if a sub hasn\'t misbehaved", -1, 3);
    //SMessage("%Edge%", -1, 3);
    startEdging("%Edge%",-1,3);
	CMessage("%stopstroking%", 0);
    removeContact(3);
    return;
    Modulo4();
}
function Modulo4()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    if(getVar("av_fetish_rough", false))
    {
        av_fetish_rough();
        return;
    }
    if(getVar("AV_TaskON", false))
    {
        AV_TaskON2();
        return;
    }
    CMessage("%SubName%...");
    if (randomInteger(1, 100) <= 50)
    {
        Module_End2();
        return;
    }
    CMessage("%Edge%");
	showTaggedImage(4, ["captions"]);
    startEdging();
	CMessage("%stopstroking%", 0);
    //showTaggedImage(4, ["captions"]);
    CMessage("%LetTheEdgeFade%");
    Module_End2();
}
function Module_End2()
{
    return;
    AV_TaskON2();
}
function AV_TaskON2()
{
    run("Interrupt"+ java.io.File.separator +"AV_Tasks.js");
    av_fetish_rough();
}
function av_fetish_rough()
{
    CMessage("You want an attractive woman to watch you masturbate?");
    let answer0 = getInput("I was the one you were fantasizing about right?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Hmm");
        bom1();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("No? This will change");
        mau1();
        return;
    }
    bom1();
}
function bom1()
{
    increaseAnger(-3)
    fim1();
    return;
    mau1();
}
function mau1()
{
    increaseAnger(3)
    fim1();
}
function fim1()
{
    CMessage("So, now you get to have the object of your fantasy right here");
    CMessage("watching your hand moving up and down your cock.");
    CMessage("Isn\'t that better than fantasizing?");
    CMessage("Now do it! %StartStrokingNS% to the beat %AudioStroke%");
    let answer0 = getInput("Are you still fantasizing about me?");
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
        return;
    }
    CMessage("Yeah? I guess you can imagine that it\'s my hand on your cock if you want.");
    CMessage("I bet you\'d like that wouldn\'t you?");
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstroking%", 0);
    CMessage("%LetTheEdgeFade%");
    CMessage("Teasing the head of your shaft with my fingers");
    CMessage("staring into your eyes submissively?");
    CMessage("As if!");
    return;
}