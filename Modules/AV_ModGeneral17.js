DMessage("AV_ModGeneral17: start");
main();
DMessage("AV_ModGeneral17: end");
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
    CMessage("%Edge%");
    startEdging();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    IniModule();
}
function IniModule()
{
    if(getVar("AV_ModGeneral17_NotFirstTime", false))
    {
        AV_ModGeneral17_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral17", 0);
    setVar("AV_ModGeneral17_NotFirstTime", true);
    AV_ModGeneral17_NotFirstTime();
}
function AV_ModGeneral17_NotFirstTime()
{
    if (getVar("AV_ModGeneral17", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral17", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral17", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral17", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral17", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral17", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral17", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral17", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral17", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral17", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral17", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral17", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral17", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral17", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral17", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral17", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral17", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral17", getVar("AV_ModGeneral17", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral17", getVar("AV_ModGeneral17", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral17", getVar("AV_ModGeneral17", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral17", getVar("AV_ModGeneral17", 0) + 1000);
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
    setVar("AV_ModGeneral17", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    CMessage("I am training you, darling.");
    CMessage("So that you will understand how you are supposed to act around me.");
    CMessage("And you know to listen to me.");
    CMessage("You know to do exactly what I say.");
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
		cbt("ball");
    }
    edge();
    CMessage("Mmmmm, good boy...");
    CMessage("Ha.. you didn\'t even resist that time..");
    CMessage("It looks like you are responding to your training...");
    let answer0 = getInput("You like it when I\'m in control, don\'t you..?", 6);
    if (answer0.isTimeout())
    {
        AV_Timeo28();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("And that gets you off.. doesn\'t it?");
        increaseAnger(-3)
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Mmmm, I am in control, aren\'t I?");
        increaseAnger(3)
    }
    AV_Timeo28();
}
function AV_Timeo28()
{
    CMessage("Makes your %Cock% realllly fuckin\' hard...");
    CMessage("Mmmm, apparently, it does..");
    CMessage("who would have thought, you would want to be bossed around like this?");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Who would have thought you\'d like it when I.. call you names.");
    CMessage("That it would make you feel this powerful urge...");
    CMessage("to " + random("touch yourself", "jack off", "cum"));
    if(!getVar("av_fetish_rough", false))
    {
        CMessage("I hope that wasn\'t too mean, though...");
    }
    let answer0 = getInput("You like it when " + random("I\'m mad, don\'t you", "I\'m mean"), 5);
    if (answer0.isTimeout())
    {
        AV_Timeo63();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        changeApathyLevel(2);
        increaseAnger(-3)
    }
    else if (answer0.isLike("no"))
    {
        increaseAnger(3)
    }
    AV_Timeo63();
}
function AV_Timeo63()
{
    CMessage("you also love when I tease you.. make you feel a little guilty..");
    CMessage("about " + random("the way that you get off on that soooo fucking hard", "how it makes you excited and a little scared"));
    CMessage("the hardest you ever have.. every fucking time..");
    switch(getOldDommeLevel()){
		case 1:
			edge();
			break
		case 2:
			edge();
			break
		case 3:
			DoEdges(2, 2, 0);
			break
		case 4:
			DoEdges(3,3, 0);
			break
		case 5:
			DoEdges(3, 3, 25);
			break
	}
    CMessage("So.  Dooo you? Like it when I... am a total fucking BITCH.. to you?");
    let answer0 = getInput("When I torture you.. like this?",10);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("When I make sure that there is so much pressure " + random("built up ", "forcing ", "urging ", "tormenting ") + "you.");
    CMessage("Driving your every thought?");
    CMessage("The distress, as I casually ignore those pain fully blue balls");
    CMessage("that I so knowingly and willfullly caused?");
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
		cbt("ball");
    }
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("Not that I care about your silly little feelings, but..");
        //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
		cbt("ball");
    }
    CMessage("Ah");
    CMessage("I saw that look.");
    CMessage("I know how you feel.");
    CMessage("You\'re just really.. Well not calm. Docile, I guess? " + random("Obedient", "Subservient"));
    CMessage("Aren\'t you?");
    CMessage("Hmm?");
    CMessage("Well....");
    return;
    Modulo2();
}
function Modulo2()
{
    CMessage(random("This %Cock% is my cock", "That %Cock% is my property", "The cock is mine. And mine alone. It just happens to be attached to you"));
    CMessage(random("Not yours. Mine", "And I mean it, you don\'t touch that cock without my express permission", "It belongs to me"));
    CMessage(random("When I want it, I will have it", "That cock is there for my pleasure, not yours"));
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("If I want to spend an hour teasing my clit with the head of your cock, that\'s what I\'m going to fucking do.");
    CMessage("And afterwards, if I want to be fucked by my cock, then I will be fucked by my cock.");
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_rough", false))
    {
        CMessage("And if I don\'t want to be fucked by my cock, then you will get the fuck out of my sight while I clean myself up.");
    }
    CMessage("And no masturbating on your own.");
    CMessage("You\'ll save that load for when I want it.");
    CMessage("Good boy.");
    CMessage("Keep stroking that %Cock% for me.");
    CMessage("Don\'t worry.");
    CMessage("You\'re allowed to play with yourself when I tell you to.");
    CMessage("There will be no punishment.");
    edge();
    CMessage("%PetName%, that little object between your legs is looking awfully sad.");
    CMessage("You must be so " + random("desperate", "frustrated"));
    CMessage("You\'ve been such an obedient %PetName% lately");
    CMessage(random("Mistress is going to edge you,over and over", "Goddess is going to bring you to the brink, make you moan and squirm, then stop"));
	DoEdges(2, 4, 0);
    CMessage("Don\'t you dare fucking cum until you are given permission, %Slave%.");
    CMessage("%KneelForMe%");
    CMessage("You wanted a cute, dominant chick. Now you\'ve got to know your place.");
    if(getVar("av_fetish_pegging", false) && getVar("AV_LikeAnal", false))
    {
        CMessage("You\'re eventually going to ride the strapon I bought, but I\'m not going to fuck you.");
    }
    if(getVar("av_fetish_pegging", false) && getVar("AV_LikeAnal", false))
    {
        CMessage("You\'re going to fuck yourself unto me.");
    }
    if(getVar("av_fetish_pegging", false) && getVar("AV_LikeAnal", false))
    {
        CMessage("You\'re going to ride me, like a " + random("bitch ", "whore ", "slut ", "cunt ") + "all those demeaning terms will be used against you, as you take it");
    }
    if(getVar("av_fetish_pegging", false) && getVar("AV_LikeAnal", false))
    {
        CMessage("from the back, from a woman who you will address as your superior.");
    }
    CMessage("I understand, baby. But in a way this is like a test.");
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
		cbt("ball");
    }
    CMessage("I say jump, you say how high.");
    CMessage("You need to understand this is a \"female-led relationship\"");
    CMessage("and as much as you fight it, and as tough as you try to appear");
    CMessage("I know it turns you on.");
    edge();
    CMessage("I wear the pants, you can uh, wear the panties?");
    CMessage("Think about it, there\'s a reason terms like " + "\"female supremacy\" get you worked up.");
    CMessage("It\'s nature\'s way of pointing you in the right direction.");
    CMessage("It\'s my body, and you\'ve got to respect any decision I make with it.");
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        cbt("ball");
    }
    CMessage("%Edge%");
    startEdging();
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        cbt("ball");
    }
    edge();
    CMessage("You better do a perfect job then!");
    CMessage("%SitDown%");
    return;
    Modulo3();
}
function Modulo3()
{
    CMessage("%LittleGame%");
    CMessage("I found on the Milovana forum, Little Miss Jay created it");
    CMessage("but I changed to fit in our session");
    CMessage("It\'s called the pyramid game.");
    CMessage("It\'s a test of endurance, stamina and will");
    let answer0 = getInput("Do you know?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%, we can jump to the game");
        PiramGame();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("OK, let me explain to you");
    }
    CMessage("As the name suggests, imagine a pyramid");
    CMessage("you\'ll start at the bottom with a longer duration then as you get to the top, the time will reduce...");
    CMessage("The task shouldn\'t take you very long");
    CMessage("but you must not have a break of longer than 1 minute between rounds.");
    PiramGame();
}
function PiramGame()
{
    CMessage("certainly highlight who can keep their cummies in those %Balls% during a lot of teasing and stroking.");
    CMessage("Let\'s start");
    CMessage("Round 1");
    CMessage("%StartStroking%");
    CMessage("Stay nice and slow with your hand tight");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b055.mp3");
    CMessage("and imagine my lips tightly around that %Cock% and taking the length of you into my mouth");
    setTempVar("av_intera_015", true);
    CMessage("You would have to be an extremely good boy to receive this sort of attention from me.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b055.mp3");
    CMessage("Even thinking of my doing this to you, you\'re lucky.");
    //Command:Slideshow(Femdom,slow)
	setSlideShow("FEMDOM","slow");
    CMessage("Keep going");
    //TODO: Turn Slideshow on
	slideShowOn();
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b055.mp3");
    sleep(11);
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b055.mp3");
    sleep(17);
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b055.mp3");
    sleep(17);
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b055.mp3");
    sleep(17);
	stopAudio();
    CMessage("%stopstroking%", 0);
    //TODO: Turn Slideshow off
	slideShowOff();
    CMessage("it\'s going to be easy for me to control you in the future.");
    sleep(20);
    CMessage("Enjoy your rest");
    sleep(20);
    CMessage("Round 2");
    CMessage("%StartStroking%");
    CMessage("Here I want you stroking that cock at a medium pace");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b110.mp3");
    CMessage("this is the kind of pace I could imagine sitting on you");
    sleep(10);
    CMessage("while you\'re tied spread eagle on my bed unable to move an inch.");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b110.mp3");
    CMessage("I\'d grind back and forth and you\'d moan through the wet panties I\'d have stuffed into your mouth.");
    sleep(10);
    CMessage("Every second you\'d be holding back your cum");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b110.mp3");
    CMessage("%Balls% reaching bursting point and that desperate cock throbbing.");
    sleep(10);
    CMessage("%EmoteHappy%");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b110.mp3");
    sleep(17);
	stopAudio();
    CMessage("%stopstroking%", 0);
    sleep(20);
    let answer0 = getInput("How about a little Ballbusting to help you in the next round?", 7);
    if (answer0.isTimeout())
    {
        AV_NoBall();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh " + "...so no rest for you");
        AV_NoBall();
        return;
    }
    cbt("ball");
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        cbt("ball");
    }
    AV_NoBall();
}
function AV_NoBall()
{
    CMessage("Round 3");
    CMessage("%KneelForMe%");
    CMessage("%StartStroking%");
    CMessage("You will perform for me.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b120.mp3");
    CMessage("You will get to your knees right now and tug away desperately in time to the metronome.");
    sleep(10);
    CMessage("I\'d have you kneeling in the corner of the bedroom while I relax on bed");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b120.mp3");
    CMessage("Maybe even teasing myself a little");
    sleep(10);
    CMessage("my tight juicy pussy right in your view.");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b120.mp3");
    CMessage("You\'re so desperate to touch me aren\'t you boy?");
    sleep(10);
	stopAudio();
    CMessage("%stopstroking%", 0);
    CMessage("%SitDown%");
    sleep(20);
    CMessage("You must be so happy");
    CMessage("knowing how much it pleases me that you were so obedient.");
    sleep(20);
    CMessage("Round 4");
    CMessage("Tease just that sweet spot and the tip of that probably wet by now cock.");
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
	setStrokingNoTaunt();
    CMessage("I want your fingers caressing yourself");
    sleep(10);
    CMessage("thinking of my delicate but teasing touch");
    sleep(20);
    CMessage("rubbing and bringing you to a higher level of desperation...");
    sleep(10);
    CMessage("If you could get any more desperate... %EmoteWink%");
    CMessage("%stopstroking%", 0);
	stopStroking();
    sleep(20);
    CMessage("You are so obedient.");
    CMessage("Such a good boy.  I\'m so proud of you.");
    CMessage("And so proud to call you mine. My good boy.");
    sleep(20);
    CMessage("Round 5");
    CMessage("%StartStroking%");
    CMessage("Back to fast paced stroking again %PetName%.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b180.mp3");
    CMessage("I want you to imagine my hands on you, telling you over and over not to cum");
    sleep(10);
    CMessage("you\'re making a wimpering sound");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b180.mp3");
    CMessage("you know better than to ask to cum right now.");
    sleep(10);
	stopAudio();
    CMessage("%stopstroking%", 0);
    delVar("av_intera_015");
    CMessage("Good job %SubName%");
    CMessage("This was %Hot%");
    return;
    Modulo4();
}
function Modulo4()
{
    CMessage("You are going to touch yourself for me.");
    let answer0 = getInput("You are going to pay close attention as your hands become an extension of my will, am I clear?",10);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("We\'ll start simple, take your dominant hand and place it along your neck as if you\'re going to massage it.");
    CMessage("Now, gently squeeze your neck and drag it down to your navel. Slowly.");
    CMessage("I want you to feel your palm as it presses down along your chest, the way the fingers trail from behind as it pulls lower.");
    CMessage("I want your other hand on top your knee, and then lifting until it hovers and only your fingertips remain in contact.");
    CMessage("Your dominant hand had better still be on your navel, because that %Cock% isn\'t allowed to be touched.");
    CMessage("Not yet.");
    CMessage("Drag your other hand up along your thigh");
    CMessage("just the fingertips trailing from behind as you make a small turn into your inner thighs");
    CMessage("but don\'t touch yourself down there.");
    CMessage("Not yet.");
    CMessage("Instead, I want you to go around, to tease across with all five fingers as you avoid your cock for me");
    CMessage("until you reach the other knee.");
    CMessage("See, was that so hard?");
    CMessage("Index finger of your dominant hand out");
    CMessage("I want you to drag it all the way from your chin down to the base of that cock");
    CMessage("and then you\'ll encircle it with your thumb.");
    CMessage("Don\'t rush, I want you to savour " + random("each moment ", "every last sensation ") + "that is delivered unto you through my commands.");
    CMessage(random("You\'re getting harder now", "aren\'t you", "Are you down to your cock"));
    CMessage("Good, now tighten your grip");
    CMessage("let the other fingers relax along your %Balls% for a little before you curl them up in a wistful touch.");
    CMessage("Hand still tightened around the base");
    CMessage("I want the other one pulled closer to your cock, a single finger for now.");
    CMessage("Take that single finger and drag it along the underside");
    CMessage("pulling it along the length of your cock but don\'t touch the head!");
    CMessage("Not yet.");
    CMessage("And then I want you to repeat the action, with two fingers this time.");
    CMessage("And then three.");
    CMessage("And then four.");
    sleep(10);
    CMessage("And then finally all 5 fingers pulling along that cock of yours");
    CMessage("until you are within a hair\'s breadth of your head before you pull away.");
    CMessage("You can release your hold now, letting the cock stand on its own");
    CMessage(random("waiting in anticipation for my next command", "eager to please its mistress"));
    CMessage("Go on, take a finger and wipe off the tip");
    if(getVar("av_fetish_cei", false))
    {
        CMessage("you can even have a taste, always nice when boys aren\'t afraid to sample themselves.");
    }
    CMessage("You see those bare thighs?");
    CMessage("I want you to pull your fingertips along the insides");
    CMessage("crossing over without slowing down over your aching balls.");
    if (randomInteger(1, 100) <= 50)
    {
        AVRND38();
        return;
    }
    CMessage("Then I want you to do it again, with the other hand this time");
    CMessage("and along the other thigh.");
    AVRND38();
}
function AVRND38()
{
    CMessage("And then, and only then may you finally take ahold of that cock you have been so patient with.");
    CMessage("We\'ll start slow, with nice long strokes up and down that cock of yours.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage(random("Mmm, wouldn\'t it be so much better in my mouth", "It feels good doesn\'t it, to finally be allowed to stroke that aching cock of yours for me"));
    CMessage("Tugging upwards, just tight enough that the skin follows, and back down again.");
    CMessage("I want you to take it nice and slowly");
    CMessage("to feel the way \'my\' hand " + random("run itself along your cock", "embraces and tugs along your veiny shaft"));
    CMessage("the sensations it\'s delivering to you.");
    CMessage("Close your eyes for a bit, moan if you must but I want you to just have a moment to enjoy it all.");
    CMessage("Your other hand, I want you to pull it round the bottom to cup at your balls");
    CMessage("palming them");
    CMessage("kneading them and massaging them in preparation for that big load you\'re going to build.");
    CMessage("Now increase the pace, just a little bit.");
    CMessage(random("Just enough that you\'ll notice it but not too much", "I want this to last"));
    CMessage("Can you feel it, that increased pressure below as your cock begins to understand what it\'s in for");
    CMessage("all from \'my\' talented hands.");
    CMessage("Go on, " + random("whisper to me about how much you want it", "beg for my touch", "beg and you may stroke yourself faster"));
    CMessage("Do you feel that, my power over you?");
    CMessage("I want you to slowly get faster as time goes on.");
    CMessage(random("My hands accelerating in tune with your impending pleasure until you start to feel it", "That twitching, that rush and the powerful pleasure that your body yearns for"));
    edge();
    CMessage(random("Just for a moment, not long", "Take a moment to breath, to calm down"));
    CMessage("Once you\'ve relaxed a little, " + random("toes no longer curling ", "back no longer arching and breathing less laboured ") + "you may continue.");
    sleep(15);
    CMessage("I want you to gently stroke yourself to another edge");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("This time, I want you to hold it there as pressure builds up");
    CMessage("you balls tightening as you desperately massage them with your other hand");
    CMessage("your core tensing up in anticipation.");
    holdEdge();
    CMessage("Good boy");
    return;
}