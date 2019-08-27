DMessage("AV_PunishRND: Beginning");
main();
DMessage("AV_PunishRND: End");
function main()
{
	if (getVar("AV_PunishRND_Punish03",false))
    {
		delVar("AV_PunishRND_Punish03");
        Punish03();
        return;
    }
	if (getVar("AV_PunishRND_RNDPunish",false))
    {
		delVar("AV_PunishRND_RNDPunish");
        RNDPunish();
        return;
    }
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
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me some clothespins. At least 10 of them.");
        sleep(20);
    }
    if(getVar("av_YesWasBad", false))
    {
        CMessage("Oh %PetName%, you forgot the correct answer...");
    }
    if(getVar("av_YesWasBad", false))
    {
        CMessage("You should only want to cum FOR ME...");
    }
    switch(random("Intro01", "Intro02", "Intro03", "Intro04", "Intro05"))
    {
        case "Intro01":
        Intro01();
        return;
        break;
        case "Intro02":
        Intro02();
        return;
        break;
        case "Intro03":
        Intro03();
        return;
        break;
        case "Intro04":
        Intro04();
        return;
        break;
        case "Intro05":
        Intro05();
        return;
        break;
    }
    Intro01();
}
function Intro01()
{
    CMessage("I want you to punish yourself and think about what you did wrong!");
    CMessage("You\'ll do it for me..");
    RNDPunish();
    return;
    Intro02();
}
function Intro02()
{
    CMessage("You have been a very bad little slave.");
    CMessage("You are obviously in dire need of correction.");
    RNDPunish();
    return;
    Intro03();
}
function Intro03()
{
    CMessage("I don\'t like boys who are not 100% devoted to me.");
    CMessage("We will begin by teaching your cock and balls just who they belong to.");
    RNDPunish();
    return;
    Intro04();
}
function Intro04()
{
    CMessage("You need to understand that you are here for my entertainment.");
    CMessage("Your one and only job is to amuse me.");
    RNDPunish();
    return;
    Intro05();
}
function Intro05()
{
    CMessage("It\'s time you learned that MY pleasure is more important than yours.");
    CMessage("What better way to demonstrate than by %Torturing% you completely.");
    RNDPunish();
    return;
    RNDPunish();
}
function RNDPunish()
{
    switch(random("Posit01", "Posit02", "Posit03"))
    {
        case "Posit01":
        Posit01();
        return;
        break;
        case "Posit02":
        Posit02();
        return;
        break;
        case "Posit03":
        Posit03();
        return;
        break;
    }
    Posit01();
}
function Posit01()
{
    CMessage("%KneelForMe%");
    Posit03();
    return;
    Posit02();
}
function Posit02()
{
    CMessage(random("Stand ", "Get ") + "up");
    Posit03();
    return;
    Posit03();
}
function Posit03()
{
    if (getVar("chastityOn", false))
    {
        switch(random("Punish01", "Punish02", "Punish03", "Punish04", "Punish05", "Punish08"))
        {
            case "Punish01":
            Punish01();
            return;
            break;
            case "Punish02":
            Punish02();
            return;
            break;
            case "Punish03":
            Punish03();
            return;
            break;
            case "Punish04":
            Punish04();
            return;
            break;
            case "Punish05":
            Punish05();
            return;
            break;
            case "Punish08":
            Punish08();
            return;
            break;
        }
    }else{
		//--Command:NotInChastity
		switch(random("Punish01", "Punish02", "Punish03", "Punish04", "Punish05", "Punish06", "Punish07", "Punish08"))
		{
			case "Punish01":
			Punish01();
			return;
			break;
			case "Punish02":
			Punish02();
			return;
			break;
			case "Punish03":
			Punish03();
			return;
			break;
			case "Punish04":
			Punish04();
			return;
			break;
			case "Punish05":
			Punish05();
			return;
			break;
			case "Punish06":
			Punish06();
			return;
			break;
			case "Punish07":
			Punish07();
			return;
			break;
			case "Punish08":
			Punish08();
			return;
			break;
		}
	}
    Punish01();
}
function Punish01()
{
    if(!getVar("AV_DommeMistress", false))
    {
        CMessage("Now smack yourself in the cock.");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(10);
		stopAudio();
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Now smack yourself in the cock.");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank15.mp3");
        sleep(10);
		stopAudio();
    }
    CMessage("Now smack yourself in the cock. Harder!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(10);
	stopAudio();
    CMessage("And think about the %Slave% you are and what you\'ll do for me.");
    CMessage("Do it again");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(10);
	stopAudio();
    if(!getVar("AV_DommeMistress", false))
    {
        CMessage("and again");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(10);
		stopAudio();
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("and again");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank15.mp3");
        sleep(10);
		stopAudio();
    }
    CMessage("because you deserve it and you know it.");
    CMessage("Next I want you to stand in the corner and squeeze your balls.");
    sleep(10);
    CMessage("Now make your balls hurt!");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("You deserve punishment for being such a loser.");
    }
    if(!getVar("AV_DommeMistress", false))
    {
        CMessage("You deserve punishment for fail.");
    }
    if(!getVar("AV_DommeMistress", false))
    {
        CMessage("Now I\'m going to have you spank your ass");
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Now I\'m going to have you spank your ass until it\'s red.");
    }
    CMessage("Get your spoon and bend over in your chair");
    sleep(10);
    CMessage("Follow the sound");
    if(!getVar("AV_DommeMistress", false))
    {
        CMessage("Now smack yourself in the ass.");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(10);
		stopAudio();
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Now smack yourself in the ass.");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank10.mp3");
        sleep(10);
		stopAudio();
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Again.");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank15.mp3");
        sleep(10);
		stopAudio();
    }
    CMessage("Punishing you over and over again.");
    CMessage("I despise you.");
    CMessage("I am going to destroy your manhood physically and verbally!");
    CMessage("%SitDown%");
    return;
    Punish02();
}
function Punish02()
{
    CMessage("%domFriend3Name% will take care of your punishment");
    addContact(4);
    SMessage("It is time to do as you are told", -1, 4);
    SMessage("I will make use of any part of you I please", -1, 4);
    SMessage("I will show you Who is in control.", -1, 4);
    SMessage("The only thing your balls are good for, is disciplining you", -1, 4);
    SMessage("Spank your %Balls% at the same rhythm of the sound", -1, 4);
    SMessage("NOW!!", -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(10);
	stopAudio();
    SMessage("Again", -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(10);
	stopAudio();
    SMessage("the only thing that worthless cock is good for is owning and controlling you....", -1, 4);
    SMessage("and I will " + "...own and control you.", -1, 4);
    SMessage("Spank your cock", -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(10);
	stopAudio();
    SMessage("Start putting those clothespins on your balls", -1, 4);
    sleep(10);
    SMessage("Keep going", -1, 4);
    sleep(10);
    SMessage("Just stop when you dont have more space ", -1, 4);
    sleep(10);
    SMessage("put your hands behind your " + random("back", "head"), -1, 4);
    SMessage("I will let %DomName% decide when you can stop", -1,4);
    removeContact(4);
    CMessage("You now %SubName%...");
    CMessage("The only reason I will allow you any pleasure at all");
    CMessage("is to force your weak will deeper and deeper into submission.");
    CMessage("Maybe I\'ll let you cum...");
    CMessage("Maybe I won\'t.");
    CMessage("I make the rules here.");
    sleep(10);
    CMessage("You can remove the clothespins now...");
    sleep(10);
    CMessage("%SitDown%");
    return;
    Punish03();
}
function Punish03()
{
    if(!getVar("AV_LikeAnal", false))
    {
        CMessage("I plan on putting that cock and balls through quite a work out.");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("I plan on putting that cock and ass through quite a work out.");
    }
    CMessage("I can do that. After all, it is my plaything");
    if(!getVar("AV_LikeAnal", false))
    {
        NoAnal5();
        return;
    }
    CMessage("Got get a lube");
    sleep(20);
    CMessage("it\'s time to change positions.");
    SMessage("%DomName% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Anal" + java.io.File.separator + "AllFour.mp3");
    CMessage("Get on your knees, doggy style.");
    CMessage("Yes, just like that..");
    CMessage("Just in the center, spread your legs wide apart so I can see that asshole of mine well.");
    CMessage("Reach between your legs, and touch that asshole  rub it gently for me.");
    CMessage("Take your finger in slowly, keep them inside you");
    CMessage("Stretch that asshole for me.");
    CMessage("You\'re my good little slut.");
    CMessage("Slowly at first, yes, slowly.");
    CMessage("Continue fingering yourself for me");
    CMessage("There are some stuff that you may not know about that position yet %PetName%");
    CMessage("but you\'ll find that your muscles are much less tense.");
    CMessage("Put your face on the chair, and use it to hold the position");
    //--Command:NotInChastity
	if(!getVar("chastityOn",false) ){
		CMessage("while you rub your cock with your other hand.");
	}
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Relax %PetName%, relax...");
    CMessage("I want to hear you moan.");
    CMessage("Moans are always welcomed.");
    CMessage("Yes... Yes...");
    //--Command:NotInChastity
	if(!getVar("chastityOn",false) ){
		CMessage("Stop touching your cock.");
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
	}
    if(!getVar("AV_DommeMistress", false))
    {
        EnoughAnal();
        return;
    }
    CMessage("Oh god that felt so good. your legs are weak");
    CMessage("I can see you shaking");
    CMessage("Just relax... Relax for me");
    CMessage("hands off  relax...");
    CMessage("That doggy style was a bit brutal wasn\'t it? %Lol%");
    CMessage("Rub that asshole gently for me %PetName%");
    CMessage("No  don\'t touch your cock");
    CMessage("You\'re gonna have to be my dirty little slut. %Lol%");
    CMessage("Continue, don't stop playing with that hole for me %PetName%... ");
    CMessage("I mean - slut %EmoteMoan%.");
    CMessage("keep rubbing that asshole.");
    CMessage("I love to see you like that %EmoteMoan%.");
    CMessage("Yes.. Insert that finger back in babe.");
    CMessage("You know what...");
    CMessage("%Stop%");
    EnoughAnal();
}
function EnoughAnal()
{
    CMessage("Go clean yourself");
    sleep(30);
    CMessage("%SitDown%");
    return;
    NoAnal5();
}
function NoAnal5()
{
    CMessage("Now I want you to put two pegs on each nipple");
    CMessage("Place the last 6 on your balls..");
    let answer0 = getInput("%Ready%?");
    while (!(answer0.isLike("yes")))
    {
        answer0 = getInput("A simple yes is all I need...");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
    }
    CMessage("Now I want you to rip them off one by one %Lol%");
    sleep(25);
    let answer1 = getInput("Done?");
    if (answer1.isLike("yes"))
    {
        CMessage("%Good%");
    }
    else
    {
        CMessage("%Good%");
    }
    if(!getVar("AV_DommeMistress", false))
    {
        NoMore7();
        return;
    }
    CMessage("Now place them back on");
    CMessage("2 on each nipple, 6 on the balls");
    sleep(25);
    let answer2 = getInput("%Ready%");
    while (!(answer2.isLike("yes")))
    {
        answer2 = getInput("A simple yes is all I need...");
    }
    if (answer2.isLike("yes"))
    {
        CMessage("%Good%");
    }
    CMessage("Now I want you to rip them off one by one %Lol%");
    sleep(25);
    let answer3 = getInput("Done?");
    while (!(answer3.isLike("yes")))
    {
        answer3 = getInput("A simple yes is all I need...");
    }
    if (answer3.isLike("yes"))
    {
        CMessage("%Good%");
    }
    NoMore7();
}
function NoMore7()
{
    CMessage("That should teach you! %EmoteHappy%");
    CMessage("%SitDown%");
    return;
    Punish04();
}
function Punish04()
{
    CMessage("I want " + randomInt(2, 4) + "clothespins on your balls");
    CMessage("And 2 on your nipples");
    sleep(20);
    CMessage("put your hands behind your " + random("back", "head"));
    if(getVar("av_fetish_rough", false))
    {
        CMessage("and watch me tease and humiliation you");
    }
    if(!getVar("av_fetish_rough", false))
    {
        CMessage("and watch me tease you");
    }
    CMessage("Just to make your predicament worse,");
    CMessage("I will have all the pleasure I like.");
    CMessage("My orgasms are more important than yours.");
    CMessage("You\'ll go without nothing while I enjoy my vibrator.");
    CMessage("I know your cock will be aching");
    CMessage("as you witness the throes of my geniune and beautiful orgasm.");
    CMessage("True tease and denial.");
    CMessage("I get it all while you get nothing");
    let answer0 = getInput("Are you still hard?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("In this case, start slaping your flacid cock");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank15.mp3");
        sleep(10);
		stopAudio();
    }
    CMessage("%SitDown% and remove the clothespins now...");
    sleep(10);
    return;
    Punish05();
}
function Punish05()
{
    CMessage("Keep your legs together, with your thighs touching.");
    CMessage("Pull your balls forward, so they\'re resting just in front of your thighs.");
    sleep(10);
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("If you do this right, you should be able to smack them pretty hard without them having anywhere to hide.");
    }
    CMessage("Grab your spoon. This is going to hurt.");
    if(!getVar("AV_DommeMistress", false))
    {
        CMessage("Now " + random("slap ", "smack ") + "your %Balls%.");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(10);
		stopAudio();
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Now " + random("slap ", "smack ") + "your %Balls%.");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank15.mp3");
        sleep(10);
		stopAudio();
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Harder!");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(10);
		stopAudio();
    }
    CMessage("Don\'t let up part of the way through just because it hurts.");
    CMessage("Those fucking balls belong to me!");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Every last hit better be hard enough!");
    }
    if(!getVar("AV_DommeMistress", false))
    {
        CMessage(random("slap ", "smack ") + "your %Balls%.");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Belle05*.mp3");
        sleep(10);
		stopAudio();
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage(random("slap ", "smack ") + "your %Balls%.");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Belle10*.mp3");
        sleep(15);
    }
    CMessage("Get those nuts nice and tenderized");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage(random("slap ", "smack ") + "your %Balls%.");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Belle05*.mp3");
        sleep(10);
		stopAudio();
    }
    CMessage("I don\'t want to hear any complaining about the state of that sack.");
    CMessage("If I were with you, I\'d make you beg for me to kick harder, beg to have yourself destroyed.");
    CMessage("%SitDown%");
    return;
    Punish06();
}
function Punish06()
{
    if(getVar("pvMadeKeyholder", false))
    {
        PutChastity();
        return;
    }
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_ChastityTalk.js");
    return;
    PutChastity();
}
function PutChastity()
{
    switch(random("Chast01", "Chast02"))
    {
        case "Chast01":
        Chast01();
        return;
        break;
        case "Chast02":
        Chast02();
        return;
        break;
    }
    Chast01();
}
function Chast01()
{
    CMessage("Now, %Name%...");
    CMessage(random("There is something you need to do ", "I want you to do something ") + "for me");
    CMessage("Go get your chastity cage");
    setTempVar("pvNotWantChastityOn", true);
    //--Command:InterruptsOff
    CMessage("%PutChastity%");
    CMessage(random("You will wear it ", "It stays on ") + "until I " + random("decide ", "say ") + "otherwise, %PetName%");
    CMessage("No more %JerkingOff% for you");
    CMessage("You do that way too much anyway...");
    let answer0 = getInput("Are you ready?");
    while (true)
    {
		if (answer0.isLike("yes", "ready", "done", "finished"))
		{
			CMessage("Good");
			break;
		}
		else if (answer0.isLike("no"))
		{
			answer0 = getInput("Let me know when you are ready, %PetName%");
		}else {
			answer0 = getInput("%YesOrNo%");
		}
	}
    CMessage("Don\'t you feel much better when you\'re caged? %Grin%");
    //--Command:ChastityOn
	setVar("chastityOn",true);
    delVar("pvNotWantChastityOn");
    //--Command:InterruptsOn
    return;
    Chast02();
}
function Chast02()
{
    CMessage("Let your %Cock% go soft now, %PetName%");
    setTempVar("pvLink31GoSoft", true);
    CMessage("I don\'t care how you do it");
    CMessage("As long as you do it right now");
    sleep(8);
    CMessage("Slap it, pinch it, put cold water on it...");
    CMessage("That\'s probably the best way, right?");
    CMessage("Dunking your %Balls% in ice water, sounds fun %Laugh%");
    let answer0 = getInput("Is my %Cock% soft and ready for its cage?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good");
        soft_now();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Do whatever it takes, %Name%");
    }
    CMessage("And don\'t tell me you can\'t do it");
    CMessage("I don\'t care");
    CMessage("If I want it, you <i>will</i> do it ");
    CMessage("Do some summersaults, run up and down the stairs");
    CMessage("Whatever it takes, get it soft and limp");
    let answer1 = getInput("Ready?");
    while (true)
    {      
		if (answer1.isLike("yes", "ready", "done", "soft", "limp"))
		{
			CMessage("Okay");
			break;
		}
		else if (answer1.isLike("no"))
		{
			answer1 = getInput("Let me know when you are ready");
		}else {
			answer1 = getInput("Is your %Cock% soft?");
		}
	}
    CMessage("I know it\'s not always easy to do, %SubName%");
    soft_now();
}
function soft_now()
{
    CMessage("It\'s kind of impressive that you could get it down at all...");
    CMessage("Now...");
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_ChastityOn.js");
    CMessage("Let\'s see how much frustration we can build up in those %Balls% %Grin%");
    //--Command:ChastityOn
    return;
    
    Punish07();
}
function Punish07()
{
    run("Custom" + java.io.File.separator + "CRCBTBallsHarsh" + java.io.File.separator + "*.js");
    CMessage("I have to show you that I can do that from time to time");
    CMessage("Otherwise you might start to think you\'re here for your own please and we can\'t have that, can we? %Laugh%");
    return;
    
    Punish08();
}
function Punish08()
{
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("You deserve punishment for being such a loser.");
    }
    if(!getVar("AV_DommeMistress", false))
    {
        CMessage("You deserve punishment for fail.");
    }
    if(!getVar("AV_DommeMistress", false))
    {
        CMessage("Now I\'m going to have you spank your ass");
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Now I\'m going to have you spank your ass until it\'s red.");
    }
    CMessage("Get your spoon and bend over in your chair");
    sleep(10);
    CMessage("Follow the sound of my slaps...");
    CMessage("Because I will have pleasure on your pain");
    CMessage("Now smack yourself in the ass.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "DSpank" + java.io.File.separator + "*.mp3");
    sleep(70);
	stopAudio();
    CMessage("I am going to destroy your manhood physically and verbally!");
    CMessage("%SitDown%");
    return;
}