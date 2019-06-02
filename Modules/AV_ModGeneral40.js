DMessage("AV_ModGeneral40: start");
main();
DMessage("AV_ModGeneral40: end");
function main()
{
    if(getVar("AV_ModGeneral40_NotFirstTime", false))
    {
        AV_ModGeneral40_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral40", 0);
    setVar("AV_ModGeneral40_NotFirstTime", true);
    AV_ModGeneral40_NotFirstTime();
}
function AV_ModGeneral40_NotFirstTime()
{
    if (getVar("AV_ModGeneral40", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral40", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral40", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral40", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral40", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral40", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral40", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral40", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral40", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral40", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral40", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral40", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral40", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral40", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral40", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral40", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral40", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral40", getVar("AV_ModGeneral40", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral40", getVar("AV_ModGeneral40", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral40", getVar("AV_ModGeneral40", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral40", getVar("AV_ModGeneral40", 0) + 1000);
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
    setVar("AV_ModGeneral40", 0);
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
    CMessage("You don\'t even have to say a word and I know that you\'re aching.");
    CMessage("Mmm I can tell the idea of this turns you on, %PetName%.");
    CMessage("Go ahead and stroke that %Cock%");
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
	Stroking();
    CMessage("Grab a hold of it in your hand");
    if (getVar("cocksize", "NA") == "small")
    {
        CMessage("that really shouldn\'t be hard considering just how pathetically small it is");
    }
    CMessage("Pull and stroke that %Cock% as much as you want.");
    if(getVar("av_fetish_humiliating", false))
    {
        CMessage("Whine and pant and moan like the pathetic whore you are.");
    }
    CMessage("But don\'t you dare fucking cum, not unless I give you my permisssion.");
    CMessage("Mmm you\'re stroking yourself furiously now, aren\'t you?");
    CMessage("You\'re desperately yanking on that sad tiny babydick as you picture it.");
    CMessage("*Laughs* Of course you are.");
    CMessage("Well you don\'t get to cum just yet, %PetName%.");
    CMessage("You have to earn that privilege.");
    //CMessage("%Edge%");
    //startEdging();
	edge();
    CMessage("Want to hear the truth?");
    CMessage("I don\'t think your body is complicated at all.");
    CMessage("Just one simple sound and you will react.");
    CMessage("Need a proof?");
    CMessage("I want you to twitch your %Cock% when you hear that sound");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "Suck.mp3");
    CMessage("You love this sound, don\'t you?!");
    CMessage("And I want you to twitch and hold when you hear that one");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "Deep.mp3");
    CMessage("you - or let\'s be honest - your body responds immediately.");
    CMessage("Before you even recognize what\'s happening.");
    CMessage("Let it twitch. Enjoy the twitch.");
    CMessage("You can\'t do anything about it.");
    CMessage("In fact you don\'t want to do anything about it");
    CMessage("because you enjoy the control i have over you and your... %Cock%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "Suck.mp3");
    CMessage("Get used to it. I. Will. Control. Your. Cock!");
    CMessage("twitch");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "Suck.mp3");
    CMessage("Like it when I get more harsh?");
    CMessage("The more dominant i get the more your dick twitches");
    CMessage("twitch");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "Suck.mp3");
    CMessage("See... you are a fucking cockslave");
    CMessage("Twitch for me slaveboy");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "Deep.mp3");
    CMessage("Do you think we can even set a rhythm?");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "5Sucks.mp3",true);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "3S1D3S.mp3");
    CMessage("God.");
    CMessage("Even that is working...god...I will cockfuck your brain so hard slaveboy!");
    CMessage("Oh look at you...you get even more aroused when I talk all bossy to you.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "3S3D.mp3");
    CMessage("Tingle, %PetName% you are completely helpless to me.");
    CMessage("But I am sure you already recognized that...");
    CMessage("I will use you and your new favourite sound till you explode");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "3Deep.mp3");
    CMessage("Up and down, twitching around");
    CMessage("I could do this all day long");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "Deep.mp3",true);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "Suck.mp3",true);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "3S1D3S.mp3",true);
    CMessage("And your cock twitches like a pendulum");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "3Deep.mp3",true);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "3S3D.mp3",true);
    CMessage("It gets intense doesn\'t it?");
    CMessage("I want you throbbing, twisting and shivering with every sound");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "5Sucks.mp3");
    CMessage("That felt sooo good...didnt it? I\'m sure your cock is still responding");
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
    CMessage("I bet you can already feel this arousal.");
    CMessage("And there is nothing you can do about it.");
    CMessage("And with every word this arousal becomes stronger");
    CMessage("I control your cock.");
    CMessage("Every " + random("word ", "command ") + "of mine are his very reality.");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("See how easy that was?");
    CMessage("You see... there is so much blood in you cock or so to speak in your other mind right now.");
    CMessage("What is left for you?");
    CMessage("That\'s right.");
    CMessage("Your cock is in control of you.");
    CMessage("Keep doing that!");
    CMessage("But don\'t cum yet.");
    CMessage("It isn\'t the time for that.");
    CMessage("But what am I saying? I control your cock.");
    CMessage("You will cum when I say so.");
    CMessage("%Stop%", 0);
	stopStroking();
    CMessage("Sub men like being treated like objects or toys.");
    CMessage("So that\'s just what I need to do");
    CMessage("use you for my pleasure and needs");
    CMessage("and then simply discard you.");
    CMessage("It\'s a play, nothing more but it works just fine.");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    if(!getVar("av_fetish_pain", false))
    {
        a3rrfue();
        return;
    }
    CMessage("Get the spoon ready...");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("Discipline is the most essential ingredient.");
    CMessage("You doesn't need to \"deserve it\"");
    CMessage("it is simply necessary.");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    a3rrfue();
}
function a3rrfue()
{
    CMessage("Having and keeping your balls full will ensure your full attention towards me.");
    CMessage("Bigger balls equals more obedience and willingness to do anything for me.");
    CMessage("%StartStroking%");
    CMessage("And DOWN");
    CMessage("UP",0);
    CMessage("And DOWN",0);
    CMessage("That\'s right.");
    CMessage("I control your cock.");
    CMessage("Your cock controls YOU.");
    CMessage("Therefore I control YOU");
    CMessage("Repeat after me:");
    CMessage("YOU controls my cock");
    sleep(15);
    CMessage("My cock controls ME");
    sleep(15);
    CMessage("You control ME");
    sleep(15);
    CMessage("That\'s right.");
    CMessage("And now I will count you down from 5 to 1.");
    CMessage("And you will edge for me");
    CMessage("5 Feel your intense arousal");
    CMessage("4 Feel how it builds up inside you");
    CMessage("3 Feel how the intense pressure");
    CMessage("2 Almost there.");
    CMessage("And 1",0);
    holdEdge();
	//--UNINTERPRETED LINE:%Edge% @EdgeHold @RTOff
    if(getVar("av_fetish_humiliating", false))
    {
        CMessage("subtle ways of humiliation are extremely effective.");
    }
    if(getVar("av_fetish_humiliating", false))
    {
        CMessage("You " + random("want ", "needs ") + "it.");
    }
    if(getVar("av_fetish_humiliating", false))
    {
        CMessage("Humiliation makes you more humble.");
    }
    CMessage("You have done so well.");
    CMessage("You pleased me.");
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
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("Stretch your tense limbs and relax for me.");
    CMessage("It\'s okay to let go, just a little, just to relax.");
    CMessage("Good boy. just float for a moment.");
    CMessage("Surrounding you is nothing, but a warm, black void.");
    CMessage("Now, someone has to fill the void in your head and push out all the remaining worries.");
    CMessage("Someone has to take over, so that you can completely relax.");
    CMessage("I would like to do that for you, but you have to let me in.");
    CMessage("Feel me coming into your head, taking up residence and pushing out any stray thoughts.");
    CMessage("feel me quiet down your mind.");
    CMessage("Everytime I ask you a question, you will answer with \"Yes, Mistress\".");
    let answer0 = getInput("Do you understand?");
    while (!(answer0.isLike("yes mistress") ))
    {
		if (answer0.isLike("yes"))
		{
			answer0 = getInput("Yes what?");
			//--Command:LoopAnswer
		}else{
			answer0 = getInput("Do you understand? %SubName%?");
		}
    }
    if (answer0.isLike("yes mistress"))
    {
        CMessage("%GoodBoy%");
    }
    let answer1 = getInput("Do you like having me in your head?", 5);
    if (answer1.isTimeout())
    {
        wehje4s();
        return;
    }
    while (!(answer1.isLike("yes mistress") ))
    {
        if (answer0.isLike("yes"))
		{
			answer0 = getInput("Yes what?");
			//--Command:LoopAnswer
		}else{
			answer0 = getInput("Do you understand? %SubName%?");
		}
    }
    if (answer1.isLike("yes mistress"))
    {
        CMessage("%GoodBoy%");
    }
    wehje4s();
}
function wehje4s()
{
    //CMessage("%StartStroking%");
	Stroking();
    let answer0 = getInput("Can you feel how much the submission excites you, how much the vulnerability excites you?", 5);
    while (!(answer0.isLike("yes mistress") ))
    {
        if (answer0.isLike("yes"))
		{
			answer0 = getInput("Yes what?");
			//--Command:LoopAnswer
		}else if (answer0.isTimeout())
		{
			re457ik();
			return;
		}else{
			answer0 = getInput("Do you understand? %SubName%?");
		}
    }
    if (answer0.isLike("yes mistress"))
    {
        CMessage("%GoodBoy%");
    }
    re457ik();
}
function re457ik()
{
    CMessage("Moan a little.");
    CMessage("As you moan, you feel yourself getting more submissive.");
    CMessage("The more submissive you get, the hornier you feel.");
    CMessage("The hornier you feel, the more you have to moan.");
    CMessage("%stopstroking%", 0);
	stopStroking();
    CMessage("%KneelForMe%");
    CMessage("Put your hands on your knees.");
    CMessage("I\'m glad you learned what I like so quickly.");
    CMessage("Those balls are so blue and huge.");
    CMessage("Meanwhile, I\'ve had orgasms left and right.");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("I never thought I\'d like it so much.");
    CMessage("The way you begged and pleaded for release");
    CMessage("I\'m sorry %Name%, I just can\'t help myself.");
    CMessage("You became such a cute little submissive bitch that I don\'t know what got into me.");
    //CMessage("%Edge%");
    //startEdging();
	edge();
    CMessage("Now just keep that cum in those balls for a little bit longer, %PetName%");
    CMessage("I love watching you struggle and whimper.");
    sleep(20);
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("Mmmmmm, your suffering turns me on.");
    if(getVar("AV_Denied", false))
    {
        CMessage("wow, I never knew what a long-denied cock looked like, but I like it.");
    }
    CMessage("Oh, you like that?");
    CMessage("Mmmm, look at you squirm.");
    //CMessage("%Edge%");
    //startEdging();
	edge();
    CMessage("Oh, that\'s so fucking hot.");
    CMessage("Don\'t complain. If you complain too much I\'m going to be very disappointed");
    let answer0 = getInput("and you don\'t want to disappoint me, do you?",10);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesBadResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoGoodResponse();
    }
    CMessage("There are consequences to that.");
    CMessage("OK, now let stroke a little again");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("Oh my God, this is the hardest cock I\'ve ever felt.");
    CMessage("That\'s pretty good.");
    CMessage("Let\'s speed up a bit.");
    CMessage("Yeah, you like that feeling?");
    CMessage("Oh, are you close? Nope, not yet!");
    CMessage("%Stop%", 0);
	stopStroking();
    CMessage("Oh, God %PetName%, this is fun.");
    CMessage("But I\'m not going to let you cum just yet");
    CMessage("We have plenty of time to keep you on the edge, %Name%.");
    CMessage("Mmm... look at your cock twitching there...");
    CMessage("that pre-cum dripping out.");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("Your legs are tensing...");
    CMessage("oh poor baby are you still close?");
    CMessage("%stopstroking%", 0);
	stopStroking();
    CMessage("Just relax and let that cock calm down");
    CMessage("We\'re not done yet though...");
    CMessage("oh no, definitely not done.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("get your ruler ready...");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Mmmm... you like that?");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Indeed, a little pain does feel nice.");
    }
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("yeah, I can tell you liked it, your cock is still so fucking hard.");
    }
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
    CMessage("You\'ve been here long enough to know that I don\'t ask twice.");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("%StartStroking%");
    CMessage("Slowly.");
    CMessage("Mmm. That\'s cute. You almost look like you enjoy this!");
    CMessage("But I don\'t believe you.");
    CMessage("We\'ve put you through a lot already");
    CMessage("but I know you aren\'t broken yet. I can see it in your eyes.");
    CMessage("I\'ve always seen it in your eyes.");
    CMessage("There\'s still a bit of resistance in you somewhere");
    CMessage("cause I don\'t think you realize that the world you knew is gone.");
    CMessage("I am your world now.");
    CMessage("And I thought I made this clear to you already");
    CMessage("but I guess you needed a reminder.");
    if(!getVar("av_fetish_pain", false))
    {
        jeiu3f();
        return;
    }
    CMessage("%Stop%", 0);
    CMessage("Get the spoon ready");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank1*.mp3");
    sleep(20);
    CMessage("%StartStroking%");
    jeiu3f();
}
function jeiu3f()
{
    CMessage("%StrokeFaster%");
    CMessage("You think things can still go back to the way they were");
    CMessage("if you just keep your head down and play the submissive.");
    CMessage("Well, that\'s all good fun if we were playing around here");
    CMessage("but %Name% we can\'t do that unless you help me help you.");
    CMessage("Faster, and Eyes. Over. Here.");
    CMessage("When I give you a command, I expect you follow it to a T.");
    CMessage("You should know this by now");
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("but for some reason you don\'t.");
    }
    //CMessage("Take yourself to the edge.");
    //startEdging();
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
	edge("Take yourself to the edge.");
    CMessage("You\'re not doing yourself any favors by pretending to be submissive.");
    CMessage("You\'re going to have to prove to me that you\'re truly, and utterly broken.");
    CMessage("You\'re aching for this.");
    CMessage("I mean, holy shit, you are really turned on right now.");
    CMessage("%KneelForMe%");
    CMessage("See, %PetName%? This is submission.");
    CMessage("Mmm. That cock must be throbbing so hard.");
    CMessage("I bet you wish you could play with it right now.");
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("But you can\'t.");
        a328fhjsos();
        return;
    }
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("Mmmm fuck yes, let me hear you moan.");
    CMessage("Show me what I do to you, you little slut.");
    CMessage("Let me hear that fucking whimper of yours everytime you stroke.");
    CMessage("It\'s music to my ears.");
    CMessage("You love this. You love this so fucking much.");
    CMessage("I don\'t think you could say no if you wanted to!");
    CMessage("It just feels too fucking good.");
    //CMessage("%Edge%");
    //startEdging();
	edge();
    a328fhjsos();
}
function a328fhjsos()
{
    if(!getVar("av_fetish_pain", false))
    {
        a32r8fs();
        return;
    }
    CMessage("I didn\'t think so. You\'re mine, %Slave%.");
    CMessage("Get the spoon ready");
    CMessage(random("Hit ", "Spank ") + "your ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("I fucking own you, and for once I think you know it.");
    CMessage(random("Hit ", "Spank ") + "your ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("Be as loud as you want, honey.");
    CMessage("Just focus on submission");
    CMessage(random("Hit ", "Spank ") + "your ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("Louder.");
    CMessage(random("Hit ", "Spank ") + "your ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("LOUDER!");
    CMessage(random("Hit ", "Spank ") + "your ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("That\'s more like it.");
    a32r8fs();
}
function a32r8fs()
{
    CMessage("%SitDown%");
    return;
}