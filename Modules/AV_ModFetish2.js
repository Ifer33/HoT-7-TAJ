DMessage("AV_ModFetish2: start");
main();
DMessage("AV_ModFetish2: end");
function main()
{
    if(getVar("AV_ModFetish2_NotFirstTime", false))
    {
        AV_ModFetish2_NotFirstTime();
        return;
    }
    setVar("AV_ModFetish2", 0);
    setVar("AV_ModFetish2_NotFirstTime", true);
    AV_ModFetish2_NotFirstTime();
}
function AV_ModFetish2_NotFirstTime()
{
    if (getVar("AV_ModFetish2", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModFetish2", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModFetish2", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModFetish2", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModFetish2", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModFetish2", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModFetish2", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModFetish2", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModFetish2", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModFetish2", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModFetish2", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModFetish2", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModFetish2", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModFetish2", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModFetish2", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModFetish2", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModFetish2", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModFetish2", getVar("AV_ModFetish2", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModFetish2", getVar("AV_ModFetish2", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModFetish2", getVar("AV_ModFetish2", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModFetish2", getVar("AV_ModFetish2", 0) + 1000);
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
    setVar("AV_ModFetish2", 0);
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
    if(getVar("av_fetish_cei", false))
    {
        av_fetish_cei();
        return;
    }
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Audio.js");
    return;
    return;
    av_fetish_cei();
}
function av_fetish_cei()
{
    CMessage("Every drop of precum that leaks from your cock ");
    if (randomInteger(0, 100) <= 50)
    {
        CMessage("every stroke you make");
    }
    CMessage("brings you closer to nirvana");
    edge();
    CMessage("If you edge long enough, maybe I WON\'T make you ruin your orgasm.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("lick up all your pre-cum while you stroke");
    CMessage("and maybe you\'ll be allowed to cum like a MAN.");
    let answer0 = getInput("Would you like that %PetName%");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Lol%");
        increaseAnger(-3)
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
    }
    CMessage("Can you achieve that?");
    CMessage("%stopstroking%", 0);
	stopStroking();
    CMessage("When it drips from your peehole");
    CMessage("you must clean all drips by " + random("Dabbing your finger in your mess and feeding it to yourself", "Kneeling on all fours and tonguing your mess manually"));
    edge();
    CMessage("Are you SURE you want to cum?");
    CMessage("I mean you could " + random("edge a LITTLE longer", "let that precum leak out"));
    CMessage("mmmmmh, don\'t you want to leak for a while?");
    CMessage("%StartStroking%");
    CMessage("stroke some precum out!");
    CMessage("%stopstroking%", 0);
    CMessage("then palm with it until you\'re dry, then..");
    let answer1 = getInput("who\'s gonna be a good %PetName% and lick up all your drippies?",7);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("you are!");
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
    CMessage("I\'m so glad you\'re here.");
    CMessage("To allow you maximum opportunity to show your devotion me,");
    CMessage("you\'ll edge several times, each tougher than the last.");
    CMessage("The last will be special, your most devoted act to me.");
    CMessage("%StartStroking%");
	//setStrokingNoTaunt();
    CMessage("So for the first one, let\'s build to the edge slowly.");
    CMessage("Follow the beat");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b055.mp3");
    CMessage("You enjoy that, don\'t you?");
    CMessage("Mmmh following all my instructions like a good boy.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b075.mp3");
    CMessage("I love to imagine your hard cock in your hand.");
    CMessage("Stroke a little faster, that\'s it.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b120.mp3");
    CMessage("Mhmmm. Keep %Stroking% it for me.");
    CMessage("We\'re stroking it faster. Nice and hard.");
    CMessage("Now %Edge%");
    //startEdging();
	setLongHold(50);
    holdEdge();
    CMessage("You did such a good job of holding it for me.");
    CMessage("You did it for me just because I asked you to.");
    CMessage("Thinking about you so aroused, and so obedient.");
    CMessage("I\'ll bet you\'re still really hard, and really aroused. ");
    if (randomInteger(0, 100) <= 50)
    {
        CMessage("But don't stroke yet");
    }
    CMessage("I\'ll bet it will only take only a few strokes to get you back to the edge.");
    CMessage("You want to get right back there, don\'t you?");
    CMessage("It feels so good to be on the edge.");
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        CMessage("But now, I want to hurt you a little");
    }
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        CMessage("Put 2 clothespins on your nipples");
    }
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        CMessage("And 4 on your %Balls%");
        sleep(10);
    }
    CMessage("You\'d like that, wouldn\'t you.");
    CMessage("Now wrap your whole hand around your whole cock, and");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("You know what I need right now?");
    CMessage("I need to hear you whimper. ");
    if (randomInteger(0, 100) <= 50)
    {
        CMessage("I want to hear you beg");
    }
    //CMessage("%Edge%");
    //startEdging();
	setLongHold(100);
    holdEdge();
    //setLongHold(100);
    CMessage("You\'re such a good boy.");
    let answer0 = getInput("You want to be totally mine, don\'t you?",7);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
        return;
    }
    CMessage("Give up all control to me?");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("We will work together to get you as close to orgasm as possible");
    CMessage("and make this as hard for you as possible,");
    CMessage("so that you can show me your maximum devotion.");
    CMessage("You want to do this for me to be my good boy, don\'t you?");
    //CMessage("%Edge%");
    //startEdging();
	setExtremeHold(100);
    holdEdge();
    CMessage("Let\'s take a minute to rest before the last build.");
    sleep(10);
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("You\'re already so close to the edge this won\'t take long.");
    CMessage("I want to hear you beg... ");
    if (randomInteger(0, 100) <= 50)
    {
        CMessage("I want to hear you moan as loud as I am");
    }
    CMessage("Now pick up the pace.");
    CMessage("Really work it.");
    //CMessage("%Edge%");
    //startEdging();
	setExtremeHold(100);
    holdEdge();
    //setExtremeHold(100);
    CMessage("How does that feel?");
    CMessage("Remember I told you that the joy of obedience would be the greatest joy of all?");
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        CMessage("You can remove the clothespins");
    }
    CMessage("Doesn\'t it feel good to know you\'re my good boy?");
    return;
    Modulo3();
}
function Modulo3()
{
    getTeasePicture(3);
    lockImages();
	let answer0 = getInput("Do you still think this is %Sexy%");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %PetName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("I\'m glad to hear you think so");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("That\'s too bad");
    }
    CMessage("Cause you\'re %Gonna% edge to that right now %Grin%");
    edge();
    unlockImages();
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
    if(getVar("av_fetish_pain", false))
    {
        av_fetish_pain();
        return;
    }
    CMessage("I " + random("think I\'ll take ", "need to take ") + "a " + random("short break", "break", "pause", "short pause"));
    CMessage("%AV_Luxury%");
    CMessage(random("Good thing ", "Thankfully ") + "you have some videos on your computer");
    CMessage("Stroke to the beat %Grin%");
    CMessage("Have fun");
    playVideo("Videos" + java.io.File.separator + "*.*");
    CMessage("%CensorContinue%");
    return;
    av_fetish_pain();
}
function av_fetish_pain()
{
    if(getVar("AV_Pins", false))
    {
        AV_Pins();
        return;
    }
    Iniciar12();
    return;
    AV_Pins();
}
function AV_Pins()
{
    CMessage("You can remove all clothespins");
    delVar("AV_Pins");
    Iniciar12();
}
function Iniciar12()
{
    CMessage("%PetName%");
    if(!getVar("AV_PinDone", false))
    {
        run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_GetPins");
    }
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("%StrokeSlower%");
	addStrokingBPM(-20);
    CMessage("Put a clothespin on each nipple");
    CMessage("and start quickly tapping your balls with a ruler 2-3 times each second");
    CMessage("while maintaining the slow paced %Stroking%.");
    sleep(10);
    CMessage("If you edge start over!");
    sleep(10);
    CMessage("Now pinch and twist those clothespegs!");
    sleep(15);
    CMessage("Take off the clothespins");
    CMessage("Now massage those balls, enjoy how nice it feels!");
    sleep(15);
    return;
}