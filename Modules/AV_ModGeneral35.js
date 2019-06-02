DMessage("AV_ModGeneral35: start");
main();
DMessage("AV_ModGeneral35: end");
function main()
{
    if(getVar("AV_ModGeneral35_NotFirstTime", false))
    {
        AV_ModGeneral35_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral35", 0);
    setVar("AV_ModGeneral35_NotFirstTime", true);
    AV_ModGeneral35_NotFirstTime();
}
function AV_ModGeneral35_NotFirstTime()
{
    if (getVar("AV_ModGeneral35", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral35", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral35", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral35", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral35", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral35", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral35", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral35", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral35", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral35", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral35", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral35", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral35", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral35", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral35", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral35", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral35", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral35", getVar("AV_ModGeneral35", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral35", getVar("AV_ModGeneral35", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral35", getVar("AV_ModGeneral35", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral35", getVar("AV_ModGeneral35", 0) + 1000);
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
    setVar("AV_ModGeneral35", 0);
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
    CMessage("%AV_Break3%");
    SMessage("%AV_Break4%", -1, 3);
    removeContact(1);
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("Well come on %Slave%, let\'s see some stroking.");
    //CMessage("%StartStroking%");
	Stroking(-1,3)
    CMessage("Stroke your cock however you like");
    CMessage("I am offering you some control.");
    CMessage("You have to learn how to control that cock of yours");
    CMessage("Imagine me pumping that dick for you with my latext gloves.");
    let answer0 = getInput("Would you like the feel of that slave?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("I might reward you if you can hold away from the edge for long enough.");
    let answer1 = getInput("So can you control yourself %Slave%?",5);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("Are you thinking what it would be like to edge");
    CMessage("and then just franticlaly tip yourself over that sweet edge?");
    CMessage("You do know that is only a fantasy.");
    CMessage("I may let you edge but you have to do alot more work if you want to cum.");
    //CMessage("%Edge%");
    //startEdging();
	edge("%Edge%",-1,3);
    CMessage("As a stupid male all you want to do is get as much pleasure as quickly as possible.");
    CMessage("You don\'t think about the future %Slave%!");
    CMessage("How is your cock feeling now slave?");
    let answer2 = getInput("desperate?",5);
    if (answer2.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    let answer3 = getInput("frustrated?",5);
    if (answer3.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Get the spoon...");
        sleep(10);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your %Cock%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    //CMessage("%StartStroking%");
	Stroking(-1,3);
    CMessage("I love watching you rattle away.");
    CMessage("Do you enjoy debasing yourself like this in front of me?");
    CMessage("Don\'t bother answering because if you don\'t you will learn to enjoy it %Slave%!");
    CMessage("Is it getting more and more difficult.");
    CMessage("Don\'t you want to just tip yourself over the precipice of extasy?");
    CMessage("Well of course you can\'t slave.");
    CMessage("How frustrated do your swollen sore ball\'s feel?");
    CMessage("I bet if I kicked them with my boot\'s on they might explode");
    CMessage("Feel the cum building up in thoses balls.");
    DoEdges(2, 3, 0,-1,3);
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Get the spoon again...");
        sleep(10);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your %Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    CMessage("%ThatsEnough%");
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
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("Why are you still sitting slave?");
    CMessage("%KneelForMe%");
    CMessage("spread your knees wide apart.");
    CMessage("Grab your balls.");
    CMessage("Wrap your hand all the way around them.");
    CMessage("Now I want you to stretch your balls as far as you can.");
    CMessage("Remember to keep that little dick hard at all times.");
    CMessage("Keep pulling them balls untill I instruct you otherwise.");
    sleep(randomInt(10, 20));
    CMessage("That\'s a good little %Slave%");
    sleep(10);
    CMessage("You can stop.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Now I want you to spank your ass with a ruler.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Spank it.... hmmm 50 times.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("That should be enough to make it red and sore slave.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your ass");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "001.mp3");
        sleep(20);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your ass");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "002.mp3");
        sleep(20);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Make sure you spank that ass properly");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your ass");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "003.mp3");
        sleep(20);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your ass");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "001.mp3");
        sleep(20);
    }
    CMessage("That\'s right.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your ass");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "005.mp3");
        sleep(20);
    }
    CMessage("That will do for now slave.");
    CMessage("I could laugh at you spanking yourself red raw for me all day");
    CMessage("I suppose I should let you %Stroke%");
    //CMessage("%StartStroking%");
	Stroking(-1,4);
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("You\'re " + random("a bitch", "a slave", "a fucking play thing", "a stupid sissy fuck."));
    }
    CMessage("You are what ever I want you to be.");
    CMessage("It makes me wet seeing pathetic slaves follow my orders.");
    CMessage("The cool of my whip gives my pussy tingles.");
    CMessage("It must be the power I like to get off on.");
    let answer0 = getInput("Do you like having power over a woman slave?", 5);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
		if (answer0.isTimeout())
		{
			brtfb2();
			return;
		}else{
			answer0 = getInput("%YesorNo%");
		}
    }
    if (answer0.isLike("yes"))
    {
        CMessage("I don\'t think so... %Lol%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Good slave. You don\'t deserve any power.");
        AllowEdgeQ();
        return;
    }
    brtfb2();
}
function brtfb2()
{
    CMessage("%stopstroking%", 0);
	stopStroking();
    NoEdgeQ();
    return;
    AllowEdgeQ();
}
function AllowEdgeQ()
{
    edge("%Edge%",-1,4)
    CMessage("I did\'nt realise you had been turned into such a weak loser already %Slave%.");
    NoEdgeQ();
}
function NoEdgeQ()
{
    CMessage("Seeing your male orgasm only reminded me how utterly worthless they are.");
    CMessage("They have one purpose - to keep you in line.");
    CMessage("I\'m sure if you knew you\'d only be able to masturbate to me for the rest of your life");
    CMessage("that\'d still be worth it in the face of never cumming.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("I want 4 clothespins on your %Balls%");
        sleep(20);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("And 2 on your nipples");
        sleep(20);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("I want 4 edges from you.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("You tug at the left clamp on your nipple really hard during the first and third");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("And the right clamp on the second and fourth edge");
    }
    DoEdges(4, 4, 0,-1,4);
    CMessage("%ThatsEnough%");
    CMessage("%SitDown% and remove the clothespins");
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
    CMessage("%AV_Break1%");
    CMessage("%AV_Luxury%");
    CMessage("%AV_Break2%");
    addContact(2);
    CMessage("Hey %domFriend1Name%");
    SMessage("Hi %EmoteLaugh%", -1, 2);
    CMessage("%AV_Break3%");
    SMessage("%AV_Break4%", -1, 2);
    removeContact(1);
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("Get comfortable, you have a lot of stroking to do for me!");
    CMessage("Great, I love teasing men.");
    CMessage("For " + random("each ", "every ") + "number I " + random("say", "count"));
    CMessage("You " + random("will ", "need to ") + "%Stroke% once");
    CMessage("%AV_CountContact1%");
    sleep(10);
    CMessage("%Stop%", 0);
    CMessage("How much more there is for you?");
    CMessage("I\'ll make you WISH for that edge.");
    CMessage("Even without release...");
    CMessage("%StartStroking%");
    CMessage("%AV_CountContact1%");
    CMessage("Well, keep that pace, slave.");
    sleep(10);
    CMessage("%stopstroking%", 0);
    CMessage("We have to make you nice and frustrated now.");
    DoEdges(3, 4, 0,-1,2);
    CMessage("I love new experiences.");
    CMessage("I crave them.");
    CMessage(random("Once I\'ve done something once I grow bored of it real quickly", "So I\'ve got a few things I\'m going to try out with you"));
    CMessage("And yes, some of them are weird.");
    CMessage("I\'ve never tried to get a man hard via ballbusting before");
    if(getVar("av_fetish_pain", false))
    {
        SMessage(random("Hit ", "Spank ") + "your balls", -1, 2);
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G1Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    CMessage("and now I know the result of that so it bores me.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Then you best try hitting them a bit harder, huh.");
    }
    if(getVar("av_fetish_pain", false))
    {
        SMessage(random("Hit ", "Spank ") + "your balls", -1, 2);
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G1Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Good...This is kinda fun.");
    }
    CMessage("I like this little fantasy.");
    CMessage("Because that\'s what all of this is really - making our fantasies reality.");
    CMessage("%StartStroking%");
    CMessage("And I\'ll try anything once.");
    CMessage("New experiences are all that I crave.");
    CMessage("I wonder what else I can do...");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Glitter1" + java.io.File.separator + "KeepStroking*.mp3");
    sleep(15);
    CMessage("Because as I said, new experiences.");
    CMessage("I won\'t know how to feel about it until I see it.");
    CMessage("Some are quite normal.");
    CMessage("But you are here as my plaything, so I get to experiment.");
    DoEdges(3, 4, 0,-1,2);
    CMessage("My first vanilla sex experience was great");
    CMessage("but then it grew lacking and I needed a little more.");
    CMessage("And then a little more.");
    CMessage("It never stops. I just need...difference.");
    CMessage("%ThatsEnough%");
    SMessage("He\'s all yours %DomName%", -1, 2);
    addContact(1);
    CMessage("%EmoteSmile%");
    removeContact(2);
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
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. And a shoelace.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("You exist for my pleasure.");
    CMessage("You need to just accept that whatever you do");
    CMessage("it is for me.");
    CMessage("Your only question in any decision is \"Will this please the");
    CMessage("First take that shoelace and wrap it around your balls.");
    CMessage("If it is too big, wrap it around again.");
    CMessage("Make it nice and tight.");
    sleep(20);
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Now put 2 clothespins onto your nipples.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("You get to keep them on for a little longer!");
        setTempVar("AV_Pins", true);
    }
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("And of course you are doing this for my entertainment");
    CMessage("so however you feel about it I expect you to try and obey.");
    CMessage("You are just mine to control");
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("Completely disposable and useless.");
    }
    CMessage("See? I bet we both want this...");
    CMessage("You being helpless to your own actions while I get to determine your every move");
    if(!getVar("pthevCompleteControlYES", false))
    {
        let answer1 = getInput("So do you want to be under my control?",5);
        if (answer1.isLike("yes", "yea", "yep"))
        {
            controlMyOrgasmsResponse();
        }
    }
    CMessage("Now grab your balls with one hand");
    CMessage("%KeepStroking%");
    CMessage("Now squeeze tour balls really hard. No twisting or turning, just constant squeezing.");
    CMessage("Don\'t give yourself a moments pause.");
    CMessage("Well that looked a little painful...");
    let answer0 = getInput("I\'d say that\'s pretty perfect though, right?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("%Lol%");
    sleep(10);
    CMessage("%Stop%", 0);
	stopStroking();
    CMessage("Now, let me tell you a little about ache.");
    CMessage("When you see a beautiful Goddess like me, you ache to serve me.");
    CMessage("To provide for me. To hope I\'ll let you get off");
    CMessage("I like to match that with edges.");
    CMessage("With each edge, you ache for that orgasm even more.");
    CMessage("But by not giving in and continuing you obey your Mistress");
    CMessage("you reaffirm that ache for submission.");
    CMessage("I intend to mess you up.");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("%KneelForMe%");
    }
    CMessage("I\'ll tell you now - you are going to edge 10 times now.");
    CMessage("You should reach a point where every stroke is torturous ideally, so you would think a cage could feels like a blessing.");
    DoEdges(2, 2, 0);
    CMessage("You have a lot of edges to go");
    DoEdges(2, 2, 0);
    CMessage("There\'s nothing like a good edge to keep a boy on edge.");
    edge();
    CMessage("You know, every time you edge is basically me stealing an orgasm from you.");
    DoEdges(2, 2, 0);
    CMessage("Because you know if you can\'t cum for me today you don\'t quite get that same experience.");
    DoEdges(2, 2, 0);
    CMessage("I still steal it, but it\'s not the same as knowing each orgasm has real potential that you then squander.");
    edge();
    CMessage("And although you might hate this constant edging");
    return;
}