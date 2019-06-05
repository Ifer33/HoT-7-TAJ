DMessage("AV_ModGeneral37: start");
main();
DMessage("AV_ModGeneral37: end");
function main()
{
    if(getVar("AV_ModGeneral37_NotFirstTime", false))
    {
        AV_ModGeneral37_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral37", 0);
    setVar("AV_ModGeneral37_NotFirstTime", true);
    AV_ModGeneral37_NotFirstTime();
}
function AV_ModGeneral37_NotFirstTime()
{
    if (getVar("AV_ModGeneral37", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral37", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral37", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral37", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral37", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral37", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral37", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral37", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral37", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral37", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral37", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral37", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral37", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral37", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral37", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral37", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral37", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral37", getVar("AV_ModGeneral37", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral37", getVar("AV_ModGeneral37", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral37", getVar("AV_ModGeneral37", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral37", getVar("AV_ModGeneral37", 0) + 1000);
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
    setVar("AV_ModGeneral37", 0);
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
    CMessage("Someone is coming...");
    CMessage("And it\'s not you %SubName% %Lol%");
    addContact(2);
    CMessage("Have fun %domFriend1Name%");
    SMessage("%ThankYou%", -1, 2);
    removeContact(1);
    CMessage("%SubName%...");
    CMessage("I am on the mood to see you edge...");
    CMessage("a lot");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Look into My eyes and don\'t you dare look away.");
    CMessage("I want to see you. All of you.");
    DoEdges(1, 3, 100);
    CMessage("I love seeing your face when you\'re so close to cumming. So desperate.");
    CMessage("Everything you want to hide and keep to yourself.");
    CMessage("Your secrets.");
    CMessage("Your shame.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Stroke your cock and stare into My eyes.");
    sleep(15);
    let answer0 = getInput("Are you man enough to withstand My fiere eyes and My demanding edges?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
        return;
    }
    DoEdges(1, 4, 100);
    CMessage("You think that’s bad?");
    CMessage("I think you could rest a little...");
    sleep(20);
    CMessage("Start rubbing your balls for me.");
    CMessage("I like watching a man play with his balls.");
    CMessage("They must be so full of cum and aching for release.");
    CMessage("I\'m not going to make you edge again");
    CMessage("but you\'ll do a lot of stroking for me.");
    CMessage("You\'re going to alternate between fast and slow stroking.");
    CMessage("Ready?");
    CMessage("%Stroke%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b055.mp3");
    sleep(randomInt(12, 16));
    CMessage("%StrokeFastest%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b250.mp3");
    sleep(randomInt(5, 9));
    CMessage("%StrokeSlowest%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b055.mp3");
    sleep(randomInt(12, 16));
    CMessage("%StrokeFastest%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b250.mp3");
    sleep(randomInt(5, 9));
    CMessage("%StrokeSlowest%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b055.mp3");
    sleep(randomInt(12, 16));
    CMessage("%StrokeFastest%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b250.mp3");
    sleep(randomInt(5, 9));
    CMessage("%stopstroking%", 0);
    CMessage("I think that fast speed it\'s not fast enough...");
    CMessage("Let\'s try something faster");
    CMessage("%StrokeFastest%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b300.mp3");
    sleep(randomInt(4, 8));
    CMessage("%StrokeSlowest%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b055.mp3");
    sleep(randomInt(12, 16));
    CMessage("%StrokeFastest%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b300.mp3");
    sleep(randomInt(4, 8));
    CMessage("%StrokeSlowest%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b055.mp3");
    sleep(randomInt(12, 16));
    CMessage("%StrokeFastest%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b300.mp3");
    sleep(randomInt(4, 8));
    DoEdges(1, 4, 100);
    CMessage("%ThatsEnough%");
    addContact(1);
    removeContact(2);
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
    CMessage("Someone is coming...");
    CMessage("And it\'s not you %SubName% %Lol%");
    addContact(3);
    CMessage("Have fun %domFriend2Name%");
    SMessage("%ThankYou%", -1, 3);
    removeContact(1);
    CMessage("Hey %SubName%");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("By now you\'ve probably realized that you are helplessly enslaved");
    CMessage("and totally under our control.");
    CMessage("The time has come for me to take your training to the next level");
    CMessage("you must understand what %DomName% should require of you.");
    CMessage("%KneelForMe%");
    CMessage("I expect no less than complete and total obedience.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    let answer0 = getInput("Have you been a good boy or a bad naughty boy?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo15();
        return;
    }
    if (answer0.isLike("good"))
    {
        CMessage("Oh...so you think you\'re a good boy...");
        Goodboy();
        return;
    }
    else if (answer0.isLike("bad"))
    {
        CMessage("Really?");
        badboy();
        return;
    }
    else
    {
        CMessage("Right...");
    }
    AV_Timeo15();
}
function AV_Timeo15()
{
    CMessage("It\'s a bit of a loaded question isn\'t it?");
    CMessage("you probably don\'t even know how to answer it.");
    Goodboy();
}
function Goodboy()
{
    let answer0 = getInput("Lets ask another question, is Goddess %DomName% a good mistress or a Naughty mistress?", 5);
    if (answer0.isTimeout())
    {
        badboy();
        return;
    }
    if (answer0.isLike("good"))
    {
        CMessage("Really?");
    }
    else if (answer0.isLike("Naughty"))
    {
        CMessage("%Lol%");
    }
    else
    {
        CMessage("Right...");
    }
    badboy();
}
function badboy()
{
    CMessage("Well %Petname%, I hope you have your balls for now");
    if(!getVar("av_fetish_pain", false))
    {
        a8ideioq();
        return;
    }
    CMessage("because I\'m in a bit of a ball busting mood.");
    CMessage("Not the pain variety.");
    CMessage("%Stop%", 0);
	stopStroking();
    CMessage("The \"You will do what you are fucking told");
    let answer0 = getInput("are you ready to start with a damn good spanking?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("Let\'s start with your ass, get your spoon");
    SMessage(random("Hit ", "Spank ") + "your ass", -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    a8ideioq();
}
function a8ideioq()
{
    DoEdges(1, 3, 100);
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Now your balls");
    }
    if(getVar("av_fetish_pain", false))
    {
        SMessage(random("Hit ", "Spank ") + "your balls", -1, 3);
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    DoEdges(1, 3, 100);
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Now will be a surprise %EmoteHappy%");
    }
    if(getVar("av_fetish_pain", false))
    {
        SMessage(random("Hit ", "Spank ") + "your " + random(ass, balls, cock), -1, 3);
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    DoEdges(1, 3, 100);
    CMessage("%SitDown%");
    CMessage("%ThatsEnough%");
    addContact(1);
    removeContact(3);
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
    CMessage("Someone is coming...");
    CMessage("And it\'s not you %SubName% %Lol%");
    addContact(4);
    CMessage("Have fun %domFriend3Name%");
    SMessage("%ThankYou%", -1, 4);
    removeContact(1);
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("You are trembling in anticipation for what I have planned next.");
    CMessage("and what I say next turns you into whatever I want.");
    CMessage("%KneelForMe%");
    CMessage("I have called you my pet before, but it has never been this literal.");
    CMessage("You must do what I say if you want to be allowed to touch your cock");
    CMessage("%DomName% should use my total submission reprogramming on you.");
    CMessage("By now you are wrapped around my finger, but even then it\'s not enough for me.");
    CMessage("I do not like to share my slaves like %DomName%");
    CMessage("You\'re going to stroke that cock exactly as I tell you too.");
    CMessage("It might not even feel good. I don\'t care.");
    CMessage("For " + random("each ", "every ") + "number I " + random("say", "count"));
    CMessage("You " + random("will ", "need to ") + "%Stroke% once");
    CMessage("keep timing with me");
    CMessage("%AV_CountContact3%");
    sleep(20);
    CMessage("%Stop%", 0);
    CMessage("Don\'t you dare fucking cum");
    CMessage("This isn\'t about your pleasure but rather, your obedience.");
    if(!getVar("av_fetish_pain", false))
    {
        wd4ydmvvv();
        return;
    }
    CMessage("Get the spoon..");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    wd4ydmvvv();
}
function wd4ydmvvv()
{
    CMessage("%Okay%");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("With the snap of my fingers I can transfix you");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "e390sk()")
    CMessage("open your mind to my suggestion, and make you sink even deeper.");
    SMessage("%domFriend3Name% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Glitter3" + java.io.File.separator + "StrokeFaster.mp3");
    CMessage("I want you on the edge very soon...");
    sleep(10);
    CMessage("%KeepStroking%");
    SMessage("%domFriend3Name% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Glitter3" + java.io.File.separator + "BegMe.mp3");
    sleep(10);
    CMessage("%Edge%");
    iew9340();
}
function iew9340()
{
	CMessage("%edgingtaunts1%");
    iew9340();
    return;
    e390sk();
}
function e390sk()
{
    CMessage("%HoldTheEdge%");
    CMessage("Hold while I count you down...");
    setVar("edgingmode", "Normal");
    CMessage("That\'s it...");
    SMessage("%domFriend3Name% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Glitter3" + java.io.File.separator + "5toStop.mp3");
    sleep(11);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Get the spoon..");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    CMessage("I am going to make it IMPOSSIBLE for you to forget me.");
    CMessage("Not that you\'d ever try, now would you?");
    addContact(1);
    removeContact(4);
    return;
    
    Modulo4();
}
function Modulo4()
{
    if(!getVar("av_fetish_pain", false))
    {
        CMessage("You\'re enjoying those strokes a little bit too much, %Name%");
    }
    if(!getVar("av_fetish_pain", false))
    {
        CMessage("But we can fix that...");
        StopNoPain();
        return;
    }
    switch(random("B01", "B02"))
    {
        case "B01":
        B01();
        return;
        break;
        case "B02":
        B02();
        return;
        break;
    }
    
    B01();
}
function B01()
{
    CMessage("You\'re enjoying those strokes a little bit too much, %Name%");
    CMessage("But we can fix that... by busting your %Balls%");
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage("Get your spoon ready");
    sleep(15);
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("Now you can go back to enjoying yourself again %Smile%");
    slo4wp();
    return;
    
    B02();
}
function B02()
{
    CMessage("Making you %JerkOff% is a lot of fun...");
    CMessage("But so is busting your %Balls% %Grin%");
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage("Get your spoon ready");
    sleep(15);
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("Mmm pleasure and pain... the challenge is always getting the mix right");
    slo4wp();
    return;
    
    StopNoPain();
}
function StopNoPain()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage("Just sit there...");
    //Command:Slideshow(Softcore,slow)
	setSlideShow("SOFTCORE","slow");
    CMessage("no " + random("touching", "stroking"));
    CMessage("Just watch some nice pictures...");
    //TODO: Turn Slideshow on
	slideShowOn();
    sleep(randomInt(40, 60));
    //TODO: Turn Slideshow off
	slideShowOff();
    CMessage("%ThatsEnough%");
    slo4wp();
    return;
    
    slo4wp();
}
function slo4wp()
{
    CMessage("It\'s no surprise anymore of course, this is who you are");
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("You really are as pathetic as you seem to be %Laugh%");
    }
    CMessage("It\'s okay though, %SubName%");
    CMessage("It\'s not like I need you for anything else");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("I\'m wasn\'t going to offer any sexual favours to you");
    CMessage("I was never going to debase myself by spreading my legs and begging you to fuck me");
    CMessage("You will always be a toy for me to play with and nothing more");
    CMessage("To make you feel SO good.");
    CMessage("But to do this, you need to completely surrender to me.");
    CMessage("You need to give up all of your control, all of your power, and do EVERYTHING I say.");
    CMessage("%Stop%", 0);
	stopStroking();
    let answer0 = getInput("Do you give up your will, do you SURRENDER to me?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("That was easy!");
        pass22();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
    }
    CMessage("You\'re here because of a sexual frustration.");
    CMessage("Something you need, or at least something you think you do, but that you can\'t get alone.");
    CMessage("You need to give up control for that.");
    let answer1 = getInput("do you SURRENDER to me?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesorNo% %SubName%?");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("%GoodBoy%");
        pass22();
        return;
    }
    else if (answer1.isLike("no"))
    {
        CMessage("%EmoteSad%");
        increaseAnger(3)
        Fail();
        return;
    }
    pass22();
}
function pass22()
{
    CMessage("Now then, I command you, %PetName%, to playfully circles your nipple");
    CMessage("every once and a while giving it a tug.");
    sleep(15);
    let answer0 = getInput("Ahh, do you like when you pull on your nipples?", 5);
    if (answer0.isTimeout())
    {
        sqw4hmf();
        return;
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%GoodBoy%");
        increaseAnger(-3)
    }
    else
    {
    }
    let answer1 = getInput("Tell me you like it when tug and pinch your nipples.");
    if (answer1.isLike("like", "nipples", "pich", "tug"))
    {
        CMessage("%GoodBoy%");
        increaseAnger(-3)
    }
    else
    {
    }
    sqw4hmf();
}
function sqw4hmf()
{
    CMessage("It seems that your %Cock% likes this too, he\'s rock hard.");
    CMessage("Let\'s see if I can make him twitch.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Oh wow, look at you leaking...");
    CMessage("Good boy, so obedient!");
    CMessage("Look at all that pre-cum, it\'s just leaking out of you.");
    if(!getVar("av_fetish_cei", false))
    {
        a2nk0();
        return;
    }
    let answer0 = getInput("Now let me ask you, have you ever tasted it before?");
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
        CMessage("I see.");
    }
    CMessage("We don\'t just talk %GeneralTime%, you\'ll feel so much better if you DO it.");
    let answer1 = getInput("Now tell me how much you want to taste your pre-cum", 5);
    if (answer1.isTimeout())
    {
        h65tds();
        return;
    }
    while (!(answer1.isLike("taste") || answer1.isLike("cum") || answer1.isLike("want") || answer1.isLike("lick")))
    {
    }
    if (answer1.isLike("taste", "cum", "want", "lick"))
    {
        CMessage("%GoodBoy%");
        increaseAnger(-3)
    }
    h65tds();
}
function h65tds()
{
    CMessage("Now open wide.");
    CMessage("licks up a drop with a finger");
    CMessage("now touch your tongue with that finger.");
    CMessage("suck your finger dry and taste to warm, salty liquid.");
    CMessage("Good boy.");
    CMessage("Not so bad right? I bet you liked it, you little SLUT!");
    CMessage("Tell me how much of a SLUT you are.");
    CMessage("Say: I\'m a SLUT!");
    a2nk0();
}
function a2nk0()
{
    CMessage("%stopstroking%", 0);
	stopStroking();
    if (randomInteger(1, 100) <= 65)
    {
        EndNoAn();
        return;
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Go get some lube");
        sleep(30);
    }
    CMessage("%KneelForMe%");
    CMessage("spread your legs further apart");
    CMessage("look how exposed your ass is to me.");
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Lube your asshole for me");
        sleep(20);
    }
    CMessage("You\'ve been so good so far, and I want to reward you.");
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("I want you to finger fuck your ass");
        CMessage("circle around your ass with your finger, gently probing your hole, loosening you up.");
        CMessage("start to go in further.");
        sleep(20);
        CMessage("You are a SLUT, your little asshole squeezing your finger so tight.");
        CMessage("Fuck your ass");
        sleep(20);
        CMessage("You like that SLUT? Do you like it when you finger you ass?");
        CMessage("Stop");
        CMessage("Go clean yourself");
        sleep(30);
    }
    
    EndNoAn();
}
function EndNoAn()
{
    return;
}