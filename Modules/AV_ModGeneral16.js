DMessage("AV_ModGeneral16: start");
main();
DMessage("AV_ModGeneral16: end");
function main()
{
    //--UNINTERPRETED LINE:@Variable[%DateDifference%(AV_SessionTime,minutes)]<[15] %Stop% @StopStroking @Goto(IniModule)
    if (isStrokingAll())
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
        DecidEdge();
        return;
    }
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    IniModule();
    return;
    DecidEdge();
}
function DecidEdge()
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
    if(getVar("AV_ModGeneral16_NotFirstTime", false))
    {
        AV_ModGeneral16_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral16", 0);
    setVar("AV_ModGeneral16_NotFirstTime", true);
    AV_ModGeneral16_NotFirstTime();
}
function AV_ModGeneral16_NotFirstTime()
{
    if (getVar("AV_ModGeneral16", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral16", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral16", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral16", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral16", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral16", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral16", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral16", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral16", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral16", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral16", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral16", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral16", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral16", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral16", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral16", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral16", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral16", getVar("AV_ModGeneral16", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral16", getVar("AV_ModGeneral16", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral16", getVar("AV_ModGeneral16", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral16", getVar("AV_ModGeneral16", 0) + 1000);
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
    setVar("AV_ModGeneral16", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_StrokeForCrush.js");
    return;
    Modulo2();
}
function Modulo2()
{
    let answer0 = getInput("You want to keep pleasing me, don\'t you?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo57();
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
        AV_Timeo57();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
        increaseAnger(3)
    }
    let answer1 = getInput("Did I sense some hesitation in your answer?", 5);
    if (answer1.isTimeout())
    {
        AV_Timeo58();
        return;
    }
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesorNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("Not good");
        increaseAnger(3)
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Better.");
    }
    AV_Timeo58();
	return;
}
function AV_Timeo58()
{
    CMessage("Quit fucking hesitating or I swear to god, I\'ll tape that mouth shut.");
    CMessage("No, we can\'t have that. I\'ll instruct you to jerk off, then you can get back to that.");
    AV_Timeo56();
    return;
    AV_Timeo57();
}
function AV_Timeo57()
{
    CMessage("Good %PetName%");
    AV_Timeo56();
	return;
}
function AV_Timeo56()
{
    CMessage("Alright, %SubName%");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Slowly. My god, do you have any self control?");
    CMessage("You really should know better by now.");
    CMessage("Anyway, keep stroking.");
    CMessage("Alright, now keep it slow. Squeeze your balls a little, too.");
    CMessage("Firmer.");
    CMessage("That\'s better.");
    CMessage("You\'re such a wimp, scared to squeeze your balls like I would.");
    CMessage(random("Stroke some more", "Say thank you"));
    CMessage("Rub your cock a little faster, %PetName%.");
    let answer0 = getInput("Are you getting close, pet?", 7);
    if (answer0.isTimeout())
    {
        AV_Timeo70();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("I want you to get to the edge very soon");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Hurry up, pet. Stroke faster if you have to. I want to see you squirm.");
    }
    AV_Timeo70();
	return;
}
function AV_Timeo70()
{
    CMessage("Beg for me. Tell me how much you need to come.");
    edge();
    CMessage("Mmm... I can\'t get enough of that.");
    if(!getVar("av_fetish_rough", false))
    {
        CMessage("You have no idea how hard it was to resist my desire to just pin you to the wall and kiss you.");
        AV_Still();
        return;
    }
    CMessage("Let me ask you....");
    let answer0 = getInput("Do you ever fantasize about me giving you a blowjob");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Such a stupid %Slave%. That will never happen!");
        Punish();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("So, you are learning %PetName%");
    }
    CMessage("You\'re getting smart %PetName%");
    CMessage("...that pleases me %PetName%");
    AV_Still();
	return;
}
function AV_Still()
{
    let answer0 = getInput("But you do still think about a woman giving you a lovely, wet blow " + "...true?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("I knew you did. So let\'s fantasize together about your blowjob.");
        AV_YesBJ();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Really? You've stopped thinking about blow jobs. You are truely pathetic!");
    }
    CMessage("...I don\'t think I\'ve ever met a guy who doesn\'t think about blow jobs");
    CMessage("And you consider yourself a \'man\'?");
    CMessage("Well, let me remind you of how one feels.");
    AV_Painted();
    return;
    AV_YesBJ();
}
function AV_YesBJ()
{
    CMessage("Imagine she takes your %Balls% in one hand. Softly craddeling them.");
    showTaggedImage(4, ["HANDJOB"]);
    CMessage("Rolling them gently in her hand.");
    showTaggedImage(4, ["HANDJOB"]);
    CMessage("Her other hand wrapped around the base of your cock");
    showTaggedImage(4, ["HANDJOB"]);
    CMessage("She gently kisses the tip of your cock. She slids her tongue out between those delicious lips");
    showTaggedImage(4, ["blowjob"]);
    CMessage("And begins licking the head of your stiffy");
    showTaggedImage(4, ["blowjob"]);
    CMessage("First, just the tip of her tongue. Up and down your leaking little slit.");
    showTaggedImage(4, ["blowjob"]);
    CMessage("Then back and " + "...side to side.");
    showTaggedImage(4, ["blowjob"]);
    CMessage("Her tongue slides down the underside of your cock. Teasing your sweet, litte spot.");
    showTaggedImage(4, ["blowjob"]);
    CMessage(random("You shudder, and she looks right into your eyes", "and she softly wispers \'I want to taste you. I want to taste you so bad\'"));
    AV_Painted();
	return;
}
function AV_Painted()
{
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("She slips her softs lips tightly around the head of your " + "...just the head mind you %PetName%");
    CMessage("Letting it slide in and out of those pretty painted lips");
    CMessage("Her lips pulling on the head of your cock. You begin to feel the ache in your %Balls%.");
    showTaggedImage(4, ["blowjob"]);
    CMessage("Nothing compared to the ache that I create in your %Balls% though.");
    CMessage("...and I MEAN slowly, she starts to take you in deeper.");
    showTaggedImage(4, ["blowjob"]);
    CMessage("Your dick sliding out of her mouth. Wet, shiny with her spit.");
    showTaggedImage(4, ["blowjob"]);
    CMessage("She\'s taking half of your cock in now.");
    CMessage("Up and down, up and down");
    CMessage("While she stares into your eyes");
    CMessage("Her lips tight against your horny fles");
    CMessage("And she begins pressing her tongue harder agains the special spot of yours");
    CMessage("Looking at you, she whispers \'I want to make you edge.\'");
    CMessage("%Stroke% to the edge");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeForGoto1()")
    CMessage("And with that, she begins to suck you hard and deep.");
    CMessage("Her lips moving ALL the way down your shaft");
    CMessage("Pressing against your belly");
    CMessage("That\'s really not much of a challenge for her though, since your dick is so pathetic");
    CMessage("You can\'t even make her eyes tear up as she takes you in all the way");
    CMessage("Such a disappointment you are sexually. You really are only good for our amusement");
    CMessage("Don\'t you know that women want a cock big enough to make them gag.");
    CMessage("If it\'s not big enough to gag " + "...then how will it ever make their sweet, little pussies cum.");
    CMessage("But this won\'t take " + "...it\'s not like you\'re a stud or something.");
    CMessage("Her head bouncing up and down on your hard, desperate pecker");
    EdgeNow();
    return;
    EdgeForGoto1();
}
function EdgeForGoto1()
{
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    setVar("edgingmode", "Normal");
    AV_SecondP();
    return;
    EdgeNow();
}
function EdgeNow()
{
	setVar("edgingmode", "Normal");
    edge();
    AV_SecondP();
	return;
}
function AV_SecondP()
{
    CMessage("I love being that mean, nasty girl... is so much fun.");
    return;
    Punish();
}
function Punish()
{
    cbt();
    AV_Still();
    return;
    return;
    Modulo3();
}
function Modulo3()
{
    CMessage("You\'re my good boy, so needy.");
    CMessage("Tell me " + random("how much you want to stroke your %Cock% for me", "you are ready to do exactly as I tell you"));
    CMessage("Yes, surrender your cock to me.");
    CMessage("%StartStroking%");
    CMessage(random("I want a show", "I want to be entertained", "I need you to amuse me"));
    CMessage(random("Faster", "Speed it up", "Full speed now"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b250.mp3");
    sleep(15);
    CMessage(random("Get ready to edge", "Get ready to edge darling"));
	stopAudio();
    edge();
    CMessage(random("Now the show begins", "Now let\'s get it on", "And now the real fun starts"));
    CMessage(random("Stand up", "Get up on your feet", "Stand up in front of the screen now"));
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("Add two clothespins to your balls...");
    sleep(20);
    CMessage(random("Another clothespin ", "One more clothespin ") + "on the balls dearest.");
    sleep(15);
    CMessage(random("Ok, you can place one on each nipple, cause I\'m nice like that", "I guess you can place one on your nipples, to spread the fun around just a little bit"));
    sleep(20);
    CMessage(random("Good, let\'s get you back up to 100% horny now", "Great, let\'s get you rock hard again now", "Perfect, you need to do some edges for me now"));
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    sleep(20);
    CMessage(random("This looks soo cool", "I wonder if that is as painful as it looks"));
    CMessage("You are getting me so damn hot");
    DoEdges(2, 3, 0);
    CMessage(random("You were going pretty hard there", "That was some pretty wild action"));
    CMessage(random("To keep you occupie take of the clothespins ", "Start taking of the clothespins ") + "one by one");
    CMessage(random("While you are doing that, think about what\'s about to happen", "While you are enduring that pain, think about the consequences of your deeds", "Consider your next task now, while your balls and nipples are suffering"));
    CMessage("%KneelForMe%");
    CMessage("Now, your %Balls% are free to play...");
    setTempVar("av_intera_013", true);
    CMessage("Get the " + random("Spoon ", "ruler ") + "ready...");
    sleep(10);
    CMessage("For you grand finale, we will have an amazing combo of pain and pleasure %PetName%");
    CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(15);
	stopAudio();
    edge();
    CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(15);
	stopAudio();
    edge();
    if(getVar("AV_DommeMistress", false))
    {
        CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(15);
		stopAudio();
    }
    if(getVar("AV_DommeMistress", false))
    {
        DoEdges(2, 3, 0);
    }
    CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(15);
	stopAudio();
    edge();
    CMessage(random("Wow, that was so cool", "What a show babe", "Spectacular"));
    CMessage("%SitDown%");
    delVar("av_intera_013");
    return;
    Modulo4();
}
function Modulo4()
{
    CMessage("It seems that you are here to serve and worship me");
    let answer0 = getInput("aren\'t you?",10);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("%KneelForMe%");
    //--Command:CustomMode(%ZAVI_ICantTake%,Goto,StopTask_AV)
    CMessage("%Stroke% %AV_AudioBeat%");
    CMessage("do you really think that you are man enough for me?");
    CMessage("than you have to prove it");
    CMessage("Now take that ruler and follow my orders");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    CMessage("Now give a intense slap on your thigh...");
    sleep(15);
	if (getMood() <= 25)
    {
        CMessage("is it red ...if not ,do it again");
        CMessage("so u must have guessed it");
        CMessage("that will be the minimum force you will apply on slapping your nuts");
    }
    CMessage("you will slap to the beat");
    if (getMood() <= 25)
    {
        CMessage("each slap must make you fall on ground");
        setTempVar("av_MG6a01", true);
    }
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(13);
	stopAudio();
    CMessage("ohh poor %Slave%");
    CMessage("does it hurts.? it must");
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(13);
	stopAudio();
    CMessage("because you deserve that....");
    CMessage("Do u want to " + "...uuhhhh?");
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(13);
	stopAudio();
    CMessage("show me your submission");
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(13);
	stopAudio();
    av_MG6a01();
}
function av_MG6a01()
{
    CMessage("I know it hurts");
    DoEdges(2, 3, 0);
    CMessage("Now slap your %Balls% till the edge fades away");
    sleep(15);
    cbt("ball");
    CMessage("Does it hurt?");
    CMessage("%Lol% " + "it must");
    CMessage("Let\'s do something fun");
    CMessage("now take the clothpins");
    CMessage("attach 2 on each of your nipples");
    sleep(15);
    CMessage("now twist each clothpins 90 degree");
    CMessage("and hold it");
    sleep(15);
    CMessage("does it hurt slave?");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("%Lol% a perve like u must be kicked it balls");
    }
    CMessage("now let the clothspin be on your nipples");
    CMessage("now flick the both clothpins 20 times each");
    DoEdges(2, 3, 0);
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(13);
	stopAudio();
    CMessage("how does it feel slave?");
    setTempVar("av_MG6a02", true);
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(13);
	stopAudio();
    av_MG6a02();
}
function av_MG6a02()
{
    CMessage("do you like serving me?");
    CMessage(random("attach ", "Put ") + randomInt(3, 5) + " clothpins on your %Balls%");
    sleep(20);
    CMessage("now give me 10 slow and sensual stokes");
    CMessage("each stroke must have gap of at least 5 sec");
    sleep(15);
    CMessage("Now stroke it as fast as u can");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("and give me a edge");
    holdEdge();
    CMessage("Now take that ruler and get ready to " + random("hit ", "slap ") + "your cock head");
    setTempVar("av_MG6a03", true);
    CMessage(random("Spank ", "Hit ") + "your %Cock%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(13);
	stopAudio();
    CMessage("How does it feel slave? does it hurts?");
    CMessage(random("Spank ", "Hit ") + "your %Cock%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(13);
	stopAudio();
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_rough", false))
    {
        CMessage("today I will break your nuts");
    }
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_rough", false))
    {
        CMessage("I like being mean to you %Slave%");
    }
    av_MG6a03();
}
function av_MG6a03()
{
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Does it pain slave");
    CMessage("your nuts must have been broken");
    CMessage("%Stroke% however youu like ...");
    CMessage("remember do not cum");
    edge();
    CMessage("%SitDown% and remove everything");
    CMessage("I will be glad to have more session with you");
    return;
    StopTask_AV();
}
function StopTask_AV()
{
    run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_PainInter.js");
    if(getVar("StopAllowed", false))
    {
        EndMod4();
        return;
    }
    if(getVar("av_MG6a03", false))
    {
        av_MG6a03();
        return;
    }
    if(getVar("av_MG6a02", false))
    {
        av_MG6a02();
        return;
    }
    if(getVar("av_MG6a01", false))
    {
        av_MG6a01();
        return;
    }
    EndMod4();
}
function EndMod4()
{
    CMessage("%ThatsEnough%");
    delVar("StopAllowed");
    delVar("av_MG6a03");
    delVar("av_MG6a02");
    delVar("av_MG6a01");
    return;
}