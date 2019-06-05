DMessage("AV_ModGeneral12: start");
main();
DMessage("AV_ModGeneral12: end");
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
    if(getVar("AV_ModGeneral12_NotFirstTime", false))
    {
        AV_ModGeneral12_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral12", 0);
    setVar("AV_ModGeneral12_NotFirstTime", true);
    AV_ModGeneral12_NotFirstTime();
}
function AV_ModGeneral12_NotFirstTime()
{
    if (getVar("AV_ModGeneral12", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral12", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral12", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral12", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral12", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral12", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral12", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral12", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral12", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral12", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral12", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral12", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral12", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral12", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral12", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral12", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral12", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral12", getVar("AV_ModGeneral12", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral12", getVar("AV_ModGeneral12", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral12", getVar("AV_ModGeneral12", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral12", getVar("AV_ModGeneral12", 0) + 1000);
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
    setVar("AV_ModGeneral12", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    CMessage("I own you now.");
    CMessage("You\'re about to get a lesson in obedience, my %PetName%.");
    CMessage("Do as I say and I won\'t have to punish you...");
    CMessage("Or maybe that\'s what you want.");
    let answer0 = getInput("Does the idea of me punishing you get your cock hard?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo07();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
        setTempVar("av_fetish_pain", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Let\'s find out...");
    }
    AV_Timeo07();
}
function AV_Timeo07()
{
    CMessage("%KneelForMe%");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("You\'re just a perverted, willing submissive, aren\'t you?");
    }
    CMessage("A compliant, little slave on his knees just waiting to be dominated...");
    CMessage("You like being controlled?");
    let answer0 = getInput("And who controls you?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo08();
        return;
    }
    while (!(answer0.isLike("you") || answer0.isLike("mistress")))
    {
        answer0 = getInput("Who?");
    }
    if (answer0.isLike("you", "mistress"))
    {
        CMessage("Good boy.");
        increaseAnger(-3)
    }
    AV_Timeo08();
}
function AV_Timeo08()
{
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("That\'s right, jerk that cock.");
    CMessage("Jerk that cock and say \'thank you, mistress\'.");
    if(getVar("av_fetish_foot", false))
    {
        CMessage("\'Thank you, mistress, for letting me stroke my cock and lick your beautiful, shiny boots\'.");
    }
    CMessage("Submissive little slaves beg to cum or else their mistresses punish them, right?");
    CMessage("What happens if you cum without permission, slave?");
    CMessage("That\'s right, you\'ll get disciplined.");
    CMessage("You\'re doing so well...");
    CMessage("I think you deserve a reward.");
    edge();
    CMessage("Oh, I know, I know.");
    CMessage("I understand your frustration...");
    CMessage("I know, honey... %EmoteLaugh%");
    DoEdges(2, 3, 0);
    let answer0 = getInput("You\'re learning to like taking my orders, aren\'t you?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo09();
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
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Don\'t be ashamed...");
        increaseAnger(3)
    }
    AV_Timeo09();
}
function AV_Timeo09()
{
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        CMessage("You\'re doing so good... but you need to be punished for your behavior earlier.");
    }
    CMessage("You will edge a few times for me again but...");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("between each edge, you will " + random("spank ", "tap ", "hit ") + "your %Balls% till next edge");
    }
    CMessage("Show your mistress how much you adore her.");
    DoEdges(2, 4, 0);
    CMessage("Look in my eyes right now.");
    CMessage("I own you... You love being owned, don\'t you?");
    CMessage("You love your mistress.");
    CMessage("Good boy.");
    CMessage("%SitDown%");
    CMessage("I think we were made for each other.");
    return;
    Modulo2();
}
function Modulo2()
{
    CMessage("Should I allow my %PetName% to stroke his %Cock% again?");
    if (getVar("cocksize", "NA") == "small")
    {
        CMessage("Can you even put your whole hand around it or were you jerking off with just two fingers, eh? Silly little boy..");
    }
    CMessage("So let me get this straight, %PetName%..");
    CMessage("you want to do everything I say.");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("No matter how painful or humiliating.");
    }
    CMessage("You want to worship the ground I walk on.");
    CMessage("You NEED to stroke, eh?");
    CMessage("You poor thing! You poor.. poor thing.");
    CMessage("How could I ever be mean enough to lock your cock away when you NEED it so bad!");
    CMessage("In fact, I want you to stroke.");
    CMessage("I\'ll allow you to stroke 5 times.");
    CMessage("Do them slow!");
    CMessage("Down, Up, Down, Up, Down.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("We still have a LOT of time.");
    CMessage("Not a single touch more.");
    CMessage("Enjoy, %PetName%! And thank me after each stroke.");
    CMessage("Happy now?");
    CMessage("Now start playing with your balls and keep that cock hard.");
    CMessage("It\'s so fun having a desperate little boy toy who will do whatever I say.");
    CMessage("You want to start");
    if (isStroking())
    {
        CMessage("again huh %PetName%?");
    }
    CMessage("Well no more stroking for now.");
    CMessage("This time rub that special spot right underneath your cockhead instead.");
    sleep(randomInt(10, 20));
    CMessage("Hands off that cock %SubName%.");
    CMessage("That was fun but I think I want to tease you some more before I even think about letting you cum.");
    CMessage("Okay lets mix things up a bit %PetName%.");
    CMessage("I want you to give me 10 seconds of slow strokes, then 10 of fast strokes");
    CMessage("then play with your balls for 10 seconds.");
    setVar("AV_SFS", 0);
    CMessage("Can your confused stroker brain handle that?");
    setVar("AV_StrokeFastSlow", randomInteger(3, 6));
    CMessage("Start now");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b075.mp3");
    sleep(10);
    CMessage("Fast now");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b210.mp3");
    sleep(10);
    CMessage("And massage your %Balls%");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    sleep(10);
    AV_StrokeLoop();
}
function AV_StrokeLoop()
{
    CMessage("%StrokeSlowest%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b055.mp3");
    setVar("AV_SFS", getVar("AV_SFS", 0) + 1);
    sleep(10);
    CMessage("%StrokeFastest%");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b210.mp3");
    sleep(10);
    CMessage("And " + random("massage ", "fondle ") + "your %Balls%");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    sleep(10);
    if (getVar("AV_StrokeFastSlow", 0) == getVar("AV_SFS", 0))
    {
        AV_FimSFS();
        return;
    }
    AV_StrokeLoop();
    return;
    AV_FimSFS();
}
function AV_FimSFS()
{
    CMessage("You look like you are about ready to burst %PetName%!");
    if(getVar("av_fetish_foot", false))
    {
        CMessage("Maybe, if you\'re a good boy, I\'ll let you lick a shoe of mine.");
    }
    if(getVar("av_fetish_foot", false))
    {
        CMessage("Isn\'t that so generous? You would swallow all the dirt for me, right? For your Goddess?");
    }
    CMessage("You don\'t want to disappoint me, right?");
    CMessage("%Okay% now just rub that special spot right below your cock head for a minute while playing with your balls at the same time.");
    CMessage("Keep going while you think about all these orgasms you are giving up for me");
    CMessage("Are you just dying to cum after all this teasing?");
    CMessage("You can stop now");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    CMessage("That cock must just be throbbing with ache by now.");
    if(!getVar("av_fetish_rough", false))
    {
        AV_Jump37();
        return;
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("A lot of those sites I saw in your internet history the women were calling men humiliating names.");
    }
    if(getVar("av_fetish_rough", false))
    {
		let answer1 = getInput("Is that really what you are into?", 5);
        if (answer1.isTimeout())
        {
            AV_Jump37();
            return;
        }
		if (answer11.isLike("yes"))
		{
			CMessage("%Okay% if that\'s what you want, give me 20 fast strokes you dirty pervert.");
			sleep(10);
		}
		else if (answer1.isLike("no"))
		{
			CMessage("Oh, %Okay%");
		}
	}
    AV_Jump37();
}
function AV_Jump37()
{
    CMessage(random("Feeling pretty horny now %PetName%?", "But I guess that\'s what you really want anyway isn\'t it? To be teased?"));
    CMessage("I bet that felt amazing huh?");
    return;
    Modulo3();
}
function Modulo3()
{
    CMessage("I will show you all the fun things I will put you through");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("Well, Fun for me at least.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("If you are a good boy then I will put the sexy, tight collar around your neck");
    CMessage("Attacking a whipping lead to it and lead you into my house!");
    CMessage("I have so many training to put you through and you are going to love every minute of it.");
    CMessage("%stopstroking%", 0);
	stopStroking();
    if(!getVar("av_fetish_pain", false))
    {
        Sempain02();
        return;
    }
    CMessage("I need to know how resilient your man cunt really is.");
    CMessage("Painting the inside of your thighs nice and red and blistered.");
    CMessage("Stand up");
    sleep(10);
    if(!getVar("av_fetish_rough", false))
    {
        CMessage("I know that look of fear and it looks so good on your face.");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("I know that look of fear and it looks so good on your pathetic little face.");
    }
    CMessage("Spank inside your right thighs with the spoon");
    CMessage("Follow the beats");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank10.mp3");
    sleep(12);
    if(getVar("av_fetish_pegging", false) && getVar("AV_LikeAnal", false))
    {
        CMessage("I will stretch other holes too so, I hope that you are prepared.");
    }
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_rough", false))
    {
        CMessage("You will refer to me as Mistress and only Mistress.");
    }
    CMessage("Now the left");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank15.mp3");
    sleep(12);
    CMessage("There is nothing better than punishing and unruly submissive that thinks he can get away with anything with me");
    CMessage("including his lazy ways.");
    CMessage("you can sit");
    Sempain02();
}
function Sempain02()
{
    CMessage("There is nothing hotter to me than tease and denial.");
    CMessage("%StartStroking%");
    CMessage("Faster");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b250.mp3");
    CMessage("I love getting your cock all nice and hard");
    CMessage("and just when you think its going to explode...");
    CMessage("%stopstroking%", 0);
	stopStroking();
	stopAudio();
    CMessage("It\'s so much fun hearing you beg for release.");
    CMessage("Just when you think you can\'t take it anymore");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("It\'s going to be so much fun teasing you and forcing you to edge.");
    CMessage("You will be begging me to let you cum!");
    edge();
    if(!getVar("av_fetish_rough", false))
    {
        CMessage("Listening to you moaning");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Listening to you moaning like a bitch");
    }
    CMessage("You like that? Hmm?");
    CMessage("I know you do, come on, take it. %EdgeNoun%");
    edge();
    CMessage("You always knows how to be a good boy for me");
    return;
    Modulo4();
}
function Modulo4()
{
    CMessage("You know " + random("%PetName%", "%SubName%"));
    CMessage("Guided Masturbation is one of my specialties that I love to embrace daily.");
    CMessage("It\'s my opinion Guided Masturbation can be more like sensual domination");
    CMessage("I have control over your %Cock% and orgasm.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("See? I tell you to %Stroke%, and you %Stroke%...");
    sleep(randomInt(10, 20));
    CMessage("Every session is not the same.");
    CMessage("Sometimes is like the " + random("tender touch ", "tickling as the finger tips lightly touch your shaft ") + "going up and down.");
    CMessage("Then others like holding your cock very tightly in your hands while stroking fast and hard up and down to get the feeling you\'re looking for.");
    CMessage("There are so many was that you and I could enjoy a nice sensual touching session.");
    CMessage("I know one of my big turn-on\'s with masturbation is hearing your voice change as we masturbate together.");
    CMessage("I can hear the excitement in your voice as we both get closer to our goal of having an orgasm at the same time.");
    CMessage("So as you see with guided masturbation exploding with excitement at the same time is one of the hottest things I love to do.");
    CMessage("So now it\'s time to have a little fun.");
    CMessage("Are you ready?");
    edge();
    CMessage("I know I am.");
    CMessage("Let me teach you how good guided masturbation can feel.");
    if(!getVar("AV_DommeMistress", false) && !getVar("av_fetish_rough", false))
    {
        AV_PulaHum();
        return;
    }
    if (randomInteger(1, 100) <= 50)
    {
        AV_PulaHum();
        return;
    }
    let answer0 = getInput("Were you looking for humiliation, darling?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo10();
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
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
        increaseAnger(3)
    }
    AV_Timeo10();
}
function AV_Timeo10()
{
    CMessage("Did you WANT me to masturbate in front of you showing you what you could have had");
    CMessage("as I call you names such as loser hand fucker?");
    CMessage("Well, not waiting for me is Newton\'s Law on that, dear!");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Denying you pussy, while making you " + random("disappointingly ", "sadly ") + "%Stroke% your %Cock% who was SOOOOO close to hitting the fucking edge!");
    CMessage("As, I humiliate you is so much fucking fun!");
    AV_TeaseCont();
    return;
    AV_PulaHum();
}
function AV_PulaHum()
{
    CMessage("Lately, I have been thinking about some Ruined Orgasm");
    CMessage("via catching you and, then mercilessly taunting you that");
    CMessage("if you ONLY could have expressed a shred of self control");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Well, YOU could have had a squirty, pussy right now");
    CMessage("instead of that fuck puppet hand you are apparently so fond of!");
    CMessage("Too fond of, if you ask me!");
    AV_TeaseCont();
}
function AV_TeaseCont()
{
    CMessage("%stopstroking%", 0);
	stopStroking();
    CMessage("I love cock tease and how you sound so excited");
    CMessage("In fact, you will beg for more and more and more even when I brought tears to your eyes.");
    return;
}