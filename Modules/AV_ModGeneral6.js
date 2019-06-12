DMessage("AV_ModGeneral6: start");
main();
DMessage("AV_ModGeneral6: end");
function main()
{
    if(getVar("AV_ModGeneral6_NotFirstTime", false))
    {
        AV_ModGeneral6_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral6", 0);
    setVar("AV_ModGeneral6_NotFirstTime", true);
    AV_ModGeneral6_NotFirstTime();
}
function AV_ModGeneral6_NotFirstTime()
{
    if (getVar("AV_ModGeneral6", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral6", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral6", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral6", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral6", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral6", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral6", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral6", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral6", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral6", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral6", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral6", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral6", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral6", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral6", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral6", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral6", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral6", getVar("AV_ModGeneral6", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral6", getVar("AV_ModGeneral6", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral6", getVar("AV_ModGeneral6", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral6", getVar("AV_ModGeneral6", 0) + 1000);
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
    setVar("AV_ModGeneral6", 0);
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
    CMessage("%SubName%");
    CMessage("Now you will stroke, but are not allowed to edge");
    CMessage("%StartStroking%");
    CMessage("Follow the beat");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b075.mp3");
    CMessage("of course no edging for you!");
    CMessage("and massage your balls with your other hand.");
    CMessage("Really rub them and have a tight grip on your head.");
    CMessage("Hands off your cock. Swat your balls instead!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    CMessage("Let your dick ache and swat away *grins*");
    CMessage("Feel the pain, %PetName%!!");
    CMessage("Start stroking again.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Don\'t edge yet, honey.");
    CMessage("Hold it in your little balls.");
    let answer0 = getInput("Can you hold out any longer?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Someone believes in himself");
        Sim();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("To bad, dear");
        Nao();
        return;
    }
    Sim();
}
function Sim()
{
    CMessage("Let\'s put that to the test.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b120.mp3",true);
    CMessage("Prove it!");
    CMessage("Can you keep up? %AudioStroke%");
    CMessage("Or is the edge coming uncontrollaby?");
    CMessage("Last time stroking! %AudioStroke%");
    CMessage("Oh, sorry... one more time %Lol% %AudioStroke%");
    Chega();
    return;
    Nao();
}
function Nao()
{
    CMessage("Then this will be your last stroking time. %AV_AudioBeat%");
    CMessage("Hold out!");
    Chega();
}
function Chega()
{
    CMessage("Calm down, get rested.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    CMessage("Can you imagine doing this for half an hour?");
    CMessage("maybe even longer?");
    CMessage("I give you a fair warning.");
    CMessage("You would not have any choice.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    let answer0 = getInput("Does it make it harder to stay away from the edge, if I talk about an Edge?", 7);
	while(true){
		if (answer0.isTimeout())
		{
			AV_Jump53();
			return;
		}
		if (answer0.isLike("yes"))
		{
			CMessage("%Good%");
			break;
		}
		else if (answer0.isLike("no"))
		{
			CMessage("Oh doesn\'t it bother you at all");
			break;
		}
		else
		{
			answer0 = getInput("Yes or no %SubName%?");
		}
	}
    AV_Jump53();
}
function AV_Jump53()
{
    CMessage("when you could edge anytime soon");
    CMessage("and I do not allow it, but naming it all the time?");
    CMessage("The edge...");
    CMessage("How does it feel by the way?");
    CMessage("Good, bad?");
    CMessage("Does an edge make you suffer and realize");
    CMessage("that you\'re currently living in denial?");
    CMessage("Tormented by me, who has you completely controlled.");
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
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
    CMessage("%AV_Break1%");
    CMessage("%AV_Luxury%");
    CMessage("%AV_Break2%");
    CMessage("Hey %domFriend1Name%");
    addContact(2);
    SMessage("HI %EmoteLaugh%", -1, 2);
    CMessage("%AV_Break3%");
    SMessage("%AV_Break4%", -1, 2);
    removeContact(1);
    SMessage("It\'s all you do, in fact it is all you know.", -1,2);
    SMessage("To stroke your %Cock%", -1,2);
    SMessage("So, start %Stroking%", -1,2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    SMessage("You stroke to anything now", -1,2);
    SMessage("it has overtaken every single part of your life", -1,2);
    SMessage("and has become a huge obsession and dirty habit you have.", -1,2);
    SMessage("With each and every stroke you know you are weakening yourself over and over.", -1,2);
    SMessage("You can\'t help yourself but lose deep within submission.", -1,2);
    startEdging("%Edge%", -1,2);
	SMessage("%stopstrokingedge%", null, 2);
	SMessage("%lettheedgefade%", -1,2);
    SMessage("It\'s so easy to toy with you", -1,2);
    SMessage("I can make you do whatever I want.", -1,2);
    SMessage("Totally emotionally unstable when it comes to me", -1,2);
    SMessage("you are nothing but a pawn to a Girl like me.", -1,2);
    if(getVar("av_fetish_rough", false))
    {
        SMessage("You were born a slave, and that is the only thing you will excel at in life.", -1,2);
    }
    SMessage("My happiness is your happiness and you will go to any length to ensure that my wants are met each and every day.", -1,2);
    if(getVar("av_fetish_rough", false))
    {
        SMessage("I am your Alpha and you are extremely lucky to have the chance to serve me.", -1,2);
    }
    //SMessage("%StartStroking%", -1,2);
	setStrokingNoTaunt(null,-1,2);
    SMessage("I enjoy seeing just how desperate I make you", -1,2);
    SMessage("I love seeing you melt", -1,2);
    SMessage("and I will continue to tease you into a horny oblivion to get exactly what I want", -1,2);
    DoEdges(3, 3, 0,-1,2);
    SMessage("You are horny all the time.", -1,2);
    SMessage("You are dying to empty your balls.", -1,2);
    SMessage("But before you touch your dick, you have to get on your knees and beg me.", -1,2);
    SMessage("From now on every time you want to wank", -1,2);
    SMessage("you have to think about me, kneel down and beg for my permission to stroke.", -1,2);
    SMessage("Lets try it now....", -1,2);
    SMessage("%KneelForMe%", -1,2);
    if(getVar("av_fetish_rough", false))
    {
        SMessage("spread your legs apart like a good bitch and beg me.", -1,2);
    }
    if(!getVar("AV_DommeMistress", false) && !getVar("av_fetish_rough", false))
    {
        SMessage("spread your legs apart and beg me.", -1,2);
    }
    SMessage("Shout my name!", -1,2);
    if(getVar("av_fetish_rough", false))
    {
        SMessage("I want to hear you, loser! Hahaha....", -1,2);
    }
    SMessage("its like a music to my ears.", -1,2);
    SMessage("No, you can\'t %Stroke%.", -1,2);
    SMessage("%SitDown%", -1,2);
    SMessage("Look who is back", -1, 2);
    addContact(1);
    CMessage("Hi %PetName%, miss me?");
    removeContact(2);
    return;
    Modulo3();
}
function Modulo3()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage("%AV_Break1%");
    CMessage("%AV_Luxury%");
    CMessage("%AV_Break2%");
    CMessage("Hey %domFriend2Name%");
    addContact(3);
    SMessage("HI %EmoteLaugh%", -1, 3);
    CMessage("%AV_Break3%");
    SMessage("%AV_Break4%", -1, 3);
    removeContact(1);
    SMessage("I like to keep my slaves in chastity long term", -1,3);
    SMessage("I find it keeps them more focused and productive.", -1,3);
    SMessage("But you have been so obedient to Mistress %DomName%, I feel that you deserve a little treat.", -1,3);
    if(getVar("AV_LikeAnal", false))
    {
        SMessage("Go get some lube", -1,3);
        sleep(20);
    }
    SMessage("I want you to start out slow stroking your cock", -1,3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    SMessage("all the way up and down the shaft as you stimulate your balls.", -1,3);
    SMessage("I hope you realized how lucky you are that I am allowing you to touch your cock", -1,3);
    SMessage("you certainly aren\'t going to be getting any other rewards from me.", -1,3);
    if(getVar("AV_LikeAnal", false))
    {
        SMessage("Now as you stroke your cock with one hand take your other hand and start stimulating your prostrate by fingering your ass.", -1,3);
    }
    if(getVar("AV_LikeAnal", false))
    {
        SMessage("Oh don\'t be shy about it, you know it will make your orgasm much better.", -1,3);
    }
    SMessage("But don\'t get too excited just yet", -1,3);
    SMessage("You don\'t want to be one of those pathetic guys who cums instantly.", -1,3);
    SMessage("I want you to stroke faster and get close to orgasm but don\'t cum", -1,3);
    SMessage("I am going to keep you on the edge then make you stop touching yourself.", -1,3);
    SMessage("I know you want to do what I say so you will play my little game...", -1,3);
    startEdging("%Edge%", -1,3);
	SMessage("%stopstrokingedge%", null, 3);
	SMessage("%lettheedgefade%", -1,3);
    if(getVar("AV_LikeAnal", false))
    {
        SMessage("%stopstroking%", 0);
    }
    if(getVar("AV_LikeAnal", false))
    {
        SMessage("I am going to train you so well that you will beg to suck dick every night.", -1,3);
    }
    if(getVar("AV_LikeAnal", false))
    {
        SMessage("I can\'t wait to see the look on your face while we train with a big strapon.", -1,3);
    }
    SMessage("%KneelForMe%", -1,3);
    if(getVar("AV_LikeAnal", false))
    {
        SMessage("and open that pathetic mouth of yours!", -1,3);
    }
    if(getVar("AV_LikeAnal", false))
    {
        SMessage("Let me stick it in as far as I can while you gag.", -1,3);
    }
    SMessage("%Lol% you don\'t like that do you?", -1,3);
    SMessage("I\'ll be standing right over you laughing!", -1,3);
    SMessage("Do you know why you are kneeling on the floor beneath me?", -1,3);
    if(getVar("av_fetish_rough", false))
    {
        SMessage("Because you are a worthless slave.", -1,3);
    }
    if(getVar("av_fetish_rough", false))
    {
        SMessage("You are not my equal.", -1,3);
    }
    SMessage("You should always be below me.", -1,3);
    SMessage("At my boot heels. Like a lap dog.", -1,3);
    //SMessage("%StartStroking%", -1,3);
	setStrokingNoTaunt(null,-1,3);
    SMessage("Eager for any spec of attention I allow you.", -1,3);
    SMessage("Hungry for any scraps I throw to the floor.", -1,3);
    SMessage("This is your life from now on.", -1,3);
    if(getVar("av_fetish_rough", false))
    {
        SMessage("It is your destiny to be enslaved to a beautiful, powerful Goddess, such as myself.", -1,3);
    }
    SMessage("Know your place. Accept it.", -1,3);
    SMessage("Relish it. Love it.", -1,3);
    startEdging("%Edge%", -1,3);
	SMessage("%stopstrokingedge%", null, 3);
	SMessage("%lettheedgefade%", -1,3);
    SMessage("Thank me", -1,3);
    SMessage("%SitDown%", -1,3);
    SMessage("Look who is back", -1, 3);
    addContact(1);
    CMessage("Hi %PetName%, miss me?");
    removeContact(3);
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
    CMessage("%AV_Break1%");
    CMessage("%AV_Luxury%");
    CMessage("%AV_Break2%");
    CMessage("Hey %domFriend3Name%");
    addContact(4);
    SMessage("HI %EmoteLaugh%", -1, 4);
    CMessage("%AV_Break3%");
    SMessage("%AV_Break4%", -1, 4);
    removeContact(1);
    if(!getVar("AV_PinDone", false))
    {
        SMessage("Go fetch me a spoon and some clothespins. At least 10 of them.", -1,4);
        sleep(20);
        setTempVar("AV_PinDone", true);
    }
    SMessage("Men always say they\'ll do anything, but I don\'t think most of them know the definition of the word \"anything\".", -1,4);
    SMessage("This isn\'t some play time session where you get to ask for what you want.", -1,4);
    SMessage("You\'re going to have to take what I give you.", -1,4);
    SMessage("I only like slaves who can take a lot of pain.", -1,4);
    SMessage(random("If you can\'t then you\'re worthless to me", "I\'m not into people wasting my time"),-1,4);
    let answer0 = getInput("So are you really serious about this?", 5,-1,true,4);
    while(true){
		if (answer0.isTimeout())
		{
			AV_Timeo400();
			return;
		}
		if (answer0.isLike("yes"))
		{
			SMessage("%Good%", -1,4);
		}
		else if (answer0.isLike("no"))
		{
			SMessage("You don\'t?", -1,4);
			skipe3456();
			return;
		}
		else
		{
			answer0 = getInput("%YesorNo%", 5,-1,true,4);
		}
	}
    AV_Timeo400();
}
function AV_Timeo400()
{
    SMessage("Then  kneel on the floor and spread your legs a little.", -1,4);
    sleep(15);
    if(!getVar("av_fetish_pain", false))
    {
        skipe3456();
        return;
    }
    SMessage("I am going to see how you take being kicked in the balls.", -1,4);
    SMessage("I choose when I am done with you.", -1,4);
    SMessage("Now this is going to hurt", -1,4);
    SMessage("Get the spoon ready...", -1,4);
    SMessage(random("Hit ", "Spank ") + "your %Balls%", -1,4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(22);
    SMessage(random("Hit ", "Spank ") + "your %Balls%", -1,4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(22);
    skipe3456();
}
function skipe3456()
{
    startEdging("%Edge%", -1,4);
	SMessage("%stopstrokingedge%", null, 4);
	SMessage("%lettheedgefade%", -1,4);
    SMessage("You have to prove you have what it takes to be a slave.", -1,4);
    SMessage("If you want to prove yourself to me you have to give up all control", -1,4);
    SMessage("and let me use your body how I see fit.", -1,4);
    if(getVar("av_fetish_pain", false))
    {
        SMessage(random("Hit ", "Spank ") + "your %Balls%", -1,4);
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
        sleep(22);
    }
    SMessage(random("Hit ", "Spank ") + "your %Balls%", -1,4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(22);
    startEdging("%Edge%", -1,4);
	SMessage("%stopstrokingedge%", null, 4);
	SMessage("%lettheedgefade%", -1,4);
    SMessage("This isn\'t something you should take lightly.", -1,4);
    SMessage("I\'m going to use, abuse and exploit you.", -1,4);
    SMessage("I don\'t play with men, I destroy men.", -1,4);
    SMessage("Look who is back", -1, 4);
    addContact(1);
    CMessage("Hi %PetName%, miss me?");
    removeContact(4);
    return;
}