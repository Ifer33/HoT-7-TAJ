DMessage("AV_ModGeneral39: start");
edged=false;
main();
DMessage("AV_ModGeneral39: end");
function main()
{
    if(getVar("AV_ModGeneral39_NotFirstTime", false))
    {
        AV_ModGeneral39_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral39", 0);
    setVar("AV_ModGeneral39_NotFirstTime", true);
    AV_ModGeneral39_NotFirstTime();
}
function AV_ModGeneral39_NotFirstTime()
{
    if (getVar("AV_ModGeneral39", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral39", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral39", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral39", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral39", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral39", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral39", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral39", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral39", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral39", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral39", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral39", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral39", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral39", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral39", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral39", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral39", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral39", getVar("AV_ModGeneral39", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral39", getVar("AV_ModGeneral39", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral39", getVar("AV_ModGeneral39", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral39", getVar("AV_ModGeneral39", 0) + 1000);
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
    setVar("AV_ModGeneral39", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage("Look who\'s here");
    addContact(2);
    CMessage("Hey %domFriend1Name%");
    SMessage("%Hi% %DomName%", -1, 2);
    SMessage("May I take control for a bit?", -1, 2);
    CMessage("Sure...I\'ll be right back...");
    removeContact(1);
    CMessage("Good. Okay. Fuck, when I\'m not the least bit horny what do I even do?");
    CMessage("You must be so horny today!");
    CMessage("Well...I can obviously see that, looking at your boner.");
    CMessage("But why don\'t we start with one of my fetishes...");
    if(!getVar("AV_BallTied", false))
    {
        CMessage("%TieYourBalls%");
    }
    CMessage("Now lay back and stroke your cock slowly.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("That\'s amazing!");
    CMessage("It\'s so hot that you\'re doing all this for me.");
    CMessage("%StrokeFaster%");
    sleep(15);
    SMessage("%domFriend1Name% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Glitter1" + java.io.File.separator + "KeepStroking*.mp3");
    edge();
    CMessage("You\'re shaking %Name%!");
    CMessage("I've realized during some handjobs I gave that the guy love it when I stop stroking when he is close to cumming");
    CMessage("and just tickle the tip of his cock with my fingertips and fingernails.");
    CMessage("So I\'m sure you\'ll also love this next part.");
    CMessage("Get close to cumming by only gently rubbing that sensitive spot on the underside of your cock.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    CMessage("And then");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "d3466ahr()");
	edged=false;
	if(!edged){
    CMessage("I trust you on this!");
	}if(!edged){
    CMessage("You\'re breathing heavy, are you close?");
	}if(!edged){
    sleep(15);
	}if(!edged){
    CMessage("oh my god, my pussy is dripping when you are squirming like that!");
	}if(!edged){
    sleep(15);
	}if(!edged){
    CMessage("Every part of your body will tell you to orgasm but you must resist");
	}if(!edged){
    CMessage("You will resist..");
	}if(!edged){
    CMessage("Or suffer the consequences");
	}if(!edged){
    d3466ahr();
	}
	return;
}
function d3466ahr()
{
	edged=true;
    CMessage("%Stop%", 0);
    setVar("edgingmode", "Normal");
    SMessage("%domFriend1Name% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Glitter1" + java.io.File.separator + "GoodBoy*.mp3");
    CMessage("Let\'s see if you can stroke 15 times without rest...");
    CMessage("I will count for you");
    SMessage("%domFriend1Name% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Glitter1" + java.io.File.separator + "Count01.mp3");
    CMessage("%Stop%", 0);
    addContact(1);
    CMessage("Very nice %domFriend1Name%");
    CMessage("%ThankYou%");
    removeContact(2);
    return;
    
    Modulo2();
}
function Modulo2()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage("Look who\'s here");
    addContact(3);
    CMessage("Hey %domFriend2Name%");
    SMessage("%Hi% %DomName%", -1, 3);
    SMessage("May I take control for a bit?", -1, 3);
    CMessage("Sure...I\'ll be right back...");
    removeContact(1);
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("Stand up and spread your legs %SubName%.");
    CMessage("I guess we\'ll start with your nipples?");
    CMessage("Put those clamps on. then grab them, twist them, I don\'t care, just hurt yourself.");
    sleep(20);
    CMessage("How long do you reckon we need to do this?");
    let answer0 = getInput("Does it hurt?");
    if (answer0.isLike("yes", "yea", "yep",5))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("That\'ll only get a lot worse %Slave%, so we best get you into the main event");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("We\'ll do some pure stroking first to get you more horny");
    CMessage("then it\'s time for pain...");
    CMessage("I guess there\'s some tease in the denial part.");
    CMessage("I\'m impatient and I want to hurt you, so build up to that edge!");
    CMessage("%StrokeFaster%");
    DoEdges(1, 3, 100);
    CMessage("I hope you\'re really horny and desperate now %Slave%...");
    if(!getVar("av_fetish_pain", false))
    {
        h84kds();
        return;
    }
    CMessage("Because we are not done.");
    CMessage("Now, " + random("we know you are truly submissive so lets get on with it...", "Let\'s see how submissive you are, %SubName%."));
    CMessage("We\'ve much to inflict on you.");
    CMessage("Get your spoon ready...");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("Embrace your submissive nature.");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("That\'s better. You should know pain, %Slave%.");
    CMessage("It is your destiny. As is frustration.");
    
    h84kds();
}
function h84kds()
{
    addContact(1);
    CMessage("Very nice %domFriend2Name%");
    CMessage("%ThankYou%");
    removeContact(3);
    return;
    
    Modulo3();
}
function Modulo3()
{
    CMessage("I hope you are having fun.");
    CMessage("Well, that kind of fun where you\'re kept frustrated and that you should be a quivering horny wreck by now.");
    CMessage("That must have been frustrating for you.");
    CMessage("But maybe edges and pain are worse.");
    CMessage("I know stroking is the pleasurable part for you");
    CMessage("once we have you edging and holding edges it gets much worse for you");
    CMessage("and thats why you are here.");
    //CMessage("%Edge%");
    //startEdging();
	edge();
    CMessage("Probably not.");
    CMessage("It\'s really hard to resist me once I take control.");
    CMessage("Maybe now you can appreciate the gravity of your situation.");
    CMessage("You\'re mine now");
    edge();
    CMessage("Always be at my whim %PetName%.");
    CMessage("Whether it be here or alone, think of me first.");
    CMessage("And think of what your orgasm does for me.");
    edge();
    CMessage("Practically nothing.");
    CMessage("Yes, you should empty your balls every so often for health reasons");
    CMessage("but that needn\'t accompany an orgasm.");
    answer1=getInput("So tell me, can you think of a single reason why I should <I>ever</I> let you cum?",5);
    if (answer1.isLike("yes"))
    {
        CMessage("wrong");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Of course there is no reason for you to cum.");
    }
    if(getVar("pvMadeKeyholder", false))
    {
        CMessage("I might just keep you as a denied chastity for the rest of your life, milking you once a month.");
        CMessage("There is <I>one</I> reason to let you cum, however.");
    }
    CMessage("Incentive.");
    CMessage("So long as I offer the <I>possibility</I> of letting you cum, that's enough. ");
    CMessage("You\'ll cling to me just in case I give you permission, be it ruin, full, or somewhere between the two.");
    edge();
    CMessage("That\'s enough, so I will permit you the occasional orgasm.");
    CMessage("Just to firmly establish your reliance on me.");
    CMessage("All that matters is that I decide it.");
    CMessage("Or enable the decision, like this:");
    answer1=getInput("Think. Do you want to cum?",5);
    if (answer1.isLike("yes"))
    {
        CMessage("Of course I want you to <B>want</B> to cum.");
    }
    if (answer1.isLike("no"))
    {
        CMessage("Don\'t lie %SubName%");
    }
    if(!getVar("pvMadeKeyholder", false))
    {
        CMessage("Otherwise there\'s no use in denying you.");
    }
    if(getVar("pvMadeKeyholder", false))
    {
        CMessage("Otherwise there\'s no use in locking you up.");
    }
    CMessage("Every second of every day that desire needs to control you.");
    CMessage("That way you\'ll be properly submissive.");
    edge();
    CMessage("So embrace that desire, for it enables you to serve me even greater.");
    CMessage("So long as you remember I come first.");
    return;
    
    Modulo4();
}
function Modulo4()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage("Look who\'s here");
    addContact(4);
    CMessage("Hey %domFriend3Name%");
    SMessage("%Hi% %DomName%", -1, 4);
    SMessage("May I take control for a bit?", -1, 4);
    CMessage("Sure...I\'ll be right back...");
    removeContact(1);
    CMessage("So you probably heard that " + random("I like pain slave?", "I like inflicting pain."));
    CMessage("So long as I\'m in control of that sensation I love it");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("I now expect full submission from you.");
    CMessage("%StartStroking%");
    CMessage("Enjoy your stroking %Slave%");
    if(!getVar("av_fetish_pain", false))
    {
        c3Fim();
        return;
    }
    CMessage("Then will be my turn...");
    switch(random("c301", "c302"))
    {
        case "c301":
        c301();
        return;
        break;
        case "c302":
        c302();
        return;
        break;
    }
    
    c301();
}
function c301()
{
    CMessage("Prepare to hurt your balls!");
    CMessage("Every time you stroke upwards, you have to smack your balls with the ruler.");
    CMessage("Doing it a little light so you can fit it in is fine");
    CMessage("so long as you can feel the stinging on every hit");
    CMessage("Let\'s start with 10 slow strokes to get you into it...");
    CMessage("%StartStrokingNS%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b055.mp3");
    sleep(10);
    CMessage("%Stop%", 0);
    CMessage("Easy, right?");
    CMessage("Let\'s try a little fast...");
    CMessage("%StartStrokingNS%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b075.mp3");
    CMessage("Hurt those balls for me! I hope the stroking is worth it.");
    CMessage("%Stop%", 0);
    sleep(15);
    CMessage("%StartStrokingNS%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b110.mp3");
    CMessage("Can you edge like that I wonder?");
    CMessage("%Stop%", 0);
    sleep(15);
    CMessage("Let\'s find out, hit and stroke as fast as you can without ruining the order!");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeSpank()")
	edged=false;
    CMessage("%Edge%");
    LoopSpankStroke();
	return;
}
function LoopSpankStroke()
{
    if(!edged){
		sleep(01);
	} if(!edged){
		CMessage("%edgingtaunts1%");
	} if(!edged){
		LoopSpankStroke();
	}
    return;
    EdgeSpank();
}
function EdgeSpank()
{
	edged=true;
    CMessage("Hold that edge %Slave%!");
    CMessage("But stop smacking yourself...");
    CMessage("Drop your ruler.");
    CMessage("Grab your balls in your other hand.");
    CMessage("Once I say you can stop holding it");
    CMessage("immediately hit your balls with your stroking hand <I> really</I> hard, and do it twice!");
    CMessage("That should get rid of that edge...");
    CMessage("%Stop%", 0);
    setVar("edgingmode", "Normal");
    setRapidText(true);
    CMessage("Hit your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    setRapidText(false);
    CMessage("That looked really painful slave...");
    CMessage("I wonder if anything could make you hit harder than that?");
    CMessage("Hit again");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage(random("Wow... that looked even more painful, I loved it!", "Ouch, that hurt! And I still don\'t think that was as strong as you did it..."));
    CMessage("I\'m impressed, something must really have spurred you on to do that!");
    c3Fim();
    return;
    
    c302();
}
function c302()
{
    CMessage("%stopstroking%", 0);
    CMessage("Time for the clamps");
    CMessage("Heres where I want you to put them.");
    CMessage("first put two on each nipple.");
    CMessage("One on top of the other so it has an extra pinch.");
    sleep(30);
    CMessage("Now 6 on your balls");
    CMessage("arranged however you like.");
    sleep(30);
    CMessage("You look much better");
    CMessage(random("and I imagine that hurts a LOT!", "Ah that feels good..."));
    CMessage("But it\'s going to get a lot worse for you, %Slave%.");
    CMessage("Now wait just a bit longer with that pain before I let you stroke...");
    sleep(randomInt(20, 30));
    CMessage("Okay you can stroke now, but of course I have a twist!");
    CMessage("For every 10 seconds that pass, choose a peg.");
    CMessage("You are to flick that peg constantly with your spare hand for the entire 10 seconds");
    CMessage("then take it off once those 10 seconds pass.");
    CMessage("Then you get a 5 second break before the next one, then back to flicking");
    CMessage("Ready?");
    CMessage("%StartStroking%");
	//setStrokingNoTaunt();
    CMessage("choose a peg and flick");
    sleep(10);
    CMessage("and remove that clothespin");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Suck.mp3");
    sleep(05);
    CMessage("Another one");
    sleep(10);
    CMessage("Ah that looks so hot slave! A little whimper on your face whenever you take one off..");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Suck.mp3");
    CMessage("%KeepStroking%, are those left starting to hurt?");
    sleep(10);
    CMessage("Damn, that hurts so much %Slave%, and you have so many on... Sucks to be you, huh?");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Suck.mp3");
    CMessage("I wonder which ones you chose to leave?");
    sleep(10);
    CMessage("Remove another one");
    sleep(05);
    CMessage("And edge for me!");
    //startEdging();
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
	edge();
    CMessage("I hope you enjoyed the pegs.");
    CMessage("I guess I don\'t have any more use for you.");
    CMessage("You can remove the rest of the clothespins");
    c3Fim();
    return;
    
    c3Fim();
}
function c3Fim()
{
    addContact(1);
    CMessage("Very nice %domFriend3Name%");
    CMessage("%ThankYou%");
    removeContact(4);
    return;
}