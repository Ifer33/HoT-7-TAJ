DMessage("AV_ModGeneral25: start");
main();
DMessage("AV_ModGeneral25: end");
function main()
{
    if(getVar("AV_ModGeneral25_NotFirstTime", false))
    {
        AV_ModGeneral25_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral25", 0);
    setVar("AV_ModGeneral25_NotFirstTime", true);
    AV_ModGeneral25_NotFirstTime();
}
function AV_ModGeneral25_NotFirstTime()
{
    if (getVar("AV_ModGeneral25", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral25", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral25", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral25", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral25", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral25", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral25", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral25", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral25", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral25", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral25", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral25", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral25", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral25", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral25", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral25", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral25", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral25", getVar("AV_ModGeneral25", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral25", getVar("AV_ModGeneral25", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral25", getVar("AV_ModGeneral25", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral25", getVar("AV_ModGeneral25", 0) + 1000);
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
    setVar("AV_ModGeneral25", 0);
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
    CMessage("%AV_Break1%");
    CMessage("%AV_Luxury%");
    CMessage("%AV_Break2%");
    addContact(3);
    CMessage("Hey %domFriend2Name%");
    SMessage("Hi %EmoteLaugh%", -1, 3);
    CMessage("I need to take care of something here, but I will keep a eye in the chat");
    SMessage("%AV_Break4%", -1, 3);
    removeContact(1);
    CMessage("Now, get up.");
    CMessage("Shut the fuck up. I don\'t want to hear a word out of your mouth unless I ask.");
    CMessage("Now. You clearly need a reminder of who is in charge here.");
    CMessage("Look at you, finally listening.");
    CMessage("Later, when I\'m tired of abusing you, you\'ll leave here sore and frustrated and desperate.");
    CMessage("Ready to begin?");
    CMessage("I\'m going to get you hard first.");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("You\'re already there, aren\'t you?");
    CMessage("Pathetic. Look at it, twitching and throbbing already.");
    CMessage("I bet if you went a little faster, you\'d cum all over yourself.");
    CMessage("So I'll just stop.");
    CMessage("%stopstroking%", 0);
	stopStroking();
    CMessage("What\'s that? Shut your mouth, when I want you to beg, I\'ll tell you to beg.");
    CMessage("You want your hand back on this dick, don\'t you?");
    CMessage("Well, how about instead you slap it?");
    CMessage("Or better yet, you slap those balls of yours?");
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("Oh, that hurts, doesn\'t it?");
    CMessage("A few more, I think.");
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("What\'s that? Is your little cock soft already?");
    CMessage("You\'re my bitch now.");
    edge();
    let answer0 = getInput("Don\'t you like having your cock owned?",10);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        iLoveBeingControlledResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("I think you should tell me how much you love me controlling your cock.");
    CMessage("No? Well, that\'s too bad.");
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("That\'s what bad pets get, they get punished.");
    let answer1 = getInput("Now, you don\'t want to be punished, do you?",10);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("I bet you wish I was in control of you everyday!");
    CMessage("Telling you what to do at my mercy, having you beg me for release.");
    CMessage("Craving to my every need.");
    CMessage("%KneelForMe%");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("I bet you want to edge so bad but can\'t");
    CMessage("Stroke your hard cock some more");
    CMessage("Mmmmm so fucking hot seeing you stroking that hard cock for me.");
    DoEdges(2, 3, 0);
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Wow...You do obey like a good little slut...");
    }
    CMessage("Bend over for me and give each ass cheek 25 spankings...");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    sleep(20);
    if(getVar("av_fetish_pegging", false) && getVar("AV_LikeAnal", false))
    {
        CMessage("Mmmf...Wish I was there to grab that tight ass of yours and pull it tight against my big strap " + "...Maybe another day, hehe.");
    }
    CMessage("Get on all fours again for me...");
    edge();
    CMessage("Get on your knees and lean way back...");
    CMessage("Take your dominate hand and get ready to smack your balls for me!");
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("I didn\'t say this was going to be about all pleasure!");
    CMessage("Very good pet!");
    CMessage("Awww did that hurt?");
    CMessage("%SitDown%");
    SMessage("He\'s all yours %DomName%", -1, 3);
    addContact(1);
    CMessage("%EmoteSmile%");
    removeContact(3);
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
    CMessage("%AV_Break1%");
    CMessage("%AV_Luxury%");
    CMessage("%AV_Break2%");
    addContact(4);
    CMessage("Hey %domFriend3Name%");
    SMessage("Hi %EmoteLaugh%", -1, 4);
    CMessage("%AV_Break3%");
    SMessage("%AV_Break4%", -1, 4);
    removeContact(1);
    CMessage("Such a horny little boy you are today.");
    CMessage("Now we are going to see just how submissive you want to become.");
    CMessage("Hmmm...You know, I think you should go grab some toothpaste...");
    CMessage("Seeing you all frustrated gave me an idea!");
    sleep(15);
    let answer0 = getInput("Did you grab it?");
    while (!(answer0.isLike("yes") ))
    {
		if (answer0.isLike("no"))
		{
			answer0 = getInput("So go get it");
			//--Command:LoopAnswer
		}else{
			answer0 = getInput("%YesorNo% %SubName%?");
		}
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
    }
    CMessage("Now take some and rub it on your nipples for me, hopefully it gives you a little tingly sensation.");
    sleep(20);
    CMessage("Very good!");
    //--Command:NotoFlag(AV_LikeAnal)
	if(!getVar("AV_LikeAnal",false) ){
		rev98hd();
		return;
	}
    CMessage("Now take a little and rub around your ass hole for me, %Lol%!");
    sleep(20);
    CMessage("Now I want you to get on all fours but with your face on the ground.");
    CMessage("Keep your ass pushed high in the air!");
    CMessage("Ohhhhh I bet that felt good having the cool air hit your nice tight hole!");
    sleep(15);
    CMessage("You have made Goddess very very horny...");
    rev98hd();
}
function rev98hd()
{
    let answer0 = getInput("How many days do you feel you could go without cumming for %DomName%???", 15);
    if (answer0.isTimeout())
    {
        AV_jy5s5();
        return;
    }
    if (answer0.isLike("1", "one"))
    {
        CMessage("You may be in complete torment!");
    }
    else if (answer0.isLike("2", "two"))
    {
        CMessage("Too bad you aren\'t the one in control of those orgasms!");
    }
    else if (answer0.isLike("3"))
    {
        CMessage("Too bad you aren\'t the one in control of those orgasms!");
    }
    else if (answer0.isLike("4", "four", "5", "five"))
    {
        CMessage("Awww really? You could go almost a week? Hmmm....");
    }
    else if (answer0.isLike("6", "7", "week", "weeks", "months"))
    {
        CMessage("Awww really? You could go that many time? Hmmm....");
    }
    else
    {
        CMessage("You may be in complete torment!");
    }
    AV_jy5s5();
}
function AV_jy5s5()
{
    CMessage("%KneelForMe%");
    sleep(10);
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("Stroke it at a good pace until you get close to an edge...");
    CMessage("Beg me to allow you to edge in front of me...");
    CMessage("I SAID BEG BOY!");
    DoEdges(1, 3, 0);
    CMessage("%GoodBoy%");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("Grab the spoon and get on all fours!");
    CMessage(random("Spank ", "Hit ") + "your right ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("Aww did that hurt?");
    CMessage("Too bad slut don\'t complain to Goddess.");
    CMessage(random("Spank ", "Hit ") + "your left ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    DoEdges(2, 3, 0);
    CMessage("Grab your clothes pins, I hope you have at least 10.");
    CMessage("Put 2 on each breast for me! Mmmmmmmm.");
    sleep(20);
    CMessage("Now two on each side of your %Balls%....");
    sleep(20);
    CMessage("Mmmmmmmm. You are making Goddess horny!");
    CMessage("Beg me to let you stroke your cock some more...Beg boy!");
    CMessage("Beg more, you need to crave serving me...");
    DoEdges(2, 3, 0);
    CMessage("Make that cock leak pre-cum.");
    CMessage("%KneelForMe%");
    let answer0 = getInput("Do you want to remove the clothes pins now boy?", 5);
    if (answer0.isTimeout())
    {
        AV_4grag6jf();
        return;
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Hehe, well I want you too...");
    }
    else
    {
        CMessage("Hehe, well I want you too...");
    }
    AV_4grag6jf();
}
function AV_4grag6jf()
{
    CMessage("You will..");
    CMessage("One by one but not so fast...");
    CMessage("Grab the wooden spoon ...");
    CMessage("I want 10 smacks hard right above your cock...Make it sting.");
    CMessage("Go");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("Now we will remove the clothspins");
    CMessage("You will give me an edge between each one until you are finished removing all of them.");
    DoEdges(8, 8, 0);
    CMessage("All done slut?");
    CMessage("Mmmm look at those pinch marks, makes Goddess very happy.");
    CMessage("%SitDown%");
    SMessage("He\'s all yours %DomName%", -1, 4);
    addContact(1);
    CMessage("%EmoteSmile%");
    removeContact(4);
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
    CMessage("I literally have broken you down so much I have you wrapped around my little finger.");
    CMessage("I love playing games with you, fucking with your head.");
    CMessage("It really does bring me so much joy.");
    CMessage("Teasing and denying and draining in every way possible.");
    CMessage("Now we will be playing a rather cruel game I devised.");
    CMessage("Can you resist the game? Probably NOT.");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("I tease you into a horny oblivion your %Cock% thinks he are in heaven.");
    CMessage("Well you are whenever I am on your PC screen.");
    CMessage("Play my game because you should, because I deserve it.");
    CMessage("Nothing more or nothing less.");
    CMessage("I will drain you dry.");
    CMessage("I love to tease and play games with you.");
    edge();
    CMessage("The toss of a coin will decide your fate, will you get to enjoy the pleasure of stroking your cock?");
    CMessage("Or will you have to torture your most vulnerable and sensitive male parts for me?");
    CMessage("We will be doing a series of coin flips so the most likely outcome is that you will be alternating between sessions of pain and pleasure.");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("Will you get lucky and get to stroke or will you have to suffer for me and endure the cruel punishments I have devised for your cock and balls?");
    CMessage("If the coin comes up heads and you get to stroke, you must edge for me");
    CMessage("Tail will be punishment time.");
    CMessage("Let\'s begin...");
    if (randomInteger(1, 100) <= 50)
    {
        xpain1();
        return;
    }
    CMessage("Head!!");
    edge();
    xround2();
    return;
    xpain1();
}
function xpain1()
{
    CMessage("Tail!!");
    CMessage("%PunishGame%");
    xround2();
}
function xround2()
{
    CMessage("Round 2...");
    if (randomInteger(1, 100) <= 50)
    {
        xpain2();
        return;
    }
    CMessage("Head!!");
    edge();
    xround3();
    return;
    xpain2();
}
function xpain2()
{
    CMessage("Tail!!");
    CMessage("%PunishGame%");
    xround3();
}
function xround3()
{
    CMessage("By now you are probably desperate for release");
    CMessage("hoping that I allow you to climax soon");
    CMessage("but don\'t think that I\'m going to let you have it that easy.");
    CMessage("As you already know you are my toy, my plaything");
    CMessage("Round 3...");
    if (randomInteger(1, 100) <= 50)
    {
        xpain3();
        return;
    }
    CMessage("Head!!");
    edge();
    xround4();
    return;
    xpain3();
}
function xpain3()
{
    CMessage("Tail!!");
    CMessage("%PunishGame%");
    xround4();
}
function xround4()
{
    CMessage("It is a mystery, the coin decides.");
    CMessage("This is a fun game of suspense as you never know what each round will have in store for you.");
    CMessage("Round 4...");
    if (randomInteger(1, 100) <= 50)
    {
        xpain4();
        return;
    }
    CMessage("Head!!");
    edge();
    xround5();
    return;
    xpain4();
}
function xpain4()
{
    CMessage("Tail!!");
    CMessage("%PunishGame%");
    xround5();
}
function xround5()
{
    CMessage("Round 5...");
    if (randomInteger(1, 100) <= 50)
    {
        xpain5();
        return;
    }
    CMessage("Head!!");
    edge();
    xround6();
    return;
    xpain5();
}
function xpain5()
{
    CMessage("Tail!!");
    CMessage("%PunishGame%");
    xround6();
}
function xround6()
{
    CMessage("I like to lead you and your feelings.");
    CMessage("I\'m your Domina. I have the power.");
    CMessage("You only can obey, submit.");
    CMessage("Surrender to my strength and my dominance.");
    CMessage("You can remove everything from your body...");
    return;
    Modulo4();
}
function Modulo4()
{
    CMessage("%KeepStroking%");
    addContact(3);
    SMessage("Hi", -1, 3);
    CMessage("Hi %domFriend2Name%");
    SMessage("You know %SubName% you were lucky to meet a goddess like %DomName%, she is both good and cruel!", -1, 3);
    SMessage("Like me", -1, 3);
    edge("%Edge%", -1, 3);
    //startEdging();
    if(!getVar("av_fetish_pain", false))
    {
        p098g6();
        return;
    }
    SMessage("Your cock is very hard, we should to fix this", -1, 3);
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    SMessage("now take the clothespins and stick...", -1, 3);
    SMessage("2 on your nipples", -1, 3);
    sleep(15);
    SMessage("1 on the nose", -1, 3);
    SMessage("2 on the tongue", -1, 3);
    SMessage("And 5 on the balls", -1, 3);
    SMessage("I like to hurt slaves like you", -1, 3);
    p098g6();
}
function p098g6()
{
    if(!getVar("AV_MasuDone", false))
    {
        end3430();
        return;
    }
    SMessage("Hey %DomName%, can I try that Masu thing you talked about?", -1, 3);
    CMessage("Sure, you already know the beats...");
    SMessage("Great, let\'s try %SubName%", -1, 3);
    setVar("AV_MasuRounds", getVar("%Random6%, 9", 0));
    MasuLoop();
}
function MasuLoop()
{
    switch(random("Mas1", "Mas2", "Mas3", "Mas4", "Mas5", "Mas6", "Mas7", "Mas8", "Mas9", "Mas10", "Mas11"))
    {
        case "Mas1":
        Mas1();
        return;
        break;
        case "Mas2":
        Mas2();
        return;
        break;
        case "Mas3":
        Mas3();
        return;
        break;
        case "Mas4":
        Mas4();
        return;
        break;
        case "Mas5":
        Mas5();
        return;
        break;
        case "Mas6":
        Mas6();
        return;
        break;
        case "Mas7":
        Mas7();
        return;
        break;
        case "Mas8":
        Mas8();
        return;
        break;
        case "Mas9":
        Mas9();
        return;
        break;
        case "Mas10":
        Mas10();
        return;
        break;
        case "Mas11":
        Mas11();
        return;
        break;
    }
    Mas1();
}
function Mas1()
{
    SMessage(random("ONE two three four, ONE two three four", "ONE two three four", "Dog"), -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogdog120.wav");
    sleep(18);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas2();
}
function Mas2()
{
    SMessage(random("ONE two three and four ONE two three and four", "Cat", "ONE two three and four"), -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "catcat100.wav");
    sleep(25);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas3();
}
function Mas3()
{
    SMessage(random("ONE two three and four ONE two three and four", "Cat", "ONE two three and four"), -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "catcat120.wav");
    sleep(20);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas4();
}
function Mas4()
{
    SMessage(random("ONE two three and four ONE two three and four", "Cat", "ONE two three and four"), -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "catcat140.wav");
    sleep(15);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas5();
}
function Mas5()
{
    //--UNINTERPRETED LINE:@Contact2 DOG & CAT @PlayAudio[tease\Masu\dogcat80.wav] @sleep(25)
	SMessage("DOG & CAT", -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogcat80.wav");
    sleep(25);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas6();
}
function Mas6()
{
    //--UNINTERPRETED LINE:@Contact2 DOG & CAT @PlayAudio[tease\Masu\dogcat100.wav] @sleep(20)
	SMessage("DOG & CAT", -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogcat100.wav");
    sleep(20);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas7();
}
function Mas7()
{
    //--UNINTERPRETED LINE:@Contact2 DOG & CAT faster @PlayAudio[tease\Masu\dogcat140.wav] @sleep(15)
	SMessage("DOG & CAT", -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogcat140.wav");
    sleep(15);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas8();
}
function Mas8()
{
    //--UNINTERPRETED LINE:@Contact2 DOG & CAT switch @PlayAudio[tease\Masu\dogcat-switch140.mp3] @sleep(18)
	SMessage("DOG & CAT", -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogcat-switch140.wav");
    sleep(18);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas9();
}
function Mas9()
{
    SMessage(random("Snake", "ONE and two, THREE and four"), -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "snakesnake100.wav");
    sleep(20);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas10();
}
function Mas10()
{
    SMessage(random("Snake", "ONE and two, THREE and four"), -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "snakesnake120.wav");
    sleep(17);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas11();
}
function Mas11()
{
    SMessage(random("Snake", "ONE and two, THREE and four"), -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "snakesnake140.wav");
    sleep(15);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    MasuBreak();
}
function MasuBreak()
{
	stopAudio();
    SMessage(random("Imagine if we played Masu for several hours at competition speed how much cum would have built up", "Knowing all this, knowing you will not be able to cum and dancing near the edge is the very essence of highlevel Masu play", "If you do it right you will enter a blisfull trance like state", "That\'s it. Keep your form. Work it hard", "Stroke is To Obey"), -1, 3);
    if (getVar("AV_MasuTrain", 0) >= getVar("AV_MasuRounds", 0))
    {
        MasuEnds();
        return;
    }
    MasuLoop();
    return;
    MasuEnds();
}
function MasuEnds()
{
    SMessage("%ThatsEnough%", -1, 3);
    end3430();
}
function end3430()
{
    SMessage("See you later, thanks for let me use %SubName%", -1, 3);
    CMessage("Bye %domFriend2Name%");
    removeContact(3);
    if(getVar("av_fetish_pain", false))
    {
        CMessage("You can remove the clothespins %PetName%");
    }
    return;
}