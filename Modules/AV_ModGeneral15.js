DMessage("AV_ModGeneral15: start");
main();
DMessage("AV_ModGeneral15: end");
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
        DecidEdge();
        return;
    }
    CMessage("%stopstroking%", 0);
    stopStroking();
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
    if(getVar("AV_ModGeneral15_NotFirstTime", false))
    {
        AV_ModGeneral15_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral15", 0);
    setVar("AV_ModGeneral15_NotFirstTime", true);
    AV_ModGeneral15_NotFirstTime();
}
function AV_ModGeneral15_NotFirstTime()
{
    if (getVar("AV_ModGeneral15", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral15", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral15", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral15", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral15", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral15", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral15", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral15", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral15", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral15", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral15", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral15", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral15", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral15", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral15", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral15", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral15", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral15", getVar("AV_ModGeneral15", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral15", getVar("AV_ModGeneral15", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral15", getVar("AV_ModGeneral15", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral15", getVar("AV_ModGeneral15", 0) + 1000);
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
    setVar("AV_ModGeneral15", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    CMessage("Look, we don\'t have to pretend..");
    CMessage("you\'re going to do whatever I say right now.");
    CMessage("I don\'t have to coerce you into obeying me, you just do it.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("I\'m not going to tease you with My body because it\'s so unnecessary, isn\'t it?");
    CMessage("I dominate you so effortlessly.");
    if(getVar("av_fetish_foot", false))
    {
        CMessage("I know that you are a good footboy already but it\'s not enough.");
    }
    if(getVar("av_fetish_foot", false))
    {
        CMessage("you\'re still trying to have sex and that\'s not going to work for me.");
    }
    if(getVar("av_fetish_foot", false))
    {
        CMessage("I want you to be totally devoted to My feet only.");
    }
    CMessage("I want you to be totally devoted to me.");
    CMessage("That\'s right, just let your dick drip for me");
    CMessage("I know how badly you crave your cum.");
    if(getVar("av_fetish_cei", false))
    {
        CMessage("You are desperate to swallow down your hot load and I am in the mood to deny you for My own satisfaction.");
    }
    CMessage("I love teasing you, getting you all riled up and horny and then taking away the one thing you want the most.");
    CMessage("But hey, maybe if you beg me...");
    if(getVar("av_fetish_cei", false))
    {
        CMessage("I\'ll let you eat your cum");
    }
    if(!getVar("av_fetish_cei", false))
    {
        CMessage("I\'ll let you cum");
    }
    edge("Now %EdgeNoun% for me");
    //startEdging();
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    CMessage("What a sad little cycle you\'ve stuck yourself in.");
    CMessage("No matter how much your try to avoid me, " + random("your addiction will always prevail", "you will always come back"));
    CMessage("Just sit there and be denied. you can\'t resist the teasing though.");
    CMessage("Show Me how obedient you can be and you\'ll get a really great treat.");
    if(getVar("av_fetish_pain", false))
    {
        //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
		cbt("ball");
    }
    //CMessage("%Edge%");
    //startEdging();
	edge();
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "slap ") + "your %Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank10.mp3");
        sleep(12);
    }
    edge();
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "slap ") + "your %Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank10.mp3");
        sleep(12);
    }
    CMessage("You make it so easy for me.");
    CMessage(random("So easy to manipulate you", "you will do anything for me"));
    return;
    Modulo2();
}
function Modulo2()
{
    CMessage("You want me to deny you.");
    CMessage("You want me to bring you right to edge of cumming");
    CMessage("and then tell you to take your hands off.");
    CMessage("To put your throbbing, dripping cock away, and come back next time.");
    CMessage("I know you. You ache to have me deny you.");
    CMessage("Well, now I\'m going to see exactly how badly you want that.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Run your hand up and down the length of your cock.");
    CMessage("I need you as hard as possible right now.");
    CMessage("I want it so bad.");
    CMessage("Now keep jerking.");
    CMessage("Imagine if I were to lend you a hand with that?");
    CMessage("If I were to trail my fingertips up and down your shaft");
    CMessage("Keep stroking for me. I\'m not done with you yet.");
    CMessage("But I do need you on the edge, so be a good boy and get there for me.");
    CMessage("Believe me, I\'ll make it worth your while.");
    edge();
    CMessage("So, you claim you liked to be denied?");
    CMessage("It\'s time to test that you.");
    CMessage("I am going to " + random("do so many things to you", "make you feel so many things you didn\'t even think possible"));
    CMessage("I am going to " + random("make your cock ache more that you\'ve ever felt before", "drive you wild with pleasure"));
    CMessage("and then I\'m going to deny you.");
    CMessage("Time to start the real fun.");
    CMessage("no touching until I say so.");
    CMessage("I hope you get nice and worked up and right to the edge during the previous part.");
    CMessage("You are going to be " + random("so horny", "so worked up", "so frustrated"));
    CMessage("Time to start the real fun, for me that is.");
    CMessage(random("Stand up", "%KneelForMe%"));
    CMessage("keep your hands on your sides.");
    CMessage("You want to touch yourself again don\'t you?");
    CMessage("Well you can, but I just want you to rub your sweet spot for me.");
    CMessage("You know, that little area on the underside of your cock where the foreskin connects.");
    CMessage("Just use one or two fingers and rub that for me.");
    CMessage("As fast as you want.");
    CMessage("Mmm... that feels good doesn\'t it?");
    CMessage("Keep going for me.");
    CMessage("But don\'t worry, I\'m not done with you yet.");
    CMessage("Oh no, oh no. Far from it.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Keep stroking, enjoy it while you can, because it's pretty much time for you to stop.");
    CMessage("Keep going");
    CMessage("I\'ve had some much fun with you today");
    CMessage("I hope you\'re as frustrated as I hope you are");
    CMessage("Imagine how amazing it would be if I let you cum right now.");
    CMessage("If I just said fuck it and let you.");
    CMessage("mmm... this is a tough choice.");
    CMessage("%stopstroking%", 0);
	stopStroking();
    CMessage("I am really loving watching you abuse and frustrate yourself");
    CMessage("No breaks for you, time for some more edges.");
    CMessage("Get on your knees and edge once as quick as you can");
    edge();
    CMessage("I just like to see betas struggle to prove themselves %Lol%");
    CMessage("Is your body quivering from so many edges?");
    CMessage("Why don\'t you hump the air for me?");
    CMessage("haha you look so funny with your sissy clit waving around, straining for release.");
    CMessage("Keep your hands on your head while you imagine you are having sex with me");
    CMessage(random("pleasuring ", "caressing ") + "me.");
    CMessage("%SitDown%");
    return;
    Modulo3();
}
function Modulo3()
{
    CMessage("Now I want you to %Stroke% for me again");
    CMessage(random("You are asking, what this will be all about?", "I will try to explain to you, what I have in mind."));
    CMessage("You can\'t edge in this part of the session");
    CMessage("If you edge, I will punish you");
    CMessage("Simple, right?");
    if(getVar("AV_DommeMistress", false))
    {
        setVar("AV_NoEdge", randomInt(8, 10));
    }
    if(!getVar("AV_DommeMistress", false))
    {
        setVar("AV_NoEdge", randomInt(5, 7));
    }
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeFail()");
    setVar("AV_NE_Rounds", 0);
    Loop();
	return;
}
function Loop()
{
    switch(random("Serie1", "Serie2", "Serie3", "Serie4", "Serie5"))
    {
        case "Serie1":
        Serie1();
        return;
        break;
        case "Serie2":
        Serie2();
        return;
        break;
        case "Serie3":
        Serie3();
        return;
        break;
        case "Serie4":
        Serie4();
        return;
        break;
        case "Serie5":
        Serie5();
        return;
        break;
    }
    Serie1();
}
function Serie1()
{
    CMessage("%Stroke% to the beat");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "*.mp3");
    CMessage("Remember " + random("No Edges", "Edging is forbidden", "to not edge", "no edge allowed", "no edging"));
    sleep(randomInt(10, 15));
    CMessage(random("How are you doing?", "Can you still make it?", "You look exhausted?", "Sure you want to make me happy, right?"));
    sleep(randomInt(5, 10));
    CMessage("%stopstroking%", 0);
	stopAudio();
    AV_CheckRounds();
    return;
    Serie2();
}
function Serie2()
{
    CMessage(random("Pump that meat for me", "Go for it", "Grab your dick and stroke", "Stroke", "Wank", "Jerk it"));
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "60" + java.io.File.separator + "*.mp4");
    CMessage("%stopstroking%", 0);
	//stopVideo();
    AV_CheckRounds();
    return;
    Serie3();
}
function Serie3()
{
    CMessage("%Stroke% to the beat");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "erotic" + java.io.File.separator + "*.mp3");
    CMessage("I am sure you didnt forget that there is no edge allowed, did you");
    sleep(randomInt(10, 15));
    CMessage(random("Almost done", "Keep it up", "Nearly finished", "Be strong", "almost there", "Just a few more seconds", "Just a little overtime"));
    sleep(randomInt(5, 10));
	stopAudio();
    CMessage("%stopstroking%", 0);
    AV_CheckRounds();
    return;
    Serie4();
}
function Serie4()
{
    CMessage("Now, " + random("make your Mistress proud and ", "Just ", "Go on ", "Simply ", "You have to ", "I want you ", "you will ") + "%Stroke% " + random("really fast ", "as fast you can ") + "watching the next short video...");
    CMessage(random("Pump that meat for me", "Go for it", "Grab your dick and stroke", "Stroke", "Wank", "Jerk it"));
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "10" + java.io.File.separator + "*.mp4");
	//stopVideo();
    CMessage("%stopstroking%", 0);
    AV_CheckRounds();
    return;
    Serie5();
}
function Serie5()
{
    CMessage("Now, " + random("make your Mistress happy and ", "can you do me a favour and ", "go on ", "simply ", "you have to ", "I want you to ", "you will ") + "%Stroke% " + random("really fast ", "as fast you can ") + "watching the next short video...");
    CMessage(random("Pump that meat for me", "Go for it", "Grab your dick and stroke", "Stroke", "Wank", "Jerk it"));
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "15" + java.io.File.separator + "*.mp4");
	//stopVideo();
    CMessage("%stopstroking%", 0);
    AV_CheckRounds();
    return;
    AV_CheckRounds();
}
function AV_CheckRounds()
{
    setVar("AV_NE_Rounds", getVar("AV_NE_Rounds", 0) + 1);
    if (getVar("AV_NE_Rounds", 0) >= getVar("AV_NoEdge", 0))
    {
        YouDid();
        return;
    }
    CMessage(random("Cool down a bit", "Just a few seconds to realx and calm down", "You have earned a short break", "Take a break", "a little break for you", "rest", "rest a little"));
    sleep(randomInt(5, 20));
    Loop();
    return;
    EdgeFail();
}
function EdgeFail()
{
    CMessage("%stopstroking%", 0);
	stopAudio();
	stopVideo();
    CMessage(random("You failled ", "I told you to not edge ", "Oops ") + "...");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeFail")
    CMessage(random("Punishment time", "I need to punish you now"));
    //run("CBT" + java.io.File.separator + "*.js");
	cbt();
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Now you will spank your %Balls% following the beat");
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage(random("Spank ", "Hit ") + "your %Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank10.mp3");
        sleep(12);
    }
    CMessage("Let\'s " + random("try again", "continue"));
    Loop();
    return;
    YouDid();
}
function YouDid()
{
    CMessage("You did it %SubName%");
    setVar("edgingmode", "Normal");
    return;
    Modulo4();
}
function Modulo4()
{
    CMessage("You\'re hoping to cum tonight, aren\'t you?");
    CMessage("How long as it been?");
    CMessage("I like it when you\'re frustrated, and, less importantly, so do you.");
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_rough", false))
    {
        CMessage("I want you to degrade yourself");
    }
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_rough", false))
    {
        CMessage("%lol% now your fun can begin %Slave%.");
    }
    CMessage("%KneelForMe%");
    sleep(10);
    CMessage("Get yourself hard then give me 50 strokes at a medium pace");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    sleep(30);
    CMessage("Another 50 strokes.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    sleep(10);
    CMessage("I am working you up to your first edge, but don\'t get there just yet.");
    CMessage("Enjoy the feeling of submission, of not knowing what challenges lie in store.");
    edge();
    CMessage("There will be many more edges before you get a chance to cum.");
    sleep(25);
    CMessage("Why don\'t you get yourself to the edge again right now.");
    edge();
    CMessage("Enjoy the sensations.");
    CMessage("Let your hands drift down to your cock, softly pet your %Cock%");
    CMessage("Uh huh, yes, " + random("does your cock want more?", "make your cock want more."));
    CMessage("Not yet though");
    CMessage("I want you to spread your knees wide apart and arch your back a little bit");
    CMessage("just like in this picture");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "kneel" + java.io.File.separator + "07.jpg");
    sleep(20);
    CMessage("Start stroking yourself in this subservient sissy position");
	setStrokingNoTaunt();
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("your rightful place is being kept horny, frustrated and ready to do anything you are told.");
    CMessage("Lick your thumb and some fingers on your left hand.");
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Do I need to tell you where these will be going?");
    }
    CMessage("Ok time for one of your videos.");
    CMessage("Keep stroking your little dicklet");
    playVideo("Videos" + java.io.File.separator + "*.*");
    CMessage("%Stop%", 0);
    CMessage("%SitDown%");
    CMessage("Now spread your legs for me and raise your legs up the table");
    CMessage("so that your cock is pointing at you");
    CMessage("stroke yourself at a much faster pace so that you bring yourself to an edge.");
    CMessage("Keep going");
    edge("And now Edge for me");
    CMessage("Put your legs down");
    return;
}