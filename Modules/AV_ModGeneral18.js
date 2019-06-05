DMessage("AV_ModGeneral18: start");
main();
DMessage("AV_ModGeneral18: end");
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
	if(getVar("dicelater",false) ) {
		delVar("dicelater");
		DiceLater()
		return;
	}
    if(getVar("AV_ModGeneral18_NotFirstTime", false))
    {
        AV_ModGeneral18_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral18", 0);
    setVar("AV_ModGeneral18_NotFirstTime", true);
    AV_ModGeneral18_NotFirstTime();
}
function AV_ModGeneral18_NotFirstTime()
{
    if (getVar("AV_ModGeneral18", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral18", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral18", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral18", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral18", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral18", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral18", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral18", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral18", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral18", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral18", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral18", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral18", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral18", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral18", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral18", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral18", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral18", getVar("AV_ModGeneral18", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral18", getVar("AV_ModGeneral18", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral18", getVar("AV_ModGeneral18", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral18", getVar("AV_ModGeneral18", 0) + 1000);
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
    setVar("AV_ModGeneral18", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    CMessage("Hey, want to see a cool trick?");
    CMessage("Put your hand on your dick for a second.");
    CMessage("Just rub it a little.");
    CMessage("That\'s good. You\'re my slave.");
    if(!getVar("AV_DommeMistress", false))
    {
        CMessage("Oh! No, no, I know you\'re not.");
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Oh! I know you are.");
    }
    CMessage("But that\'s the trick, did you feel how it didn\'t sound wrong right away?");
    if(!getVar("AV_DommeMistress", false))
    {
        CMessage("You had to think about it for half a second.");
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("You hadn\'t to think about it for half a second.");
    }
    CMessage("See, when I tell you to do stuff, put ideas in your head");
    CMessage("that get you turned on, you start just taking in what I say.");
    CMessage("The more turned on you get, you think less with your brain and more with your penis.");
    CMessage("The more favors I do for your penis, the more favors it does for me.");
    CMessage("Oh, does it turn you on when I talk about that stuff?");
    CMessage("About your hard cock, throbbing for me?");
    CMessage("Oops! Well, how about a little test?");
    CMessage("Take it out and start stroking");
	setStrokingNoTaunt();
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Yeah, you " + random("have to do it", "can\'t help it"));
    CMessage("You know I\'m getting in your head, but I\'m already in your head");
    CMessage("so it\'s like, what\'s the difference?");
    CMessage("I mean, I\'m going to get you addicted, yeah keep stroking, get you addicted");
    if(!getVar("av_fetish_rough", false))
    {
        CMessage("make you SO weak and keep you coming back for more");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("make you SO stupid and weak and keep you coming back for more");
    }
    CMessage("keeeeep stroking, but what\'s the difference?");
    CMessage("Stroke and don\'t worry about it.");
    CMessage("Up and down and up and down");
    if(!getVar("av_fetish_rough", false))
    {
        CMessage("and sooo aroused and gullible and turned");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("and sooo dumb and aroused and gullible and turned");
    }
    CMessage("Keep stroking");
    CMessage("Imagine a room full of balloons, up to the top, that\'s your brain.");
    CMessage("Each balloon is a thought of yours. Each stroke pops one.");
    CMessage("Keep going, pop pop pop.");
    CMessage("Pop eeeeeach and every one");
    CMessage("Feels too good to stop.");
    CMessage("Up, down, pop, pop. Oooh, here\'s a balloon that says \'don\'t trust her,\' let\'s pop that one.");
    CMessage("Here\'s one that says " + random("don\'t be her slave ", "don\'t get addicted to this ") + "\' Pop it now.");
    CMessage("Oh, wow! The room\'s empty! Just me here now.");
    CMessage("Well, that won\'t do.");
    CMessage("Here, I\'ll just write some stuff on the walls with chalk. S-l-a-v-e, slave, that\'s good.");
    CMessage("And I\'ll write this out, \'you. are. addicted. to. her.\'");
    CMessage("So now you know your name, it\'s \"Slave\" and your primary motivating factor: me!");
    CMessage("Some more balloons might get in here eventually, but you\'ll still be able to read this stuff.");
    CMessage("It\'s more important.");
    CMessage("Oh, hey, you\'re still stroking!");
    CMessage("You alread took all your own thoughts away, dummy!");
    CMessage("Well, here, I\'ll write one more thing for you. \' %AV_RepeatAL% \'");
    CMessage("Yeah, that should do it!");
    CMessage("Well, I guess I\'ll let you edge, now.");
    edge();
    CMessage("Goooood slave. A slave obeys.");
    CMessage("See! Wasn\'t that a cool trick!");
    return;
    Modulo2();
}
function Modulo2()
{
    CMessage("%SubName%");
    CMessage("Now we will have a little dice game");
    CMessage("We will start with one single dice and move our way forward");
    CMessage("Which means, you and your hand will be moving, while i am watching %EmoteHappy%");
    CMessage("So lets start right away with one dice");
    DoEdges(1, 6, 0);
    CMessage("Oh this was a great warm up for now, wasnt it");
    CMessage("I bet wou will like the game with 2 dices %EmoteHappy%");
    DoEdges(1, 6, 0);
    CMessage("%GNMCheerEdgeATon%");
    DoEdges(1, 6, 0);
    let answer0 = getInput("I am sure you dont mind if we try another round, do you?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("thats great %PetName%");
        DiceLater();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh so you are already finished for now, thats too bad");
    }
    return;
    DiceLater();
}
function DiceLater()
{
	if(getVar("dicelater",false) ) {
		CMessage("But I will give you some time to recover...");
		setVar("moduletorun", "Modules" + java.io.File.separator + "AV_ModGeneral18.js");
		setTempVar("dicelater",true);
		//--Command:BookmarkModule
		return;
	}
    CMessage("Back to our little dice game");
    CMessage("Since you finished stage 2 i guess its time for the masterclass.");
    CMessage("I dont think you will survive this stage %EmoteHappy%");
    DoEdges(1, 6, 0);
    CMessage("%GNMCheerEdgeATon%");
    DoEdges(1, 6, 0);
    CMessage("%GNMCheerEdgeATon%");
    DoEdges(1, 6, 0);
    CMessage("Now we are done for now %EmoteHappy%");
    return;
    Modulo3();
}
function Modulo3()
{
    CMessage("Now be a good boy and let go of your cock.");
    CMessage("You are nervous aren\'t you %SubName%?");
    CMessage("Don\'t be, I won\'t hurt you.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("too much ** %Laugh% **");
    }
    CMessage("Hands behind your back, now %PetName%");
    CMessage("So, you can be a good boy after all?");
    CMessage("You are getting what you want from me");
    CMessage("I intend to get what I want too.");
    CMessage("Touch yourself %SubName%, wank it for me.");
	setStrokingNoTaunt();
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("What do you want from your mistress?");
    CMessage("Good boy. As long as you continue to be so responsive and obedient...");
    CMessage("I may just have a little treat for you once I\'ve finished playing");
    CMessage("Now I\'m going to test your self-control.");
    CMessage("You have done very well so far, but now we\'re going to see how well your training has sunk in.");
    CMessage("Stroke! Faster! I want you  to feel a breeze on your face as you work that cock.");
	speedUpStroking();
    CMessage("You fucking love this don\'t you, my little toy?");
    edge("Now edge. I want to see precum. Edge until I get what I want.");
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    //startEdging();
    CMessage("Awwwww, you poor thing!");
    CMessage("You did sooo well to hold your cummies in your balls.");
    CMessage("Well done, %PetName%.");
    CMessage("You know what? You really are amusing me! Well done you!");
    CMessage("But do you know what would really entertain me?");
    CMessage("I can\'t wipe this smile off my face at the thought...");
    CMessage("...of you hurting your own balls for me.");
    let answer0 = getInput("Would you do that for me, pet? For your Mistress?");
	while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes", "yea", "yep"))
    {
		if(getVar("av_fetish_pain", false))
		{
			aV_YesGoodResponse();
		}else{
			CMessage("%Good%");
		}
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
		if(getVar("av_fetish_pain", false))
		{
			aV_NoBadResponse();
		}else{
			CMessage("No? In this case %KneelForMe%");
			AV_SP();
			return;
		}
    }
    AV_Pain();
}
function AV_Pain()
{
    CMessage("You have done such a good job of entertaining me");
    CMessage("Awww! I\'m such a mean little princess, aren\'t I? But you love me all the more for that, don\'t you pet?");
    CMessage("Now go get a ruler.");
    sleep(20);
    CMessage("%KneelForMe%");
    CMessage("and let the show begin!");
    CMessage("I\'m nice and comfy, and looking forward to this so much that I\'m starting to moisten.");
    setTempVar("av_intera_016", true);
    CMessage("Now smack your balls with that ruler, while you stare at me.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("Don't you dare look up, and don't stop slapping your balls until I say so...", 0);
    CMessage("First the left nut, then your right.");
    CMessage("Left-right-left-right-left-right... good little soldier!");
    CMessage("Keep on slapping them for me");
    CMessage("Harder! I wanna hear it SLAP!");
    CMessage("That\'s better.");
    CMessage("Now concentrate on your left nut");
    CMessage("slap it five times, and make sure I can hear it SLAP each time.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("If any of your strikes don\'t SLAP nicely, start the slaps again.");
    CMessage("Now the right nut. Five more SLAPS, please!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("Now ten SLAPS to the left.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("Remember, If any of your strikes don\'t SLAP nice and loud, start the slaps again.");
    CMessage("Now ten for your right nut. Nice.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("Awwwww... is that a tear in your eye?");
    delVar("av_intera_016");
    CMessage("Does that hurt your little balls?");
    CMessage("Good. This is getting me wet.");
    AV_SP();
}
function AV_SP()
{
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("And you know what I want when I get wet, don\'t you slave....");
    CMessage("Hmmm, you\'re doing a pretty good job, %PetName%.");
    CMessage("But, while I\'m no longer bored, I am getting horny");
    CMessage("But I want to see you edge for me again.");
    DoEdges(2, 3, 0);
    CMessage("Hmmm, you\'re just dripping precum now, my love.");
    CMessage("You must be soooo close now...");
    CMessage("Which makes it all the more amusing for me! Stand up now.");
    sleep(15);
    CMessage("This is great");
    CMessage("you are soooo horny, aren\'t you my love?");
    CMessage("Good! Now, let\'s get you even hornier");
    edge("%Edge% and thank me.");
    CMessage("Ohhhh, you\'re just streaming precum baby!");
    CMessage("Is this making you all horny and desperate, my love?");
    CMessage("Awwwwww, poor little toy!");
    CMessage("%SitDown%");
    return;
    Modulo4();
}
function Modulo4()
{
    CMessage("I know what you " + random("want", "need"));
    CMessage("But I don\'t do it just for you.");
    CMessage("Your desire for it makes me so... fucking ...wet.");
    let answer0 = getInput("Go ahead, say it baby, tell me what you want.", 15);
    if (answer0.isTimeout())
    {
        AV_Timeo84();
        return;
    }
    while (!(answer0.isLike("fuck me") || answer0.isLike("anal") || answer0.isLike("strapon") || answer0.isLike("cbt") || answer0.isLike("hurt me") || answer0.isLike("spank") || answer0.isLike("beat")))
    {
        answer0 = getInput("Tell me what you want, %SubName%");
    }
    if (answer0.isLike("fuck me", "anal", "strapon"))
    {
        CMessage("You really are a little " + random("bitch ", "slut ") + "don\'t you? %EmoteHappy%");
        AV_Spe_Anal();
        return;
    }
    else if (answer0.isLike("cbt", "hurt me", "spank", "beat"))
    {
        CMessage("You really are a " + random("painslave ", "slutpain ", "masochist ") + "don\'t you?");
        AV_Spe_CBT();
        return;
    }
    AV_Timeo84();
}
function AV_Timeo84()
{
    CMessage("Your poor dick");
    CMessage("You haven\'t even touched it.");
    CMessage("Let\'s get it nice and ready for me.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("I want you to work up a nice big load for me.");
    sleep(randomInt(10, 20));
    SpePartFinal();
    return;
    AV_Spe_CBT();
}
function AV_Spe_CBT()
{
    CMessage("you need lube for that one");
    sleep(30);
    CMessage("You\'re going to use this lube and massage your balls.");
    sleep(25);
    CMessage("You dont love feeling the weight of them in your hand?");
    CMessage("Squeeze them gently.");
    sleep(15);
    CMessage("I know you would like feeling my nails scratch lightly against them.");
    CMessage("Stop now, let's work that %Balls% for real now.", 0);
    cbt("ball");
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        cbt("ball");
    }
    SpePart2cbt();
    return;
    AV_Spe_Anal();
}
function AV_Spe_Anal()
{
    CMessage("Get your toy, or use your finger, but you need lube");
    sleep(30);
    CMessage("all I am offering right now is to take this glistening dick...and slide it right into your ass.");
    let answer0 = getInput("Are you afraid I\'ll see in your eyes how badly you want me to push my strapon into you?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo69();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("I will be " + "...maybe %EmoteHappy%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%Good%");
        increaseAnger(-3)
    }
    AV_Timeo69();
}
function AV_Timeo69()
{
    CMessage("Well, your leaking cock sort of gives it away.");
    CMessage("Tell me how much you want it, baby.");
    CMessage("Tell me you want my cock.");
    CMessage("Lube your ass for me");
    sleep(20);
    CMessage("Mmmmmm, that\'s it.  I\'m going to give it you.");
    CMessage("Are you ready for " + random("it", "me to fill your ass"));
    CMessage("Mmmm, there you go, honey, shhhhh. Fuck your ass for me...");
    sleep(20);
    CMessage("It\'s ok.  That\'s all of it.");
    CMessage("leave it right there for you to get used to.");
    CMessage("Relax baby, I\'m giving you exactly what you need.");
    CMessage("I\'ll only give you exactly what you ask for.");
    SpePart2anal();
    return;
    SpePart2cbt();
}
function SpePart2cbt()
{
    CMessage("Your poor dick");
    CMessage("You haven\'t even touched it.");
    CMessage("Let\'s get it nice and ready for me.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("I want you to work up a nice big load for me.");
    sleep(randomInt(10, 20));
    SpePart3cbt();
    return;
    SpePart2anal();
}
function SpePart2anal()
{
    CMessage("Your poor dick");
    CMessage("You haven\'t even touched it.");
    CMessage("Let\'s get it nice and ready for me.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("I want you to work up a nice big load for me.");
    sleep(randomInt(10, 20));
    SpePart3anal();
    return;
    SpePart3cbt();
}
function SpePart3cbt()
{
    CMessage("So " + random("what will it be honey", "What can I do for you"));
    CMessage("Hmm?  I can\'t quite hear you.");
    CMessage("Mmmm,  \"please burst my " + "As you wish.");
    CMessage("Slap your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank10.mp3");
    sleep(12);
    CMessage("Yeah?  Just, like that?");
    sleep(randomInt(10, 20));
    CMessage("You want to keep beating your balls just ...like ...this?");
    CMessage("Go ahead...");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank10.mp3");
    sleep(12);
    CMessage("You needed this, didn\'t you?");
    sleep(randomInt(10, 20));
    SpePartFinal();
    return;
    SpePart3anal();
}
function SpePart3anal()
{
    CMessage("So " + random("what will it be honey", "What can I do for you"));
    CMessage("Hmm?  I can\'t quite hear you.");
    CMessage("Mmmm,  \"please fuck " + "As you wish.");
    CMessage("Start fucking that ass");
    CMessage("Yeah?  Just, like that?");
    sleep(randomInt(10, 20));
    CMessage("You want to keep fucking your ass just ...like ...this?");
    CMessage("You needed that big dick in your ass, didn\'t you?");
    sleep(randomInt(10, 20));
    SpePartFinal();
    return;
    SpePartFinal();
}
function SpePartFinal()
{
    DoEdges(3, 3, 0);
    CMessage(random("Ah ah ah. Not yet", "Shhhhh. Not yet"));
    CMessage("Aww you poor whimpering mess.");
    CMessage("Your cock is trying to cum, I can see it.");
    CMessage("But nothing\'s coming out.");
    CMessage("Not yet.");
    CMessage("If I let you cum, what are you going do for me, hmm?");
    if(!getVar("av_fetish_cei", false))
    {
        SkipCEI2();
        return;
    }
    CMessage("If you want me to make you cum, you need to promise to clean up your mess.");
    CMessage("Promise me you\'ll lick up every drop");
    let answer0 = getInput("What do you say?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("Imagine licking your warm thick cum off my nipples while you bury your cock in my cunt", "It\'s going to feel so good. Say it. Promise me"));
        setTempVar("AV_EatCum", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Sww...no fun");
    }
    SkipCEI2();
}
function SkipCEI2()
{
    CMessage("Enough for now...");
    CMessage("Go clean yourself...you have 1 minute");
    sleep(60);
    CMessage("All clean? %Lol%");
    return;
}