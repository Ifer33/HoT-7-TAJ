DMessage("AV_ModGeneral36: start");
main();
DMessage("AV_ModGeneral36: end");
function main()
{
    if(getVar("AV_ModGeneral36_NotFirstTime", false))
    {
        AV_ModGeneral36_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral36", 0);
    setVar("AV_ModGeneral36_NotFirstTime", true);
    AV_ModGeneral36_NotFirstTime();
}
function AV_ModGeneral36_NotFirstTime()
{
    if (getVar("AV_ModGeneral36", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral36", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral36", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral36", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral36", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral36", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral36", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral36", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral36", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral36", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral36", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral36", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral36", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral36", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral36", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral36", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral36", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral36", getVar("AV_ModGeneral36", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral36", getVar("AV_ModGeneral36", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral36", getVar("AV_ModGeneral36", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral36", getVar("AV_ModGeneral36", 0) + 1000);
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
    setVar("AV_ModGeneral36", 0);
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
    let answer0 = getInput("How do you feel? Are you okay?", 5);
    if (answer0.isTimeout())
    {
        a25rreg();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
		if (answer0.isTimeout())
		{
			a25rreg();
			return;
		}else{
			answer0 = getInput("%YesorNo%");
		}
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Just relax...");
    }
    a25rreg();
}
function a25rreg()
{
    CMessage("That\'s good.");
    CMessage("Now just relax and listen to me");
    CMessage("I want for you to feel safe and reassured.");
    CMessage("You are safe here with me.");
    CMessage("I know a %PetName% have so little self-control.");
    CMessage("I\'m very pleased with you.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("I know you spent a lot of time with an erection for me.");
    CMessage("Yes %Name%. Thats very good. I like that you\'re stiff for me.");
    CMessage("Thats very good.");
    CMessage("You\'re a good boy.");
    CMessage("I liked that you got so erect so quickly when I praised you.");
    CMessage("It shows that our sessions together are working.");
    CMessage("You\'re allowing me to plant triggers in your subconscious.");
    //CMessage("%Edge%");
    //startEdging();
    holdEdge();
    CMessage("Yes %Name% - there we go");
    CMessage("look at that");
    CMessage("you\'ve got a nice big erection");
    if(!getVar("av_fetish_pain", false))
    {
        a3fw5yh();
        return;
    }
    CMessage("But perhaps you aren\'t a good boy.");
    CMessage("Perhaps you\'ve been naughty and you need a little spanking.");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("Because I\'m your owner I know best.");
    CMessage("And I think you need a spanking.");
    CMessage("Bend over and get the spoon ready...");
    CMessage("Let\'s spank that ass...");
    CMessage("Now smack yourself in the ass.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "DSpank" + java.io.File.separator + "*.mp3");
    sleep(70);
    CMessage("I control you %Name%. Your Domme is in control.");
    CMessage("Its for your own good %PetName%.");
    CMessage("You\'ll thank me afterwards.");
    CMessage("I think it would be so good for you to take some extra spanking");
    CMessage(random("Hit ", "Spank ") + "your ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("%GoodBoy%");
    let answer0 = getInput("Now. Does your bum hurt?", 5);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
		if (answer0.isTimeout())
		{
			mgh76y();
			return;
		}else{
			answer0 = getInput("%YesorNo%");
		}
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Thats good %Name%. Very good.");
        increaseAnger(-3)
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You\'re really a painslut %Lol%");
    }
    mgh76y();
}
function mgh76y()
{
    CMessage("The pain means you\'re a good boy again.");
    a3fw5yh();
}
function a3fw5yh()
{
    CMessage("But you aren\'t done yet.");
    CMessage("%KneelForMe%");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Do you enjoy the sensation of loss of control?");
    let answer0 = getInput("Would you like to lose some more control?");
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("How did that feel honey?");
    let answer1 = getInput("Did you feel a little ashamed and embarrassed doing that?", 5);
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
		if (answer1.isTimeout())
		{
			bfd7645();
			return;
		}else {
			answer1 = getInput("%YesorNo%");
		}
    }
    if (answer1.isLike("yes"))
    {
        CMessage("Thats so good %PetName%.");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Hmm...");
    }
    bfd7645();
}
function bfd7645()
{
    //CMessage("%Edge%");
    //startEdging();
    //holdEdge();
    DoEdges(1, 3, 100);
    if(!getVar("AV_LikeAnal", false))
    {
        EndNoAnal();
        return;
    }
    if (randomInteger(1, 100) <= 60)
    {
        EndNoAnal();
        return;
    }
    CMessage("Go get your dildo %PetName%.");
    sleep(15);
    let answer0 = getInput("Are you ready?");
    while (!(answer0.isLike("yes") || answer0.isLike("ready") || answer0.isLike("done")))
    {
		if (answer0.isLike("no"))
		{
			answer0 = getInput("So, go get it");
			//--Command:LoopAnswer
		}else{
			answer0 = getInput("%YesorNo% %SubName%?");
		}
    }
    if (answer0.isLike("yes", "ready", "done"))
    {
        CMessage("%Good%");
    }
    CMessage("%KneelForMe%");
    CMessage("lubricate it.");
    CMessage("And your going to want to kneel with your legs further assist.");
    CMessage("That\'s right %Name% I want for you to spread you legs for me.");
    sleep(12);
    CMessage("Do you feel vunerable baby?");
    CMessage("Imagine what people would think if they could see you now.");
    CMessage("Naked, and spreading you legs for your lover to penetrate your ass.");
    CMessage("They\'d probably think you were a weak, submissive boy.");
    CMessage("And they\'re right %PetName% - you are.");
    CMessage("But that\'s good honey.");
    CMessage("It\'s very good that you can let yourself be weak for me.");
    CMessage("You don\'t have to pretend with me.");
    CMessage("I know what you want. And it\'s okay.");
    CMessage("drag it gently along your perineum until you reach your anus.");
    CMessage("You\'re scared - but also aroused");
    CMessage("by the idea of being penetrated by me.");
    CMessage("Its making your so hard.");
    CMessage("gently start pushing it into you.");
    CMessage("It\'s okay %PetName%");
    sleep(15);
    let answer1 = getInput("Do you like being penetrated by me?",5);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    let answer2 = getInput("Does the idea of my cock in your ass make you nice and vunerable and weak?",5);
    if (answer2.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    CMessage("I almost have you where I want you to go %SubName%.");
    CMessage("Now imagine instead of just a vibrator I\'m wearing a strapon cock.");
    CMessage("I\'m not going to hurt you %PetName%.");
    CMessage("But I\'m in charge now. And you\'re going to be gently,");
    CMessage("tenderly,");
    CMessage("fucked,");
    CMessage("to completion.");
    CMessage("Go downwards... so that you\'re in doggie-position.");
    CMessage("It exposes you to me.");
    CMessage("gently tug on your balls for a moment.");
    CMessage("They feel lovely in your hand.");
    CMessage("There\'s no need to be scared.");
    CMessage("Now I\'m behind you honey, and I\'m pushing my cock into your virginal little anus.");
    CMessage("Its okay %Name%. Just relax...");
    CMessage("Shhhhhh %SubName%. Just relax.");
    CMessage("There you go. There you go.");
    CMessage("A little more " + "...there");
    CMessage("You\'re taking the whole thing %PetName%");
    CMessage("Your ass looks so sexy stretched around my cock.");
    CMessage("Its such a turn-on for me");
    CMessage("How do you feel - I hope you feel proud of what you\'ve let me do to you");
    CMessage("%StartStroking%");
    CMessage("I\'m not going to peg you just yet.");
    CMessage("I\'m going to give you a reacharound and just hold you.");
    CMessage("I control you so completely right now little-boy.");
    CMessage("This is so good for you.");
    CMessage("Okay honey. I\'m going to peg you now.");
    CMessage("Just relax and let my cock stimulate your prostate.");
    CMessage("There.");
    CMessage("Does it feel good knowing you\'ve yielded control of your anus.");
    CMessage("Of course it does.");
    CMessage("%stopstroking%", 0);
    CMessage("How do you feel? Are you ready for me to go a little harder?");
    CMessage("I want to go harder honey.");
    CMessage("I want to get myself off");
    CMessage("pump you harder");
    CMessage("Uh,uh, uh uh ");
    CMessage("as I fuck you honey I want you to feel your cock bobbing between your legs.");
    CMessage("I want for you to concentrate on how pointless it is.");
    CMessage("It isn\'t making make anybody feel good");
    CMessage("not even you.");
    CMessage("What is stimulating your right now is my cock in your ass rubbing your prostrate");
    CMessage("I hope that makes you feel emasculated %PetName%.");
    CMessage("Weak and small and good.");
    CMessage("Oh fuck %Name% I\'m close to coming just by seeing you like that");
    CMessage("You\'re so well-behaved.");
    CMessage("...oh...god. I\'m going to cum %SubName%.");
    CMessage("My big cock is making me cum");
    CMessage("You\'re such a good weak boy that you don\'t get to cum in anybody.");
    CMessage("good boy");
    CMessage("I am really close");
    CMessage("Yes - thats it honey - I am coming");
    CMessage("Good boy");
    CMessage("thats it");
    CMessage("Goooooood boy");
    CMessage("You can go clean yourself");
    sleep(20);
    EndNoAnal();
}
function EndNoAnal()
{
    CMessage("%SitDown%");
    CMessage("For now let\'s just sit for a second");
    return;
    
    
    Modulo2();
}
function Modulo2()
{
    if(!isStrokingAll() ){
		//CMessage("%StartStroking%");
		setStrokingNoTaunt();
	}
    addContact(2);
    CMessage("Hey %domFriend1Name%");
    SMessage("Hey %DomName%, can I use %SubName% for a while?", -1, 2);
    CMessage("Sure, I will be back soon");
    removeContact(1);
    CMessage("Hey %SubName%");
    CMessage("Your %Balls% are filled with cum");
    CMessage("They\'re becoming more bloated and blue");
    if(getVar("AV_Beta", false))
    {
        CMessage("%DomName% said your training as a beta male continues");
    }
    if(getVar("AV_Beta", false))
    {
        CMessage("she\'s solidifying your place as a beta male.");
    }
    CMessage("I am OK with that.");
    CMessage("Oh...wait...");
    if (randomInteger(1, 100) <= 50)
    {
        NoEdgeC1();
        return;
    }
    //CMessage("%Edge%");
    //startEdging();
	edge("%Edge%",-1,2);
    NoEdgeC1();
}
function NoEdgeC1()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage("Sorry about that...I forgot you was %Stroking% yet %Lol%");
    CMessage("I can try to convince you to be more dominant, but it\'s just no use is it %Laugh%");
    CMessage("You truly are a bottom bitch");
    CMessage("You\'ll never in your life take control and fuck a girl the way she deserves");
    if(getVar("AV_Beta", false))
    {
		CMessage("But you don't even <i>want</i> to be an Alpha male");
        CMessage("No, you\'ve beta all the way though");
    }
    if(getVar("AV_Beta", false))
    {
        CMessage("So, let\'s see if a beta can follow instructions");
    }
    if(!getVar("AV_Beta", false))
    {
        CMessage("So, let\'s see if you can follow instructions");
    }
    CMessage("I will count for you, and you will stroke for every number I said");
    CMessage("keep the pace...");
    CMessage("Go...");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Glitter1" + java.io.File.separator + "Count01.mp3");
    sleep(17);
    CMessage("Stop");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Glitter1" + java.io.File.separator + "GoodBoy*.mp3");
    CMessage("Let\'s try some edges, shall we?");
    DoEdges(2, 4, 100,-1,2);
    CMessage("Don\'t worry, I\'ll let you stroke again in a minute");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("But I feel like %DomName% want me to busting your %Balls% a little bit first %Grin%");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Get the spoon ready...");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G1Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("There\'s no better way to deepen the ache in your %Balls% than that %EmoteHappy%");
    }
    addContact(1);
    removeContact(2);
    return;
    
    Modulo3();
}
function Modulo3()
{
    addContact(4);
    CMessage("Hey %domFriend3Name%");
    SMessage("Hey %SubName%, can I use %SubName% for a while?", -1, 4);
    CMessage("Sure, I will be back soon");
    removeContact(1);
    CMessage("%SubName%");
    if(getVar("AV_RubberCaning", false))
    {
        AV_RubberCaning();
        return;
    }
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage("I wanna hurt you bad");
    if(!getVar("av_fetish_pain", false))
    {
        CMessage("Too bad you\'re a sissy");
        NoPainFromC3();
        return;
    }
    CMessage("And it will be something you probably haven\'t done before");
    CMessage("If you have you will be dreading in a moment!");
    setVar("AV_RubberCaning", true);
    CMessage("Fetch a rubberband big enough to fit arround your thigh without any problems");
    sleep(10);
    let answer0 = getInput("Got it?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
        Punishment();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("No?");
    }
    let answer1 = getInput("You do have a big rubberband dont you?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("Good go fetch it then..");
        Punishment();
        return;
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Hmm");
        HaveNoRubber();
        return;
    }
    HaveNoRubber();
}
function HaveNoRubber()
{
    CMessage("No rubberband huh...");
    CMessage("Well then i\'m gonna have to do something else!");
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_PunishRND.js");
    return;
    Punishment();
}
function Punishment()
{
    CMessage("Now..");
    Explain();
    return;
    Explain();
}
function Explain()
{
    CMessage("I want you pull is up arround your right thigh");
    CMessage("All the way till its placed arround your right asscheek");
    CMessage("When I tell you to..");
    CMessage("I want you to pull it out as far as you can");
    CMessage("Aim for you asscheek");
    CMessage("And when I say release I want you to release it..");
    let answer0 = getInput("Understood?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
        PunishmentR();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Imbecile..");
        Explain();
        return;
    }
    PunishmentR();
}
function PunishmentR()
{
    CMessage("Pull it out, wait for my command");
    sleep(randomInt(3, 6));
    CMessage("Release!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
	sleep(5);
    if (randomInteger(1, 100) <= 70)
    {
        PunishmentR();
        return;
    }
    DoEdges(1, 3, 100,-1,4);
    CMessage("Now I want you to continue with your left asscheek");
    CMessage("Pull the rubber all the way up till its above you left asscheek");
    sleep(10);
    PunishmentL();
}
function PunishmentL()
{
    CMessage("Pull it out, wait for my command");
    sleep(randomInt(3, 6));
    CMessage("Release!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
	sleep(5);
    if (randomInteger(1, 100) <= 60)
    {
        PunishmentL();
        return;
    }
    CMessage("%Good%");
    CMessage("I guess there\'s no harm in interrupting those rubberband action for some ballbusting...");
    CMessage("Well, there is harm in in for you, obviously %Lol%");
    CMessage("Get your spoon ready");
    SMessage(random("Hit ", "Spank ") + "your balls", -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("I hope that teached you!");
    EndC3Puni();
    return;
    AV_RubberCaning();
}
function AV_RubberCaning()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage("Go fetch a large rubberband");
    CMessage("Large enough to fit arround your thigh");
    sleep(10);
    let answer0 = getInput("Got it?");
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
    }
    else
    {
        CMessage("%Good%");
    }
    CMessage("Fit it arround your right asscheek");
    sleep(25);
    PunishmentR();
    return;
    
    NoPainFromC3();
}
function NoPainFromC3()
{
    CMessage("So, let\'s make you ache in other way");
    DoEdges(3, 4, 100,-1,4);
    EndC3Puni();
    return;
    
    EndC3Puni();
}
function EndC3Puni()
{
    addContact(1);
    removeContact(4);
    return;
    
    Modulo4();
}
function Modulo4()
{
    addContact(3);
    CMessage("Hey %domFriend2Name%");
    SMessage("Hey %SubName%, can I use %SubName% for a while?", -1, 3);
    CMessage("Sure, I will be back soon");
    removeContact(1);
    CMessage("It must hurt to know that you could never please a women properly");
    CMessage("Sure you could still use your fingers and mouth to give her an orgasm");
    CMessage("You can't even <i>think</i> about a pretty girl without the risk of creaming your pants on the spot");
    CMessage("And so I guess that\'s how a guy like you ends up as a stroke puppet for someone like %DomName%... %Smile%");
    CMessage("I guess you truly are a submissive then...");
    CMessage("You\'re simply not cut out to be a dominant");
    CMessage("Your place in the world is to be a doormat, an object to be used by dominant women");
    CMessage("If you\'re lucky, you\'ll become someone\'s fuck toy one day");
    CMessage("For now, you\'ll be my jerk puppet and nothing more");
    DoEdges(1, 3, 100,-1,3);
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Let\'s " + random("pay some attention to ", "have some fun with ", "deal some pain to ") + "those %Balls%");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Get your spoon ready");
    }
    if(getVar("av_fetish_pain", false))
    {
        SMessage(random("Hit ", "Spank ") + "your balls", -1, 3);
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Look at how blue they\'re getting... %Lol%");
    }
    //CMessage("%StartStroking%");
	setStrokingNoTaunt(null,-1,3);
    CMessage("Don\'t worry, %SubName%");
    CMessage("I know you are and will always be a submissive boy");
    CMessage("I sometimes think about what it would be like if you were different");
    CMessage("But I know it\'s never going to happen");
    CMessage("You are what you are after all %Smile%");
    DoEdges(1, 3, 100,-1,3);
    addContact(1);
    removeContact(3);
    return;
}